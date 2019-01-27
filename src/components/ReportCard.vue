<template>
  <bCard title="Report"><canvas id="chart" width="400" height="300"></canvas></bCard>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'ReportCard',
  data: function () {
    return {
      myChart: {}

    }
  },
  mounted: function () {
    let ctx = document.getElementById('chart')

    // Data Analysis

    let counts = this.localStorage.companyList.reduce((output, item) => {
      let state = item.state
      if (!output.hasOwnProperty(state)) {
        output[state] = 0
      }
      output[state]++
      return output
    }, {})

    let states = []
    let graphData = []

    for (let state in counts) {
      if (counts.hasOwnProperty(state)) {
        states.push(state)
        graphData.push(counts[state])
      }
    }

    // Chart Drawing

    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: states,
        datasets: [{
          label: 'Number of Companies',
          data: graphData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  },
  watch: {
    'localStorage.companyList': function () {
      let counts = this.localStorage.companyList.reduce((output, item) => {
        let state = item.state
        if (!output.hasOwnProperty(state)) {
          output[state] = 0
        }
        output[state]++
        return output
      }, {})

      let states = []
      let graphData = []

      for (let state in counts) {
        if (counts.hasOwnProperty(state)) {
          states.push(state)
          graphData.push(counts[state])
        }
      }

      this.myChart.data.labels = states
      this.myChart.data.datasets.forEach((dataset) => {
        dataset.data = graphData
      })
      this.myChart.update()
    }
  }
}

</script>

<style scoped>

</style>
