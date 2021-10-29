import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class RaderChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Player rating",
          data: [94, 95, 90, 84, 86, 70],
        },
      ],
      options: {
        fill: {
          colors: ["#e83a86", "#e83a86"],
        },
        markers: {
          colors: ["#e45e98"],
          strokeColors: "#fff",
        },
        stroke: {
          show: true,
          curve: "smooth",
          colors: ["#e83a86", "#e83a86"],
          // width: 2,
          // dashArray: 0,
        },

        chart: {
          height: "100%",
          type: "radar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [
            "Overall",
            "Finishing",
            "Short passing",
            "Crossing",
            "Volleys",
            "Heading accuracy",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radar"
          height={350}
        />
      </div>
    );
  }
}
