import React from 'react';
import { Line, Bar, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically imports the necessary chart components
import 'twind/shim'; // Import Twind for styling

// Sample data for the charts
const followerGrowthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Follower Growth',
      data: [120, 200, 250, 300, 350, 450],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
    },
  ],
};

const engagementData = {
  labels: ['Post 1', 'Post 2', 'Post 3'],
  datasets: [
    {
      label: 'Likes',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      data: [65, 59, 80],
    },
    {
      label: 'Comments',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
      data: [28, 48, 40],
    },
  ],
};

const demographicData = {
  labels: ['Age 18-24', 'Age 25-34', 'Age 35-44', 'Age 45-54', 'Age 55+'],
  datasets: [
    {
      label: 'User Demographics',
      data: [25, 40, 20, 10, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
};

const engagementRadarData = {
  labels: ['Likes', 'Shares', 'Comments', 'Mentions', 'Reach'],
  datasets: [
    {
      label: 'Engagement Metrics',
      data: [60, 70, 40, 50, 80],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const activityData = {
  labels: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn'],
  datasets: [
    {
      label: 'Activity Share',
      data: [300, 150, 100, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
      ],
    },
  ],
};


// Dashboard component
function Dashboard() {
  return (
    <div className="p-6">
      {/* Row 1: Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Followers</h3>
          <p className="text-3xl">12.5K</p>
        </div>
        <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Posts</h3>
          <p className="text-3xl">250</p>
        </div>
        <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow">
          <h3 className="text-lg font-bold">Engagement Rate</h3>
          <p className="text-3xl">5.3%</p>
        </div>
        <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Comments</h3>
          <p className="text-3xl">1.2K</p>
        </div>
      </div>

      {/* Row 2: Line Chart for Follower Growth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow h-80">
          <h3 className="text-lg font-bold mb-4">Follower Growth</h3>
          <Line data={followerGrowthData} options={{ maintainAspectRatio: false }} />
        </div>

        {/* Bar Chart for Engagement */}
        <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow h-80">
          <h3 className="text-lg font-bold mb-4">Engagement by Post</h3>
          <Bar data={engagementData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Row 3: Doughnut Chart for User Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow h-96 ">
        <h3 className="text-lg font-bold mb-4">Activity Share by Platform</h3>
        <PolarArea data={activityData} options={{ maintainAspectRatio: false }} />
      </div>

      {/* Row 4: Radar Chart for Engagement Metrics */}
      <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow h-96 ">
        <h3 className="text-lg font-bold mb-4">Engagement Metrics</h3>
        <Radar data={engagementRadarData} options={{ maintainAspectRatio: false }} />
      </div>
      
      </div>

      {/* Row 5: Polar Area Chart for Activity Share */}
     
      <div className="bg-white/10 border border-white/50 backdrop-blur-sm p-4 rounded shadow h-96 ">
        <h3 className="text-lg font-bold mb-4">User Demographics</h3>
        <Doughnut data={demographicData} options={{ maintainAspectRatio: false}} />
      </div>
      
    </div>
  );
}

export default Dashboard;
