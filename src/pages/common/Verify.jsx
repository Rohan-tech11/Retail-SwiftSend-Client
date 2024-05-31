import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { styled } from '@mui/system';

const Container = styled(Box)({
  height: '82.2vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const CustomButton = styled(Button)({
  width: '100%',
  padding: '12px 65px',
  margin: '10px',
  background: '#ff6813',
  color: '#fff',
  border: 'none',
  borderRadius: '0',
  cursor: 'pointer',
  transition: '0.5s',
  fontSize: '17px',
  '&:hover': {
    background: '#e05700',
  },
});

export default function Verify() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Please check your email for a verification link to login.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have verified and are still not able to access your account,
        please contact support at admin@swiftsend.com
      </Typography>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <CustomButton>
          Login Here
        </CustomButton>
      </Link>
    </Container>
  );
}
