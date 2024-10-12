import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables); // Make sure all chart components are registered

const Analytics = () => {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Post Engagement",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

  const [followerGrowthData, setFollowerGrowthData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Follower Growth",
        data: [100, 200, 300, 400, 500],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  });

  const [audienceDemographicsData, setAudienceDemographicsData] = useState({
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "Age",
        data: [20, 30, 40, 30, 20],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  });

  const [selectedTimeframe, setSelectedTimeframe] = useState("month");

  useEffect(() => {
    if (selectedTimeframe === "month") {
      setChartData({
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Post Engagement",
            data: [10, 20, 30, 40, 50],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      });
    } else if (selectedTimeframe === "quarter") {
      setChartData({
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "Post Engagement",
            data: [100, 200, 300, 400],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      });
    } else if (selectedTimeframe === "year") {
      setChartData({
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "Post Engagement",
            data: [500, 600, 700, 800, 900],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [selectedTimeframe]);

  const handleTimeframeChange = (event) => {
    setSelectedTimeframe(event.target.value);
  };

  return (
    <div>
      <h1>Analytics</h1>
      <p>View analytics of your social media activity.</p>
      <div className="charts">
        <div className="chart">
          <h2>Post Engagement</h2>
          <Line data={chartData} />
        </div>
        <div className="chart">
          <h2>Follower Growth</h2>
          <Bar data={followerGrowthData} />
        </div>
        <div className="chart">
          <h2>Audience Demographics</h2>
          <Bar data={audienceDemographicsData} />
        </div>
      </div>
      <div className="timeframe-selector">
        <select value={selectedTimeframe} onChange={handleTimeframeChange}>
          <option value="month">Month</option>
          <option value="quarter">Quarter</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>
  );
};

export default Analytics;
