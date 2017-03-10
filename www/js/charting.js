
Chart.defaults.global.defaultFontColor = '#fff';

function initCharts(data) {
    createPie('myChart1', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.a);
    createPie('myChart2', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.b);
    createPie('myChart3', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.c);
    createPie('myChart4', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.d);
    createPie('myChart5', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.e);
    createPie('myChart6', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.f);
    createBar('myChartBar1', '', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.g);
    createBar('myChartBar2', '', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.h);
    createBar('myChartBar3', '', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.i);
    createBar('myChartBar4', '', ['Fairfield', 'Fairvale', 'Liverpool', 'Mount Pritchard', 'Canley Vale'], data.j);
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
        options: {
            responsive: false,
            legend: {
                position: 'bottom'
            }
        }
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
            },
            legend: {
                display: false
            }
        }
    });

}