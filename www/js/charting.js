
Chart.defaults.global.defaultFontColor = '#fff';

function initCharts(data) {
    createPie('myChart1', ['Red', 'Blue'], data.a);
    createPie('myChart2', ['Red', 'Blue'], data.b);
    createPie('myChart3', ['Red', 'Blue'], data.c);
    createPie('myChart4', ['Red', 'Blue'], data.d);
    createBar('myChartBar1', 'score', ['John', 'Dick', 'Harry'], data.e);
    createBar('myChartBar2', 'score', ['John', 'Dick', 'Harry'], data.f);
    createBar('myChartBar3', 'score', ['John', 'Dick', 'Harry'], data.g);
    createBar('myChartBar4', 'score', ['John', 'Dick', 'Harry'], data.h);
}

function createPie(context, labelAr, dataAr) {
    const chartInstance = new Chart(context, {
        type: 'pie',
        data: {
            labels: labelAr,
            datasets: [{
                label: 'students',
                backgroundColor: [
                    '#596EB1',
                    '#3BE5D3',
                    '#22CCDE',
                    '#1CAEDD',
                    '#268DCE'
                ],
                data: dataAr,
            }]
        },
        options: { responsive: false}
    });
}

function createBar(context, legendLabel, yLabelAr, dataAr) {
    const chart = new Chart(context, {
        type: 'horizontalBar',
        data: {
            labels: yLabelAr,
            datasets: [
                {
                    label: legendLabel,
                    backgroundColor: [
                        '#FEF660',
                        '#C6EF6A',
                        '#92E67C',
                        '#5CDA92',
                        '#21CEA4'
                    ],
                    borderWidth: 1,
                    data: dataAr
                }
            ]
        },
        options: {
            responsive: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}