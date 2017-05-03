const CHART = document.getElementById("lineChart");
const CHART2 = document.getElementById("barChart");
const CHART3 = document.getElementById("radarChart");
const CHART4 = document.getElementById("polarChart");
const CHART5 = document.getElementById("pieChart");
const CHART6 = document.getElementById("doughnutChart");

//Drilling into objects
console.log(Chart.defaults);

Chart.defaults.global.animation.easing = "easeInExpo";
Chart.defaults.scale.ticks.beginAtZero = true;

let lineChart = new Chart(CHART, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        },
        {
            label: "My Second dataset",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(75,75,192,0.4)",
            borderColor: "rgba(75,72,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,72,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,72,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [100, 20, 60, 20, 80, 55, 90],
            spanGaps: false,
        }
    ]
},
  options: {
    scales: {
      yAxes: [{
        type: 'logarithmic',
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


let barChart = new Chart(CHART2, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(44, 62, 80, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(44, 62, 80, 1.0)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
},
});

let radarChart = new Chart(CHART3, {
    type: 'radar',
    data: {
      labels: ['Strength', 'Skill', 'Health', 'Speed'],
      datasets: [
        {
          label: 'Points',
          backgroundColor: 'rgba(46, 204, 113, 0.1)',
          borderColor: 'rgba(46, 204, 113, 1.0)',
          borderWidth: 2,
          data: [10, 20, 30, 40]
        },
        {
          label: 'Points',
          backgroundColor: 'rgba(0, 255, 255, 0.1)',
          borderColor: '#00FFFF',
          borderWidth: 2,
          data: [40, 30, 20, 10]
        }
      ]
    }
});

let polarChart = new Chart(CHART4, {
  type: 'polarArea',
  data: {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
    ]
}
});

let pieChart = new Chart (CHART5, {
  type: 'pie',
  data: {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
}
});

let doughnutChart = new Chart (CHART6, {
  type: 'doughnut',
  data: {
    labels: [
        "Red",
        "Yellow",
        "Blue"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#e74c3c",
                "#F1C40F",
                "#2980B9"
            ],
            hoverBackgroundColor: [
                "rgba(231, 76, 60, 0.5)",
                "rgb(241,196,15, 0.5)",
                "rgb(41,128,185, 0.5)"
            ]
        }]
},
options: {
  cutoutPercentage: 60,
  rotation: Math.PI * 0.5,
  animation: {
    animateScale: true
  }
}
});
