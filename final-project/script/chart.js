const chart1 = document.getElementById('data-chart-1');
const chart2 = document.getElementById('data-chart-2');
const chart3 = document.getElementById('data-chart-3');

new Chart(chart1, {
  type: 'line',
  data: {
    labels: conc,
    datasets: [{
      label: 'Reaction Rate',
      data: concTime,
      backgroundColor: "#149983",
      borderColor: "#149983",
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(chart2, {
  type: 'bubble',
  data: {
    labels: temp,
    datasets: [{
      data: tempTime,
      backgroundColor: ['#0080FF', '#0000CC', '#FF0000']
    }]
  },
  options: {}
});

new Chart(chart3, {
  type: 'bar',
  data: {
    labels: catalyst,
    datasets: [{
      label: 'Reaction Rate',
      data: catalystTime,
      barThickness: 20,
      backgroundColor: ['midnightblue', 'maroon'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});