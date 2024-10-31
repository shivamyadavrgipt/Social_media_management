// src/components/Dashboard/index.jsx
import React from "react";
import { Line, Bar, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import { FiUsers, FiBarChart2, FiHeart, FiMessageCircle } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ChartTooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

// Stats Card Component
const StatsCard = ({ icon: Icon, title, value, description }) => (
  <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
    <Icon className="text-3xl mb-2" />
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-3xl">{value}</p>
    <p className="text-sm text-gray-300 mt-1">{description}</p>
  </div>
);

// Chart Container Component
const ChartContainer = ({ title, description, children }) => (
  <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded-lg shadow">
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    <p className="text-sm text-gray-300 mb-2">{description}</p>
    <div className="h-72">{children}</div>
  </div>
);

// Chart Data
const chartData = {
  followerGrowth: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Follower Growth",
        data: [120, 200, 250, 300, 350, 450],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  },

  engagement: {
    labels: ["Post 1", "Post 2", "Post 3"],
    datasets: [
      {
        label: "Likes",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        data: [65, 59, 80],
      },
      {
        label: "Comments",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
        data: [28, 48, 40],
      },
    ],
  },

  demographics: {
    labels: ["Age 18-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55+"],
    datasets: [
      {
        label: "User Demographics",
        data: [25, 40, 20, 10, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  },

  engagementMetrics: {
    labels: ["Likes", "Shares", "Comments", "Mentions", "Reach"],
    datasets: [
      {
        label: "Engagement Metrics",
        data: [60, 70, 40, 50, 80],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },

  activityShare: {
    labels: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
    datasets: [
      {
        label: "Activity Share",
        data: [300, 150, 100, 80],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  },
};

// Chart Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "white",
      },
    },
  },
};

const Dashboard = () => {
  const statsData = [
    {
      icon: FiUsers,
      title: "Total Followers",
      value: "12.5K",
      description: "Total followers across platforms.",
    },
    {
      icon: FiBarChart2,
      title: "Total Posts",
      value: "250",
      description: "Total posts published this year.",
    },
    {
      icon: FiHeart,
      title: "Engagement Rate",
      value: "5.3%",
      description: "Average engagement rate per post.",
    },
    {
      icon: FiMessageCircle,
      title: "Total Comments",
      value: "1.2K",
      description: "Total comments received this year.",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-blue-900 to-indigo-900 min-h-screen text-white">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Social Media Insights</h1>
        <p className="text-lg text-gray-300 mt-2">
          Understand and grow your audience with key metrics and insights.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <ChartContainer
          title="Follower Growth"
          description="Track your month-over-month growth in followers."
        >
          <Line data={chartData.followerGrowth} options={chartOptions} />
        </ChartContainer>

        <ChartContainer
          title="Engagement by Post"
          description="See how individual posts perform in terms of likes and comments."
        >
          <Bar data={chartData.engagement} options={chartOptions} />
        </ChartContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <ChartContainer
          title="Activity Share by Platform"
          description="Compare how much interaction occurs on each platform."
        >
          <PolarArea data={chartData.activityShare} options={doughnutOptions} />
        </ChartContainer>

        <ChartContainer
          title="Engagement Metrics"
          description="Analyze the types of engagement you receive."
        >
          <Radar data={chartData.engagementMetrics} options={chartOptions} />
        </ChartContainer>
      </div>

      <div className="mb-10">
        <ChartContainer
          title="User Demographics"
          description="Breakdown of your audience by age group."
        >
          <Doughnut data={chartData.demographics} options={doughnutOptions} />
        </ChartContainer>
      </div>

      <Tooltip id="dashboard-tooltip" />
    </div>
  );
};

export default Dashboard;
