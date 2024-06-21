import { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const Status = ["In-Process", "Pending Response", "Approved", "Rejected"];

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#292929",
    },
    secondary: {
      main: "#ff6813",
      dark: "#e05700",
    },
  },
});

// StyledCard with custom styles
const StyledCard = styled(Card)({
  marginBottom: "20px",
  borderLeft: `4px solid ${customTheme.palette.secondary.main}`, // Blue border for status indication
});

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "001",
      serviceName: "Global Express",
      clientName: "TNT",
      status: 1,
      quote: "View",
      response: false, // true for checked, false for unchecked
    },
    {
      id: "002",
      serviceName: "Global Express",
      clientName: "Fedex",
      status: 2,
      quote: "View",
      response: true, // true for checked, false for unchecked
    },
  ]);

  const handleResponseToggle = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].response = !updatedOrders[index].response;
    setOrders(updatedOrders);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Orders
        </Typography>
        <Grid container spacing={3}>
          {orders.map((order, index) => (
            <Grid item key={order.id} xs={12} md={6} lg={4}>
              <StyledCard>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#ff6813" }}>{order.id}</Avatar>
                  }
                  title={`Order ID: ${order.id}`}
                  subheader={`Status: ${Status[order.status]}`}
                />
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    Service Name: {order.serviceName}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Client Name: {order.clientName}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    style={{ marginBottom: "10px" }}
                  >
                    {order.quote}
                  </Button>
                  <div style={{ textAlign: "center" }}>
                    <Tooltip
                      title={
                        order.response
                          ? "Response Received"
                          : "Response Pending"
                      }
                    >
                      <IconButton onClick={() => handleResponseToggle(index)}>
                        {order.response ? (
                          <CheckCircle color="#009362" />
                        ) : (
                          <Cancel color="error" />
                        )}
                      </IconButton>
                    </Tooltip>
                  </div>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
