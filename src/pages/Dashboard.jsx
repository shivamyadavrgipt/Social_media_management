// src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
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
=======
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your social media management dashboard!</p>
>>>>>>> 8ffdaaf8eacafb68ea50989268859a62c5f373da
    </div>
  );
};

export default Dashboard;
