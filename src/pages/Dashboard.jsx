import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import './Dashboard.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

export default function Dashboard() {

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [40, 60, 75, 50, 90],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Colors',
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };


  const progressData = {
    postImpressions: 75,
    followers: 50,
    profileViewers: 65,
    searchAppearances: 85,
  };

  return (
    <div className="dashboard-container">
      <h1 className='f'>Analyse User All Data</h1>

      {/* Cards Section */}
      <div className="cards-container">
        <Card className="card">
          <CardContent>
            <Typography variant="h6">Post Impressions</Typography>
            <Box position="relative" display="inline-flex" flexDirection="column" alignItems="center">
              <CircularProgress variant="determinate" value={progressData.postImpressions} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="caption" component="div" color="textSecondary">
                  {`${progressData.postImpressions}%`}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" align="center" className="time-text">
              24 hours later
            </Typography>
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <Typography variant="h6">Followers</Typography>
            <Box position="relative" display="inline-flex" flexDirection="column" alignItems="center">
              <CircularProgress variant="determinate" value={progressData.followers} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="caption" component="div" color="textSecondary">
                  {`${progressData.followers}%`}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" align="center" className="time-text">
              24 hours later
            </Typography>
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <Typography variant="h6">Profile Viewers</Typography>
            <Box position="relative" display="inline-flex" flexDirection="column" alignItems="center">
              <CircularProgress variant="determinate" value={progressData.profileViewers} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="caption" component="div" color="textSecondary">
                  {`${progressData.profileViewers}%`}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" align="center" className="time-text">
              24 hours later
            </Typography>
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <Typography variant="h6">Search Appearances</Typography>
            <Box position="relative" display="inline-flex" flexDirection="column" alignItems="center">
              <CircularProgress variant="determinate" value={progressData.searchAppearances} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="caption" component="div" color="textSecondary">
                  {`${progressData.searchAppearances}%`}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" align="center" className="time-text">
              24 hours later
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        <div className="chart small-chart">
          <Bar data={barData} />
        </div>
        <div className="chart small-chart">
          <Line data={lineData} />
        </div>
        <div className="chart small-chart">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}
