import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const Dashboard = () => {
  const [data, setData] = useState({
    totalSales: 0,
    userGrowth: 0,
    serverUptime: 0,
  });

  useEffect(() => {
    setData({
      totalSales: 34200,
      userGrowth: 1200,
      serverUptime: 99.9,
    });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Total Sales
            </Typography>
            <Typography variant="h4" color="primary">
              ${data.totalSales.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Sales in the last 30 days
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              User Growth
            </Typography>
            <Typography variant="h4" color="primary">
              {data.userGrowth.toLocaleString()} Users
            </Typography>
            <Typography variant="body2" color="textSecondary">
              New users in the last 6 months
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Server Uptime
            </Typography>
            <Typography variant="h4" color="primary">
              {data.serverUptime}%
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Uptime in the past month
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Recent Activities
        </Typography>
        <Paper elevation={1} sx={{ padding: 2 }}>
          <Typography variant="body1">
            <strong>John Doe</strong> updated the profile picture.
          </Typography>
          <Typography variant="body1">
            <strong>Jane Smith</strong> added a new post.
          </Typography>
          <Typography variant="body1">
            <strong>Mike Johnson</strong> commented on a post.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
