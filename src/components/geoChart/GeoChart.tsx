import React, { useContext, useState } from "react";
import './GeoChart.css';
import { Chart } from "react-google-charts";
import { UserContext } from "../../App";
import { GEO_CHART_CONFIGS } from "../../configs/geoChartConfig";

const GeoChart: React.FC<any> = () => {

  const users = useContext(UserContext)?.users;

  return (
    <div className="chart-wrapper">
      <Chart
        chartType="GeoChart"
        width="100%"
        height="auto"
        data={users}
        options={GEO_CHART_CONFIGS}
      />
    </div>
  );
}

export default GeoChart;