$(document).ready(function() {
  Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });
  $(function() {
    $('#HC_20by2025_fig1').highcharts({

      title: {
        text: 'Figure 1 - Reduction of IDOC Population',
        x: 10 //center
      },
      subtitle: {
        text: '25% Reduction of Twelve-Year Upward Trend',
        x: 10
      },
      xAxis: {
        categories: ['1989', '1990', '1991', '1992', '1993', '1994',
          '1995', '1996', '1997', '1998', '1999', '2000', '2001',
          '2002', '2003', '2004', '2005', '2006', '2007', '2008',
          '2009', '2010', '2011', '2012', '2013', '2014', '2015',
          '2016', '2017', '2018', '2019', '2020', '2021', '2022',
          '2023', '2024', '2025'
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
        data: [22610, 27288, 28929, 30423, 33064, 35603, 37774,
          38353, 40402, 42156, 44312, 44771, 45582, 43107,
          43155, 44379, 44669, 45440, 45565, 45548, 45545,
          47504, 48978, 48324, 48877
        ],
        color: 'blue'
      }, {
        name: 'IDOC Population with 25% Reduction',
        data: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, 47859, 46841, 45823, 44805, 43787, 42769,
          41751, 40733, 39715, 38697, 37679, 36661
        ],
        color: 'blue',
        dashStyle: 'dot'
      }, {
        name: 'SPAC Projected (12 year trend, 2002-2013)',
        data: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          48877, 49425, 49973, 50520, 51068, 51616, 52164,
          52711, 53259, 53807, 54355, 54902, 55450
        ],
        color: 'green'
      }, {
        name: 'SPAC Projected with 25% Reduction)',
        data: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          48877, 48270, 47662, 47055, 46447, 45840, 45232,
          44625, 44017, 43410, 42802, 42195, 41588
        ],
        color: 'green',
        dashStyle: 'dash'
      }]
    });
  });
});
