import React from 'react';
import { Container, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterAdmin = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '95px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Admin Dashboard
            </Typography>
            <Typography variant="body2">
              © 2024 Admin Dashboard. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link href="/dashboard" color="inherit">Dashboard</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Follow Us :
            </Typography>
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/fuadcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/fuadcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/fuadcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/fuadcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default FooterAdmin;
