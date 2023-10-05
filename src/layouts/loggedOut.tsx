import { Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ClientOnboarding from "../components/Form";

export default function LoggedOut() {
  return (
    <Container>
      <Grid container>
        <Grid xs={6}>Image</Grid>
        <Grid xs={6}>
          <h1>Provider Onboarding</h1>
          <Box border={1} padding={3} borderRadius={4}>
            <form>

              <TextField
                id="name"
                variant="outlined"
                label="Full Name"
                margin="normal"
                required
              />
              <TextField
                id="email"
                variant="outlined"
                label="Email"
                margin="normal"
                required
              />
              <TextField
                id="designation"
                variant="outlined"
                label="Designation"
                margin="normal"
                required
              />
            </form>
            <ClientOnboarding />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
