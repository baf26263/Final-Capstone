import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red[400],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              BAMF!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Welcome to the ultimate Marvel character search website - BAMF! - a digital haven for every Marvel
            fan out there! Are you ready to assemble your dream team of extraordinary heroes and
            formidable villains? Look no further, as we bring you an unparalleled experience that 
            combines your favorite Marvel characters and strategic team-building.
            </Typography>
            <ThemeProvider theme={theme}>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="outlined">
                  <div>
                    <Link href="http://localhost:5173/#/heroes">
                      See your potential!
                    </Link>
                  </div>
                </Button>
                <Button variant="outlined">
                  <div>
                    <Link href="http://localhost:5173/#/about">
                      Learn More!
                    </Link>
                  </div>
                </Button>
              </Stack>
            </ThemeProvider>
          </Container>
        </Box>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" >
        <Typography variant="h6" align="center" gutterBottom>
          Happy Building!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          "Heroes are made by the path they choose, not the powers they are graced with." 
          -Tony Stark, Iron Man
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}