import React, { Component } from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";

export default class Linechart extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Chart height={400} data={this.props.linedata} scale={this.props.linecol} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="year*value" size={2} />
          <Geom
            type="point"
            position="year*value"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}
