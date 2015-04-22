$(document).ready(function() {
	Highcharts.setOptions({
		lang: {
			decimalPoint: '.',
			thousandsSep: ','
		}
	});

	$(function() { //begin national fig1
		$('#HC_NationalFig1').highcharts({
			chart: {
				zoomType: 'xy'
			},
			title: {
				text: 'Figure 1 - Total State and Federal Prison Populations'
			},
			subtitle: {
				text: 'Source: Bureau of Justice Statistics, National Prisoner Statistics Program'
			},
			xAxis: [{
				categories: [1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986,
					1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
					1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
					2009, 2010, 2011, 2012, 2013
				],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				title: {
					text: 'Number of State Prisoners',
					style: {
						color: 'black'
					}
				},
				labels: {
					format: '{value}',
				},
				min: 0,
				max: 1500000,
				tickInterval: 300000,
				tickAmount: 6,

			}, { // Secondary yAxis
				title: {
					text: 'Number of Federal Prisoners',
					style: {
						color: 'red'
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: 'red'
					}
				},
				min: 0,
				max: 250000,
				tickAmount: 6,
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
					'#FFFFFF'
			},
			series: [{
				name: 'Federal prison population',
				type: 'line',
				color: 'red',

				data: [29803, 26371, 24363, 28133, 29673, 31926, 34263, 40223,
					44408, 48300, 49928, 59171, 65526, 71608, 80259, 89587, 95034,
					100250, 105544, 112973, 123041, 135246, 145416, 156993, 163528,
					173059, 180328, 187618, 193046, 199618, 201280, 208118, 209771,
					216362, 217815, 215866
				],
				tooltip: {
					valueSuffix: ' federal prisoners'
				},
				min: 0,
				yAxis: 1,

			}, {
				name: 'State prison population',
				type: 'line',
				color: 'black',
				dashStyle: 'dash',
				data: [277473, 288086, 305458, 341797, 384133, 404929, 427739,
					462284, 500564, 536784, 577672, 653193, 708393, 753951, 802241,
					879714, 959668, 1025620, 1076380, 1127690, 1184110, 1228440,
					1248820, 1247040, 1276620, 1295540, 1316770, 1338290, 1375630,
					1397220, 1407000, 1407370, 1404030, 1382610, 1352580, 1358880
				],
				tooltip: {
					valueSuffix: ' state prisoners'
				},
			}]
		});
	}); //end national fig1
});
