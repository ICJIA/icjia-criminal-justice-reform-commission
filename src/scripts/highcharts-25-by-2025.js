$(document).ready(function() {
	//begin global hc parameters
	Highcharts.setOptions({
		lang: {
			decimalPoint: '.',
			thousandsSep: ','
		},
	}); //end global hc parameters

	$(function() { //begin fig1
		$('#HC2025_Fig1').highcharts({

			title: {
				text: 'Figure 1 - IDOC Population Trends and Projections',
				x: 10 //center
			},
			subtitle: {
				text: 'Trends Based on Varying Start Year',
				x: 10
			},
			xAxis: {
				categories: ['1989', '1990', '1991', '1992', '1993', '1994', '1995',
					'1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003',
					'2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
					'2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
					'2020', '2021', '2022', '2023', '2024', '2025'
				],
				title: {
					text: "Fiscal Year"
				},
				plotLines: [{
					color: 'red', // Color value
					dashStyle: 'dash', // Style of the plot line. Default to solid
					value: 0, // Value of where the line will appear
					width: 2 // Width of the line
				}, {
					color: 'green',
					dashStyle: 'dash',
					value: 13,
					width: 2
				}, {
					color: 'purple',
					dashStyle: 'dash',
					value: 22,
					width: 2
				}]
			},
			yAxis: {
				min: 20000,
				max: 60000,
				tickAmount: 5,
				title: {
					text: 'Inmate population'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.y}</b><br/>',
				valueSuffix: ' inmates',
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				borderWidth: 0
			},
			series: [{
				name: 'Actual IDOC Population',
				data: [22610, 27288, 28929, 30423, 33064, 35603, 37774, 38353,
					40402, 42156, 44312, 44771, 45582, 43107, 43155, 44379, 44669,
					45440, 45565, 45548, 45545, 47504, 48978, 48324, 48877
				],
				color: 'blue'
			}, {
				name: 'IDOC Projection',
				data: [null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, 49113, 49401, 49785, 50265, 50841,
					51513, 52281, 53145, 54105, 55161, null, null
				],
				color: 'black',
				dashStyle: 'dash'
			}, {
				name: 'SPAC Projected (24 year trend, 1989-2013)',
				data: [null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null,
					null, null, null, 48877, 49779, 50680, 51582, 52484, 53386, 54287,
					55189, 56091, 56992, 57894, 58796, 59698
				],
				color: 'red'
			}, {
				name: 'SPAC Projected (12 year trend, 2002-2013)',
				data: [null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null,
					null, null, null, 48877, 48827, 48776, 48726, 48675, 48625, 48574,
					48524, 48473, 48423, 48372, 48322, 48271
				],
				color: 'green'
			}, {
				name: 'SPAC Projected (3 year trend, 2011-2013)',
				data: [null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null,
					null, null, null, 48877, 49425, 49973, 50520, 51068, 51616, 52164,
					52711, 53259, 53807, 54355, 54902, 55450
				],
				color: 'purple'
			}]
		});
	}); //End fig 1


	$(function() { //begin fig2
		$('#HC2025_Fig2').highcharts({

			title: {
				text: 'Figure 2 - Reduction of IDOC Population',
				x: 10 //center
			},
			subtitle: {
				text: '25% Reduction of Twelve-Year Upward Trend',
				x: 10
			},
			xAxis: {
				categories: ['1989', '1990', '1991', '1992', '1993', '1994', '1995',
					'1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003',
					'2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
					'2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
					'2020', '2021', '2022', '2023', '2024', '2025'
				],
				title: {
					text: "Fiscal Year"
				},
			},
			yAxis: {
				min: 20000,
				max: 60000,
				tickAmount: 5,
				title: {
					text: 'Inmate population'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.y}</b><br/>',
				valueSuffix: ' inmates',
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom',
				borderWidth: 0
			},
			series: [{
				name: 'Actual IDOC Population',
				data: [22610, 27288, 28929, 30423, 33064, 35603, 37774, 38353,
					40402, 42156, 44312, 44771, 45582, 43107, 43155, 44379, 44669,
					45440, 45565, 45548, 45545, 47504, 48978, 48324, 48877
				],
				color: 'blue'
			}, {
				name: 'IDOC Population with 25% Reduction',
				data: [null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, 47859, 46841, 45823, 44805, 43787, 42769,
					41751, 40733, 39715, 38697, 37679, 36661
				],
				color: 'blue',
				dashStyle: 'dot'
			}, {
				name: 'SPAC Projected (12 year trend, 2002-2013)',
				data: [null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null,
					null, null, null, 48877, 49425, 49973, 50520, 51068, 51616, 52164,
					52711, 53259, 53807, 54355, 54902, 55450
				],
				color: 'green'
			}, {
				name: 'SPAC Projected with 25% Reduction)',
				data: [null, null, null, null, null, null, null, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null,
					null, null, null, 48877, 48270, 47662, 47055, 46447, 45840, 45232,
					44625, 44017, 43410, 42802, 42195, 41588
				],
				color: 'green',
				dashStyle: 'dash'
			}]
		});
	}); //end fig2

	$(function() { //begin fig3
		$('#HC2025_Fig3').highcharts({
			chart: {
				marginRight: 200
			},
			title: {
				text: '10 Percent Reduction in Offenders'
			},
			subtitle: {
				text: 'Difference in Impact between Violent and Non-violent offenders'
			},
			xAxis: {
				categories: ['Violent offenders', 'Non-violent offenders'],
			},
			yAxis: {

			},
			series: [{
					type: 'bar',
					name: 'Violent offenders',
					data: [166810, [35605]],
					showInLegend: false,

				}, { //viol
					type: 'pie',
					name: 'Percent reduction by class for violent offenders',
					data: [{
						name: 'Class X',
						y: null,

					}, {
						name: 'Class 1',
						y: 55,

					}, {
						name: 'Class 2',
						y: 32,
					}, {
						name: 'Class 3',
						y: 9
					}, {
						name: 'Class 4',
						y: 4
					}],
					center: [600, 50],
					size: 100,
					showInLegend: true,
					dataLabels: {
						enabled: false
					}
				}, { //nonviol
					type: 'pie',
					name: 'Percent reduction by class for non-violent offenders',
					data: [{
						name: 'Class X',
						y: 30,

					}, {
						name: 'Class 1',
						y: 26,

					}, {
						name: 'Class 2',
						y: 29,
					}, {
						name: 'Class 3',
						y: 8
					}, {
						name: 'Class 4',
						y: 7
					}],
					center: [600, 160],
					size: 100,
					showInLegend: false,
					dataLabels: {
						enabled: false
					}
				},

			]
		});
	}); //end fig3


});
