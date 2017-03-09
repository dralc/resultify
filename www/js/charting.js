
function initCharts(data) {
    createPie('myChart1', ['Red', 'Blue'], data.a);
    createPie('myChart2', ['Red', 'Blue'], data.b);
    createPie('myChart3', ['Red', 'Blue'], data.c);
    createPie('myChart4', ['Red', 'Blue'], data.d);
}

function createPie(context, labelAr, dataAr) {
    const chartInstance = new Chart(context, {
        type: 'pie',
        data: {
            labels: labelAr,
            datasets: [{
                label: 'students',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                data: dataAr,
            }]
        },
        options: { responsive: false}
    });
}
