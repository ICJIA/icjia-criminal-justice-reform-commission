// Taken from https://gist.github.com/kares/956897


function parseParams(str) {
	var re = /([^&=]+)=?([^&]*)/g;
	var decode = function(str) {
		return decodeURIComponent(str.replace(/\+/g, ' '));
	};
	var params = {},
		e;
	if (str) {
		if (str.substr(0, 1) === '?') {
			str = str.substr(1);
		}
		while (e = re.exec(str)) {
			var k = decode(e[1]);
			var v = decode(e[2]);
			if (params[k] !== undefined) {
				if (!$.isArray(params[k])) {
					params[k] = [params[k]];
				}
				params[k].push(v);
			} else {
				params[k] = v;
			}
		}
	}
	return params;
}

//========================================================================
// Mock Server-Side HTTP End Point
//========================================================================
$.mockjax({
	url: "/contact",
	response: function(settings) {
		this.responseText =
			'<div>The form was successfully submitted. Thank you!</div>'
	}
});

$.mockjax({
	url: "/contact/email",
	responseTime: 250,
	response: function(settings) {
		var params = parseParams(settings.data);
		var email = params['email'];
		if (!/\S+@\S+\.\S+/.test(email)) {
			this.responseText = emailInputTemplate(email,
				"Please enter a valid email address");
		} else {
			this.responseText = emailInputTemplate(email, null);
		}
	}
});

//========================================================================
// Mock Server-Side Templates
//========================================================================



function emailInputTemplate(val, errorMsg) {
	return '<div id="email-div" class="form-group has-' + (errorMsg ? 'error' :
			'success') +
		' has-feedback"> \
               <label class="control-label">Email Address</label> \
               <input class="form-control" name="email" ic-replace-target="true" \
                      ic-post-to="/contact/email" ic-transition="none" ic-target="#email-div" value="' +
		val + '">' +
		(errorMsg ? '<span class="help-block text-error">' + errorMsg + '</span>' :
			"") +
		'</div>';
}
