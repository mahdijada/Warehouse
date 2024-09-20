import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Weather = () => {
  return (
    <Grid container>
      <Grid md={6} xs={12} style={styles.tempDetailsContainer} item>
        <Stack direction="row" spacing={1.5} style={styles.weatherDetailsContainer}>
          <img alt="weather" src={require('../images/weather.png')} style={styles.weatherIcon} />
          <Typography style={styles.tempText}>32°C</Typography>
        </Stack>
        <Typography style={styles.tempText}>Amman, Jordan</Typography>
      </Grid>
      <Grid md={6} xs={12} style={styles.tempDetailsContainer} item>
        <Stack direction="row" spacing={1.5} style={styles.weatherDetailsContainer}>
          <Stack direction="column" style={{ alignItems: 'center' }}>
            <Typography style={styles.timeText}>2 PM</Typography>
            <img alt="weather" src={require('../images/weather.png')} style={{ ...styles.weatherIcon, width: '50%' }} />
            <Typography style={styles.temp}>30</Typography>
          </Stack>
          <Stack direction="column" style={{ alignItems: 'center' }}>
            <Typography style={styles.timeText}>3 PM</Typography>
            <img alt="weather" src={require('../images/weather.png')} style={{ ...styles.weatherIcon, width: '50%' }} />
            <Typography style={styles.temp}>28</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

const styles = {
  weatherDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tempDetailsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  weatherIcon: {
    objectFit: 'contain',
    width: "30%"
  },
  tempText: {
    color: '#C8C8C8',
    fontSize: '1.1em'
  },
  timeText: {
    color: '#D9D9D9CC'
  },
  temp: {
    color: '#FFFFFF',
    fontWeight: '500'
  }
}

export default Weather;