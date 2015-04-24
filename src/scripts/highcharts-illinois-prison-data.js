Highcharts.setOptions({
	lang: {
		decimalPoint: '.',
		thousandsSep: ','
	}
});



$(function() { //Begin Figure 4
	$('#HC_IllinoisFig4').highcharts({
		chart: {
			zoomType: 'xy'
		},
		title: {
			text: 'Figure 4 - UCR Crime Indicators and Incarceration Rate'
		},
		subtitle: {},
		xAxis: [{
			categories: ['1973', '1974', '1975', '1976', '1977', '1978', '1979',
				'1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987',
				'1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995',
				'1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003',
				'2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
				'2012', '2013'
			],
			crosshair: true
		}],
		yAxis: [{ // Primary yAxis
			title: {
				text: 'I-UCR offense and drug arrest rates per 100,000 people',
				style: {
					color: 'black'
				}
			},
			labels: {
				format: '{value}',
			},
			min: 0,
			max: 6000,
			tickAmount: 7,
		}, { // Secondary yAxis
			title: {
				text: 'IDOC prison incarceration rate per 100,000 people',
				style: {
					color: 'red'
				}
			},
			labels: {
				format: '{value}',
			},
			min: 0,
			max: 600,
			tickAmount: 7,
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
			name: 'incarceration rate',
			type: 'line',
			color: 'red',
			yAxis: 1,
			data: [54.2, 59.5, 72.9, 88.5, 96.3, 93.9, 102.9, 109, 121.6, 121.6,
				135.3, 147.7, 160.3, 170.9, 174.3, 185.1, 216.2, 240.2, 251.7, 270.6,
				292.1, 306.8, 313.6, 321, 334.7, 350.8, 361.4, 364.2, 355.1, 340.8,
				345.8, 349.9, 356.2, 356.7, 356.1, 356.7, 352.9, 377.1, 376.6, 375.3,
				379.4
			],
			tooltip: {
				valueSuffix: ' incarcerated per 100,000 people'
			},
			min: 0,



		}, {
			name: 'I-UCR property offense rate',
			type: 'line',
			color: '#A3A3A3',
			dashStyle: 'dash',
			data: [3761.1, 4499.2, 4961.5, 4773.7, 4630.9, 4860.4, 5198.1, 5426.5,
				5328.5, 5076.9, 4845.9, 4619, 4651, 4815.1, 4697.7, 4875.4, 4888.7,
				4957.9, 5081.4, 4762.2, 4613.8, 4602, 4393.3, 4336.3, 4177.9, 3975.9,
				3753.8, 3581.1, 3480.4, 3436.8, 3312.2, 3204.9, 3129.8, 3064.5, 2972,
				2968.2, 2761.2, 2718.5, 2678.7, 2578.7, 2262.8
			],
			tooltip: {
				valueSuffix: ' offenses per 100,000 people'
			}
		}, {
			name: 'I-UCR violent offense rate',
			type: 'line',
			color: 'black',
			dashStyle: 'solid',
			data: [554.7, 619.2, 660.7, 618.5, 621.7, 665.4, 731.4, 802.9, 793.3,
				776, 733, 731.2, 723.2, 820.7, 809.5, 821.4, 862.7, 965.4, 1036.9,
				972, 950.6, 948, 981.3, 871.6, 841, 792.8, 676.6, 653, 634.7, 604.8,
				560.5, 551, 559.1, 549.7, 539.8, 531.7, 501.6, 444.9, 424, 414.8,
				387.7
			],
			tooltip: {
				valueSuffix: ' offenses per 100,000 people'
			}
		}, {
			name: 'I-UCR drug arrest rate',
			type: 'line',
			color: '#9494B8',
			dashStyle: 'Dot',
			data: [null, null, 181.3, 265, 239.3, 240.2, 231.6, 241.6, 242.8,
				249.8, 234.2, 261, 292.9, 281.9, 316.9, 401.5, 447.5, 402, 417.7,
				446.8, 547.2, 599.2, 717.7, 762.8, 806.7, 759.2, 895.5, 932.6, 901.4,
				839.2, 868.2, 892.9, 896.1, 891.3, 868.8, 776.1, 748.8, 851.9, 840.2,
				853.1, 840.1
			],
			tooltip: {
				valueSuffix: ' arrests per 100,000 people'
			}
		}]
	});
}); //End Figure4

$(function() { //begin Figure 5
	$('#HC_IllinoisFig5').highcharts({

		title: {
			text: 'Figure 5 - Illinois Arrests, Felony Filings, and Felony Sentences',
			x: 10 //center
		},
		xAxis: {
			categories: ['1982', '1983', '1984', '1985', '1986', '1987', '1988',
				'1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997',
				'1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006',
				'2007', '2008', '2009', '2010', '2011', '2012', '2013'
			],
			title: {
				text: "Calendar Year"
			}

		},
		yAxis: {
			min: 0,
			title: {
				text: 'Count'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			borderWidth: 0
		},
		series: [{
			name: 'I-UCR property, violent, and controlled substance arrests',
			data: [129404, 128003, 132928, 132501, 134783, 134356, 159265, 174961,
				171660, 179436, 177989, 182750, 185805, 190290, 192036, 190543,
				167180, 178824, 176532, 170987, 161154, 154916, 153374, 150297,
				140132, 135273, 131076, 124354, 114695, 113520, 109892, 103690
			],
			color: 'red'
		}, {
			name: 'Felony Filings',
			data: [42056, 41945, 43391, 43023, 47075, 44707, 54208, 63359, 68070,
				72690, 72330, 80554, 82545, 89565, 84044, 86466, 89759, 85559, 88845,
				94756, 96933, 92913, 94312, 94125, 95747, 93183, 90466, 86057, 81488,
				80775, 81580, 82828
			],
			color: 'blue'
		}, {
			name: 'Felony Sentences',
			data: [28506, 30258, 29520, 26989, 29516, 30880, 32327, 41292, 52762,
				54414, 53723, 54784, 56607, 59889, 58960, 63235, 63863, 60126, 60524,
				61445, 67336, 64624, 63115, 63069, 62175, 61106, 57014, 57675, 52601,
				52666, 53709, 53171
			],
			color: 'green'
		}]
	});
}); //END figure 5

$(function() { //begin figure 6
	$('#HC_IllinoisFig6').highcharts({

		title: {
			text: 'Figure 6 - Ratios of Arrests, Felony Filings, and Felony Sentences',
			x: 10 //center
		},
		subtitle: {
			text: 'Sentencing as a ratio of filings and arrests'
		},
		xAxis: {
			categories: ['1982', '1983', '1984', '1985', '1986', '1987', '1988',
				'1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997',
				'1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006',
				'2007', '2008', '2009', '2010', '2011', '2012', '2013'
			],
			title: {
				text: "Calendar Year"
			}

		},
		yAxis: {
			min: 0,
			title: {
				text: 'Ratio'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			borderWidth: 0
		},
		series: [{
			name: 'Felony Sentences per Felony Filings',
			data: [0.68, 0.72, 0.68, 0.63, 0.63, 0.69, 0.6, 0.65, 0.78, 0.75, 0.74,
				0.68, 0.69, 0.67, 0.7, 0.73, 0.71, 0.7, 0.68, 0.65, 0.69, 0.7, 0.67,
				0.67, 0.65, 0.66, 0.63, 0.67, 0.65, 0.65, 0.66, 0.64
			],
			color: 'red'
		}, {
			name: 'Felony Sentences per Total I-UCR Controlled Substance, Property, and Violent Arrests',
			data: [0.22, 0.24, 0.22, 0.2, 0.22, 0.23, 0.2, 0.24, 0.31, 0.3, 0.3,
				0.3, 0.3, 0.31, 0.31, 0.33, 0.38, 0.34, 0.34, 0.36, 0.42, 0.42, 0.41,
				0.42, 0.44, 0.45, 0.43, 0.46, 0.46, 0.46, 0.49, 0.51
			],
			color: 'blue'
		}]
	});
}); //end figure 6

$(function() { //begin figure 7

	$('#HC_IllinoisFig7').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Figure 7 - Illinois Sentences for Felonies and Misdemeanors'
		},
		subtitle: {},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		xAxis: {
			categories: ['Felonies', 'Misdemeanors']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Sentence Dispostions'
			}
		},
		plotOptions: {
			column: {
				allowPointSelect: true,
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					formatter: function() {
						return this.series.name + ': ' + Highcharts.numberFormat(this.point.y,
								1, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 1) +
							'%)';
					},
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
							'black'
					}
				}
			}
		},
		series: [{
			name: 'Probation',
			data: [21776, 8664]
		}, {
			name: 'Fines, Costs, Restitution',
			data: [16276, 28653]
		}, {
			name: 'Supervision',
			data: [6562, 58363]
		}, {
			name: 'Imprisonment - Jail',
			data: [11345, 17643]
		}, {
			name: 'Imprisonment - IDOC',
			data: [31228, null],
			color: 'red'
		}]
	});
}); //end figure 7

$(function() { //begin figure 8
	$('#HC_IllinoisFig8').highcharts({

		title: {
			text: 'Figure 8 - Illinois Prison Admissions by Class',
			x: 10 //center
		},
		subtitle: {
			x: 10
		},
		xAxis: {
			categories: ['1984', '1985', '1986', '1987', '1988', '1989', '1990',
				'1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
				'2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
				'2009', '2010', '2011', '2012', '2013'
			],
			title: {
				text: "Fiscal Year"
			}

		},
		yAxis: {
			min: 0,
			title: {
				text: 'New Court Admissions'
			},
			plotLines: [{
				value: 0,
				width: 1,

			}]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			valueSuffix: ' admissions',
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			borderWidth: 0
		},
		series: [{
			name: 'Class 4',
			data: [923,
				997, 925, 1110, 1087, 1376, 2004, 2260, 2489, 2934, 3500, 4259, 3320,
				4990, 5200, 6330, 7639, 7965, 9681, 10895, 12108, 12318, 11862,
				11994, 11547, 10768, 10105, 7615, 8207, 9073
			],
			color: 'blue'
		}, {
			name: 'Class 3',
			data: [2204, 2263, 2337, 2170, 2256, 2447, 2975, 3768, 3597, 3971,
				3738, 4336, 3991, 4432, 4886, 4766, 4848, 4206, 4604, 4896, 4821,
				4812, 5070, 4980, 4879, 4862, 4544, 3583, 3345, 3942
			],
			color: 'red'
		}, {
			name: 'Class 2',
			data: [2347, 2162, 2371, 3010, 3090, 3306, 4444, 4856, 5543, 5715,
				6047, 6720, 6975, 7046, 6714, 6359, 5443, 5098, 5603, 5575, 5710,
				5766, 5779, 6031, 6081, 5875, 5779, 5147, 5297, 5608
			],
			color: 'green'
		}, {
			name: 'Class 1',
			data: [1207, 1245, 1251, 1190, 1413, 1531, 1873, 2067, 2837, 3071,
				3679, 4241, 4356, 4086, 4057, 4106, 3865, 3520, 3804, 3580, 3676,
				3681, 3803, 3930, 3740, 3751, 3601, 3398, 3314, 3339
			],
			color: 'purple'
		}, {
			name: 'Class X',
			data: [1382, 1372, 1436, 1549, 1689, 1758, 2326, 2495, 3041, 3368,
				3478, 2887, 2723, 2418, 2470, 2265, 2015, 1847, 1987, 2086, 2029,
				1996, 1904, 1760, 1878, 1952, 1859, 1750, 1806, 1876
			],
			color: 'orange'
		}, {
			name: 'Class M',
			data: [351, 336, 365, 361, 346, 322, 466, 493, 478, 611, 603, 616, 563,
				584, 633, 590, 466, 394, 337, 357, 376, 399, 387, 299, 328, 260, 260,
				266, 276, 244
			],
			color: 'yellow'
		}]
	});
}); //end figure 8


$(function() { //begin figure 9
	$('#HC_IllinoisFig9').highcharts({

		title: {
			text: 'Figure 9 - Illinois Prison Admissions by Offense and Admission Type',
			x: 10 //center
		},
		subtitle: {},
		xAxis: {
			categories: ['1984', '1985', '1986', '1987', '1988', '1989', '1990',
				'1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
				'2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
				'2009', '2010', '2011', '2012', '2013'
			],
			title: {
				text: "Fiscal Year"
			}

		},
		yAxis: {
			min: 0,
			title: {
				text: 'Admissions'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			valueSuffix: ' admissions',
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			borderWidth: 0
		},
		series: [{
			name: 'New court - Person',
			data: [2980, 2876, 2865, 2897, 3002, 3083, 3832, 4393, 5306, 5720,
				5755, 6197, 5671, 5777, 5712, 5605, 5294, 4806, 5348, 5713, 5939,
				5942, 6203, 6061, 6058, 6390, 6363, 5707, 6053, 6557
			],
			color: 'red'
		}, {
			name: 'New court - Property',
			data: [4343, 4167, 4310, 4692, 4626, 4790, 5673, 6157, 6761, 7348,
				7038, 7178, 7156, 7358, 7500, 7240, 7563, 6972, 7816, 8340, 8635,
				8652, 8917, 8653, 8672, 8795, 8498, 6900, 6906, 7546
			],
			color: 'blue'
		}, {
			name: 'New court - Drug',
			data: [516, 655, 751, 1011, 1303, 1944, 3539, 4364, 4808, 5495, 7139,
				8552, 8010, 9309, 9452, 10185, 9866, 9780, 11007, 11400, 12074,
				11971, 11424, 12165, 11566, 10161, 9334, 7502, 7610, 8092
			]
		}, {
			name: 'New court - Sex',
			data: [495, 537, 647, 653, 783, 740, 860, 857, 919, 900, 894, 879, 876,
				845, 950, 1015, 1136, 1082, 1314, 1389, 1488, 1857, 1651, 1533, 1554,
				1491, 1414, 1295, 1281, 1401
			]
		}, {
			name: 'New court - Other/Unknown',
			data: [137, 155, 132, 151, 184, 207, 195, 184, 201, 216, 227, 265, 243,
				284, 1, 389, 431, 396, 539, 552, 590, 559, 620, 593, 610, 641, 550,
				364, 404, 498
			]
		}, {
			name: 'Technical violator',
			data: [1472, 1677, 2126, 2360, 999, 1219, 2678, 2850, 547, 530, 525,
				620, 856, 1288, 1831, 2401, 3734, 9577, 9256, 7062, 9174, 10494,
				10746, 7676, 6539, 9442, 10750, 10239, 8484, 7144
			],
			dashStyle: 'dash'
		}]
	});
}); //end figure 9

$(function() { //begin figure 10
	$('#HC_IllinoisFig10').highcharts({
		chart: {
			type: 'area'
		},
		title: {
			text: 'Figure 10 - IDOC Inmate Population by Class'
		},
		subtitle: {},
		xAxis: {
			categories: [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
				1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
				2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013
			],
			title: {
				text: 'Fiscal year'
			},
		},
		yAxis: {
			title: {
				text: 'Persons in IDOC'
			}
		},
		tooltip: {
			shared: true,
			valueSuffix: ' persons in IDOC'
		},
		plotOptions: {
			area: {
				stacking: 'normal',
				lineColor: '#666666',
				lineWidth: 1,
				marker: {
					enabled: false
				}
			}
		},
		series: [{
			name: 'Class 4',
			data: [314, 388, 384, 359, 329, 807, 1245, 1146, 1084, 1364, 1696,
				1712, 1985, 2456, 2681, 3467, 4239, 4771, 4717, 4949, 5690, 5926,
				5904, 5706, 5343, 4999, 6447, 6038, 5795, 5821
			]
		}, {
			name: 'Class 3',
			data: [1638, 1747, 1880, 1594, 1521, 2314, 3010, 3351, 2935, 3061,
				3132, 3326, 3514, 3796, 4100, 4280, 4402, 4316, 3689, 3817, 3868,
				3794, 3952, 3967, 3900, 3926, 4280, 4566, 4179, 4280
			]
		}, {
			name: 'Class 2',
			data: [3839, 3759, 4125, 4444, 4399, 5066, 6744, 6764, 7042, 7210,
				7487, 8714, 8895, 9626, 9922, 10220, 9666, 9862, 9159, 9010, 9077,
				9243, 9466, 9696, 9858, 9943, 10022, 10779, 10764, 10968
			]
		}, {
			name: 'Class 1',
			data: [2201, 2630, 2916, 3009, 3186, 3313, 4056, 4200, 4747, 5189,
				5636, 6603, 6644, 6970, 7351, 7801, 7995, 8148, 7577, 7343, 7409,
				7407, 7640, 7921, 7989, 7996, 7959, 8487, 8489, 8243
			]
		}, {
			name: 'Class X',
			data: [5925, 6283, 6676, 7055, 7399, 7161, 8179, 8886, 9962, 11192,
				12224, 11603, 11244, 11080, 11093, 11203, 11123, 11049, 10523, 10586,
				10835, 10792, 10917, 10799, 11019, 11305, 11493, 11822, 11820, 11972
			]
		}, {
			name: 'Class M',
			data: [2598, 2824, 3146, 3428, 3659, 3648, 3995, 4319, 4587, 4955,
				5339, 5711, 5981, 6352, 6714, 7031, 7209, 7298, 7300, 7309, 7367,
				7369, 7413, 7323, 7287, 7223, 7145, 7122, 7112, 7066
			]
		}, {
			name: 'Other/Unknown',
			data: [33, 53, 38, 0, 41, 301, 59, 263, 66, 93, 89, 105, 90, 122, 295,
				310, 137, 138, 142, 141, 133, 138, 148, 153, 152, 153, 158, 164, 165,
				527
			]
		}]

	});

}); //end figure 10

$(function() { //begin figure 11
	$('#HC_IllinoisFig11').highcharts({
		chart: {
			type: 'area'
		},
		title: {
			text: 'Figure 11 - IDOC Inmate Population by Offense Type'
		},
		subtitle: {},
		xAxis: {
			categories: [1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
				1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
				2011, 2012, 2013
			],
			title: {
				text: 'Fiscal year'
			},
		},
		yAxis: {
			title: {
				text: 'Persons in IDOC'
			}
		},
		tooltip: {
			shared: true,
			valueSuffix: ' persons in IDOC'
		},
		plotOptions: {
			area: {
				stacking: 'normal',
				lineColor: '#666666',
				lineWidth: 1,
				marker: {
					enabled: false
				}
			}
		},
		series: [{
			name: 'Person',
			data: [10595, 11869, 12642, 13881, 15153, 16242, 17283, 17245, 17857,
				18125, 18682, 18613, 18877, 18114, 18375, 18856, 19087, 19347, 19256,
				19373, 19871, 20533, 21363, 21421, 21848
			]
		}, {
			name: 'Property',
			data: [6594, 8097, 7795, 7726, 8365, 8493, 8563, 8584, 8972, 9385,
				9486, 10005, 10357, 9422, 9399, 9527, 9422, 9402, 9109, 9189, 9306,
				10040, 10459, 9944, 9878
			]
		}, {
			name: 'Drug',
			data: [2445, 4355, 5192, 5603, 6208, 7451, 8301, 8873, 9791, 10440,
				11717, 11400, 11949, 11189, 10885, 11292, 11119, 11363, 11729, 11281,
				10465, 10890, 11042, 10716, 10352
			]
		}, {
			name: 'Sex',
			data: [2539, 2764, 2893, 3019, 3134, 3232, 3400, 3408, 3520, 3745,
				3843, 4003, 4028, 4011, 4142, 4292, 4604, 4902, 5048, 5284, 5468,
				5612, 5727, 5823, 5959
			]
		}, {
			name: 'Other/Unknown',
			data: [437, 199, 407, 194, 204, 185, 227, 243, 262, 461, 584, 750, 371,
				371, 354, 412, 437, 426, 423, 421, 435, 429, 387, 420, 840
			]
		}]

	});

}); //end figure 11

$(function() { //begin figure 12
	$('#HC_IllinoisFig12').highcharts({
		chart: {
			zoomType: 'xy'
		},
		title: {
			text: 'Figure 12 - Illinois Bed-Years and Number of Inmates'
		},
		subtitle: {},
		xAxis: [{
			categories: ['1989',
				'1990',
				'1991',
				'1992',
				'1993',
				'1994',
				'1995',
				'1996',
				'1997',
				'1998',
				'1999',
				'2000',
				'2001',
				'2002',
				'2003',
				'2004',
				'2005',
				'2006',
				'2007',
				'2008',
				'2009',
				'2010',
				'2011',
				'2012',
				'2013'
			],
			crosshair: true
		}],
		yAxis: [{ // Primary yAxis
			title: {
				text: 'People in IDOC prison population',
				style: {
					color: 'blue'
				}
			},
			labels: {
				format: '{value}',
				style: {
					color: 'blue'
				}
			},
			min: 0,
			max: 100000,
			tickAmount: 6,
		}, { // Secondary yAxis
			title: {
				text: 'Bed-years',
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
			name: 'People in IDOC prison population',
			type: 'line',
			color: 'blue',
			data: [22610, 27288, 28929, 30423, 33064, 35603, 37774, 38353, 40402,
				42156, 44312, 44771, 45582, 43107, 43155, 44379, 44669, 45440, 45565,
				45548, 45545, 47504, 48978, 48324, 48877
			],
			tooltip: {
				valueSuffix: ' inmates'
			}
		}, {
			name: 'Bed-years',
			type: 'line',
			color: 'red',
			yAxis: 1,
			data: [73884.7, 86402.76, 95457.86, 101287.24, 113003.61, 119861.69,
				123006.39, 130667.8, 139416.51, 150708.64, 164938.61, 165214.1,
				169999.12, 168083.62, 166192.8, 173566.77, 174224.61, 182015.14,
				180075.91, 184000.57, 187743.69, 197263.16, 212569.09, 220128.92,
				228912.72
			],
			tooltip: {
				valueSuffix: ' bed-years'
			},
			min: 0,

		}]
	});
}); //end figure 12

$(function() { //begin figure 13
	$('#HC_IllinoisFig13').highcharts({

		title: {
			text: 'Figure 13 - Average length of stay for Class M and X Prison exits',
			x: 10 //center
		},
		subtitle: {},
		xAxis: {
			categories: ['1989', '1990', '1991', '1992', '1993', '1994', '1995',
				'1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004',
				'2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'
			],
			title: {
				text: "Fiscal Year"
			}

		},
		yAxis: {
			min: 0,
			title: {
				text: 'Years in IDOC'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			valueSuffix: ' years',
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			borderWidth: 0
		},
		series: [{
			name: 'Class X',
			data: [3.64, 3.62, 3.61, 3.53, 3.53, 3.44, 3.35, 3.54, 3.7, 3.93, 4.15,
				4.31, 4.48, 4.61, 4.6, 4.68, 4.74, 4.83, 4.82, 4.99, 4.95, 5.08,
				5.42, 5.7, 5.41
			],
			color: 'purple'
		}, {
			name: 'Class M',
			data: [8.58, 9.13, 9.89, 9.99, 10.35, 10.54, 10.32, 10.97, 11.01,
				11.36, 12.15, 11.56, 11.84, 12.21, 12.05, 12.57, 12.73, 13.12, 13.28,
				13.29, 14.13, 15.02, 15.41, 15.78, 17.05
			],
			color: 'orange'
		}]
	});
}); //END figure 13

$(function() { //begin figure 14
	$('#HC_IllinoisFig14').highcharts({

		title: {
			text: 'Figure 14 - Average length of stay for Class 1-4 Prison exits',
			x: 10 //center
		},
		subtitle: {},
		xAxis: {
			categories: ['1989', '1990', '1991', '1992', '1993', '1994', '1995',
				'1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004',
				'2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'
			],
			title: {
				text: "Fiscal Year"
			}

		},
		yAxis: {
			min: 0,
			title: {
				text: 'Years in IDOC'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			valueSuffix: ' years',
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			borderWidth: 0
		},
		series: [{
				name: 'Class 4',
				data: [0.54, 0.52, 0.5, 0.45, 0.51, 0.45, 0.44, 0.44, 0.47, 0.5, 0.5,
					0.51, 0.54, 0.47, 0.4, 0.4, 0.38, 0.39, 0.42, 0.43, 0.42, 0.44, 0.66,
					0.68, 0.64
				],
				color: 'red'
			}, {
				name: 'Class 3',
				data: [0.96, 0.92, 0.83, 0.85, 0.83, 0.81, 0.76, 0.79, 0.81, 0.83,
					0.86, 0.88, 0.92, 0.86, 0.72, 0.73, 0.71, 0.7, 0.73, 0.73, 0.71,
					0.79, 1.02, 1.13, 1.09
				],
				color: 'blue'
			}, {
				name: 'Class 2',
				data: [1.45, 1.52, 1.3, 1.29, 1.28, 1.2, 1.24, 1.27, 1.3, 1.38, 1.45,
					1.55, 1.64, 1.55, 1.44, 1.42, 1.37, 1.36, 1.38, 1.33, 1.33, 1.38,
					1.54, 1.68, 1.66
				],
				color: 'green'
			}, {
				name: 'Class 1',
				data: [2.12, 2.22, 1.84, 1.71, 1.69, 1.52, 1.51, 1.53, 1.62, 1.73,
					1.72, 1.8, 1.95, 1.95, 1.82, 1.88, 1.83, 1.85, 1.77, 1.86, 1.82,
					1.84, 2.03, 2.16, 2.21
				],
				color: 'yellow'
			}

		]
	});
}); //End figure 14

$(function() { //begin figure 15
	$('#HC_IllinoisFig15').highcharts({

		title: {
			text: 'Figure 15 - Average Age of Illinois Prisoners by Offense Class',
			x: 10 //center
		},
		subtitle: {
			x: 10
		},
		xAxis: {
			categories: ['1993', '1998', '2003', '2008', '2013'],
			title: {
				text: "Fiscal Year"
			}

		},
		yAxis: {
			title: {
				text: 'Years'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			valueSuffix: ' years',
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			borderWidth: 0
		},
		series: [{
			name: 'Class 4',
			data: [30.8, 33.4, 34.5, 35.8, 36.5]

		}, {
			name: 'Class 3',
			data: [30.5, 31.6, 33.2, 35.1, 36.3]

		}, {
			name: 'Class 2',
			data: [29.3, 31.7, 32.9, 34.5, 35.4]

		}, {
			name: 'Class 1',
			data: [29.8, 30.8, 32, 33.3, 34.2]

		}, {
			name: 'Class X',
			data: [31.5, 32.7, 34.1, 35.8, 36.9]

		}, {
			name: 'Class M',
			data: [33.8, 33.7, 35.7, 38.5, 41.3]

		}, {
			name: 'Overall',
			data: [31.1, 34.9, 33.7, 35.4, 36.3]

		}]
	});
}); //end figure 15

$(function() { //begin figure 16
	$('#HC_IllinoisFig16').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Figure 16 - IDOC Budget'
		},
		subtitle: {
			text: 'GRF Appropriated in Nominal dollars'
		},
		xAxis: {
			categories: [
				1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
				2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015
			],
			crosshair: true,
			title: {
				text: 'Fiscal year'
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Dollars'
			}
		},
		tooltip: {
			shared: true,
			valuePrefix: '$'
		},
		plotOptions: {
			column: {
				borderWidth: 0
			}
		},
		series: [{
			name: 'GRF Appropriation',
			data: [791285200, 867112100, 945792530, 1054101597, 1125677466,
				1213718265, 1303219757, 1206591343, 1269565752, 1207352326,
				1173278500, 1126120200, 1236088780, 1351278900, 1176772700,
				1209879600, 1222424700, 1178869700, 1277732100, 1306684060
			],
			color: 'red'

		}]

	});

}); //end figure 16
