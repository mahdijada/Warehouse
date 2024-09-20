import React from "react";
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward, FiberManualRecord, InfoOutlined, } from "@mui/icons-material";
import { LineChart } from '@mui/x-charts/LineChart';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Weather from "../components/Weather";
import { chartData } from '../data'

const DashboardScreen = () => {
  return (
    <Box style={{ display: 'flex' }}>
      <Sidebar />
      <Container>
        <Header />
        <Grid style={{ marginTop: '2%' }} container>
          <Grid item md={4} xs={12} style={{ position: 'relative', marginBottom: '5%' }}>
            <Box style={styles.imageLayer} />
            <Box style={{ position: 'absolute', width: '95%', top: '10%', left: '6%' }}>
              <Typography style={styles.siteTitle}>ABCD Site</Typography>
              <Typography style={styles.siteSubTitle}>RR1 Area</Typography>
            </Box>
            <Box style={{ position: 'absolute', display: 'flex', top: '60%', width: '90%', justifyContent: 'space-around' }}>
              <Box>
                <Typography style={styles.siteTitle}>1,148</Typography>
                <Typography style={styles.siteSubTitle}>Active People</Typography>
              </Box>
              <Box>
                <Typography style={styles.siteTitle}>924</Typography>
                <Typography style={styles.siteSubTitle}>Active Devices</Typography>
              </Box>
            </Box>
            <img alt="background" src={require('../images/background.png')} style={styles.backgroundImage} />
          </Grid>
          <Grid item md={4} xs={12} style={{ marginBottom: '5%' }}>
            <Box style={styles.backgroundContainer}>
              <Box style={styles.headerContainer}>
                <Box style={styles.titleContainer}>
                  <Typography style={styles.titleText}>Live events</Typography>
                  <Box style={styles.arrowContainer}>
                    <ArrowDownward style={styles.arrowIcon} />
                  </Box>
                </Box>
                <IconButton>
                  <InfoOutlined style={styles.infoIcon} />
                </IconButton>
              </Box>
              <Typography style={styles.subTitle}>Current statistics for the events</Typography>
              <Grid container>
                <Grid style={styles.totalImageContainer} item md={4} xs={12}>
                  <img alt="info" src={require('../images/total_info.png')} style={styles.totalImage} />
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography style={styles.totalText}>13</Typography>
                    <Box style={styles.totalDetailsContainer}>
                      <ArrowUpward style={styles.arrowUpward} />
                      <Typography style={styles.totalDetailsText}>15.2%</Typography>
                    </Box>
                  </Box>
                  <Typography style={styles.totalTitleText}>Total info</Typography>
                </Grid>
                <Grid style={styles.totalImageContainer} item md={4} xs={12}>
                  <img alt="info" src={require('../images/total_alerts.png')} style={styles.totalImage} />
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography style={styles.totalText}>5</Typography>
                    <Box style={styles.totalDetailsContainer}>
                      <ArrowUpward style={styles.arrowUpward} />
                      <Typography style={styles.totalDetailsText}>15.2%</Typography>
                    </Box>
                  </Box>
                  <Typography style={styles.totalTitleText}>Total alerts</Typography>
                </Grid>
                <Grid style={styles.totalImageContainer} item md={4} xs={12}>
                  <img alt="info" src={require('../images/total_alarms.png')} style={styles.totalImage} />
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography style={styles.totalText}>1</Typography>
                    <Box style={styles.totalDetailsContainer}>
                      <ArrowUpward style={styles.arrowUpward} />
                      <Typography style={styles.totalDetailsText}>15.2%</Typography>
                    </Box>
                  </Box>
                  <Typography style={styles.totalTitleText}>Total alarms</Typography>
                </Grid>
              </Grid>
              <Box style={{ position: 'relative' }}>
                <img alt="chart" src={require('../images/chart.png')} style={styles.chart} />
                <Typography style={styles.chartText}>SOS Raised</Typography>
                <Typography style={styles.chartTextTime}>12:23:43 pm</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} style={{ marginBottom: '5%' }}>
            <Box style={{ ...styles.backgroundContainer, marginBottom: '10%' }}>
              <Box style={styles.headerContainer}>
                <Box style={styles.titleContainer}>
                  <Typography style={styles.titleText}>Devices Status Distribution</Typography>
                  <Box style={styles.arrowContainer}>
                    <ArrowDownward style={styles.arrowIcon} />
                  </Box>
                </Box>
                <IconButton>
                  <InfoOutlined style={styles.infoIcon} />
                </IconButton>
              </Box>
              <Grid style={{ marginBottom: '5%' }} container>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} item md={3} xs={12}>
                  <img alt="device" src={require('../images/device.png')} style={{ objectFit: 'contain', width: 50 }} />
                </Grid>
                <Grid style={styles.deviceDetailsContainer} item md={3} xs={12}>
                  <FiberManualRecord style={{ ...styles.assignedIcon, color: '#5A91DD' }} />
                  <Typography style={styles.deviceDetailsNumber}>724</Typography>
                  <Typography style={styles.deviceDetailsStatus}>Assigned</Typography>
                </Grid>
                <Grid style={styles.deviceDetailsContainer} item md={3} xs={12}>
                  <FiberManualRecord style={{ ...styles.assignedIcon, color: '#66C088' }} />
                  <Typography style={styles.deviceDetailsNumber}>120</Typography>
                  <Typography style={styles.deviceDetailsStatus}>Idle</Typography>
                </Grid>
                <Grid style={styles.deviceDetailsContainer} item md={3} xs={12}>
                  <FiberManualRecord style={{ ...styles.assignedIcon, color: '#DA9D00' }} />
                  <Typography style={styles.deviceDetailsNumber}>80</Typography>
                  <Typography style={styles.deviceDetailsStatus}>Others</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box style={styles.backgroundContainer}>
              <Weather />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={8} xs={12}>
            <Box style={{ ...styles.backgroundContainer, marginBottom: '10%' }}>
              <Box style={styles.headerContainer}>
                <Box style={styles.titleContainer}>
                  <Typography style={styles.titleText}>Live Workers Trend per Zone</Typography>
                  <Box style={styles.arrowContainer}>
                    <ArrowDownward style={styles.arrowIcon} />
                  </Box>
                </Box>
                <IconButton>
                  <InfoOutlined style={styles.infoIcon} />
                </IconButton>
              </Box>
              <Typography style={styles.subTitle}>People Activity Trend for the last 12 hours</Typography>
              <LineChart
                dataset={chartData}
                xAxis={[{ dataKey: 'x' }]}
                series={[{ dataKey: 'y' }]}
                yAxis={[{ data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }]}
                height={300}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                grid={{ horizontal: true }}
                sx={{
                  "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                    display: 'none'
                  },
                  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                    fill: "#B2BAC9"
                  },
                  "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                    fill: "#B2BAC9"
                  },
                  "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                    stroke: "#B2BAC9",
                  },
                  "& .css-195sd4n-MuiChartsGrid-line": {
                    stroke: '#525A6B',
                    strokeDasharray: "3"
                  },
                  "& .css-10d7jww-MuiChartsAxis-root-MuiChartsYAxis-root .MuiChartsAxis-tick": {
                    display: 'none'
                  },
                  "& .css-132pz3d-MuiChartsAxis-root-MuiChartsXAxis-root .MuiChartsAxis-tick": {
                    display: 'none'
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid md={4} xs={12}>
            <Box style={{ ...styles.backgroundContainer, marginBottom: '10%' }}>
              <Box style={styles.headerContainer}>
                <Typography style={{ ...styles.titleText, fontSize: '0.9em' }}>
                  People Hazardous Zone / Critical Mission
                </Typography>
                <IconButton>
                  <InfoOutlined style={styles.infoIcon} />
                </IconButton>
              </Box>
              <Typography style={styles.subTitle}>Updated since last 5 minutes</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const styles = {
  backgroundImage: {
    objectFit: 'cover',
    width: '95%',
    height: '97%',
    borderRadius: 12,
    boxShadow: '10px 12px 5px 0 #00000026',
  },
  imageLayer: {
    position: 'absolute',
    backgroundColor: '#000000',
    width: '95%',
    height: '97%',
    borderRadius: 12,
    opacity: 0.5,
  },
  siteTitle: {
    color: '#FFFFFF',
    fontSize: '1.2em',
    fontWeight: '700',
  },
  siteSubTitle: {
    color: '#D9D9D9',
    fontSize: '1em',
  },
  backgroundContainer: {
    backgroundColor: '#323232',
    borderRadius: 12,
    boxShadow: '10px 12px 5px 0 #00000026',
    padding: '3%',
    //height: '95%',
    width: '90%'
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: '1em'
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //padding: '3%'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  arrowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C4352',
    borderRadius: 6,
    marginLeft: '2%',
    padding: '1%'
  },
  arrowIcon: {
    color: '#F26666',
    fontSize: '0.9em'
  },
  infoIcon: {
    color: '#B2BAC9'
  },
  subTitle: {
    color: '#B2BAC9',
    fontSize: '0.9em',
  },
  totalImageContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  totalImage: {
    objectFit: 'contain',
    width: '70%'
  },
  totalText: {
    color: '#FFFFFF',
    fontSize: '1.2em'
  },
  totalDetailsContainer: {
    backgroundColor: '#37393D',
    borderRadius: 4,
    padding: '4%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%'
  },
  arrowUpward: {
    color: '#66C088',
    fontSize: '0.8em',
    fontWeight: 'bold'
  },
  totalDetailsText: {
    color: '#66C088',
    fontSize: '0.8em',
    fontWeight: 'bold'
  },
  totalTitleText: {
    color: '#B2BAC9',
    fontSize: '0.7em',
    marginTop: '3%'
  },
  chart: {
    objectFit: 'contain',
    width: '100%',
    marginTop: '2%',
  },
  chartText: {
    color: '#EAEAEA',
    position: 'absolute',
    bottom: '30%',
    left: '40%',
    fontSize: '0.9em'
  },
  chartTextTime: {
    color: '#979797',
    position: 'absolute',
    bottom: '10%',
    left: '40%',
    fontSize: '0.8em'
  },
  deviceIcon: {
    color: '#737373'
  },
  deviceDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  assignedIcon: {
    fontSize: '1em'
  },
  deviceDetailsNumber: {
    color: '#FFFFFF',
    fontSize: '1em',
    marginTop: '5%'
  },
  deviceDetailsStatus: {
    color: '#B2BAC9',
    fontSize: '0.9em'
  }
}

export default DashboardScreen;