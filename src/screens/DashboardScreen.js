import React from "react";
import { Avatar, Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward, ErrorOutlineOutlined, FiberManualRecord, InfoOutlined, ReportProblemOutlined, Square, } from "@mui/icons-material";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Weather from "../components/Weather";
import { pieChartData } from '../data';
import Site from "../components/Site";

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
                //dataset={chartData}
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
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
              <Stack direction="row" spacing={3} style={{ marginTop: '5%' }}>
                <Stack direction="column">
                  <Avatar alt="avatar" src={require('../images/avatar_2.png')} />
                  <Divider style={{ height: 40, alignSelf: 'center', borderColor: '#7A7A7A' }} orientation="vertical" />
                  <Avatar alt="avatar" src={require('../images/avatar_3.png')} />
                  <Divider style={{ height: 40, alignSelf: 'center', borderColor: '#7A7A7A' }} orientation="vertical" />
                  <Avatar alt="avatar" src={require('../images/avatar_4.png')} />
                  <Divider style={{ height: 40, alignSelf: 'center', borderColor: '#7A7A7A' }} orientation="vertical" />
                  <Avatar alt="avatar" src={require('../images/avatar_5.png')} />
                </Stack>
                <Stack direction="column">
                  <Typography style={styles.personName}>Mohammad Yousef Ali</Typography>
                  <Stack direction="row" spacing={3} style={{ marginBottom: '20%', width: '105%' }}>
                    <Typography style={styles.positionName}>HSE Manager</Typography>
                    <Box style={styles.timeContainer}>
                      <Typography style={{ ...styles.totalDetailsText, color: '#B2BAC9' }}>
                        01:44
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography style={styles.personName}>Saleem Mohammad Sami</Typography>
                  <Stack direction="row" spacing={3} style={{ marginBottom: '20%', width: '105%' }}>
                    <Typography style={styles.positionName}>Safety Supervision</Typography>
                    <Box style={styles.timeContainer}>
                      <Typography style={{ ...styles.totalDetailsText, color: '#B2BAC9' }}>
                        01:20
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography style={styles.personName}>Sami Hamad Ali</Typography>
                  <Stack direction="row" spacing={3} style={{ marginBottom: '20%', width: '105%' }}>
                    <Typography style={styles.positionName}>Operator</Typography>
                    <Box style={styles.timeContainer}>
                      <Typography style={{ ...styles.totalDetailsText, color: '#B2BAC9' }}>
                        00:45
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography style={styles.personName}>Osama Omar Ibrahem</Typography>
                  <Stack direction="row" spacing={3} style={{ marginBottom: 0, width: '105%' }}>
                    <Typography style={styles.positionName}>Maintenance Engineer</Typography>
                    <Box style={styles.timeContainer}>
                      <Typography style={{ ...styles.totalDetailsText, color: '#B2BAC9' }}>
                        00:35
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box style={{ ...styles.backgroundContainer, marginBottom: '5%', width: '94%' }}>
              <Box style={styles.headerContainer}>
                <Box style={styles.colorsInfoContainer}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Square style={{ color: '#FFB800', fontSize: '0.9em' }} />
                    <Typography style={styles.colorInfoText}>Alerts</Typography>
                    <Square style={{ color: '#DEE7FA', fontSize: '0.9em' }} />
                    <Typography style={styles.colorInfoText}>Info</Typography>
                    <Square style={{ color: '#BC4C34', fontSize: '0.9em' }} />
                    <Typography style={styles.colorInfoText}>Alarm</Typography>
                  </Stack>
                </Box>
                <Typography style={styles.subTitle}>Last updated time 2:23 pm, Sunday </Typography>
              </Box>
              <Grid container style={{ marginTop: '3%' }}>
                <Grid item md={6} xs={12}>
                  <Box style={styles.backgroundContainer}>
                    <Grid container>
                      <Grid item md={4} xs={12}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography style={styles.colorInfoText}>Live Events</Typography>
                          <Box style={{ ...styles.arrowContainer, padding: '2%' }}>
                            <ArrowUpward style={styles.arrowUpward} />
                          </Box>
                        </Stack>
                        <ErrorOutlineOutlined style={{ color: '#FFB800', fontSize: '3em', marginTop: '10%' }} />
                        <Typography style={styles.totalTitleText}>Total Alerts</Typography>
                        <Stack direction="row" spacing={1} alignItems="center" style={{ marginTop: '2%' }}>
                          <Typography style={styles.totalText}>487</Typography>
                          <Box style={{ ...styles.totalDetailsContainer, padding: "2%" }}>
                            <ArrowUpward style={styles.arrowUpward} />
                            <Typography style={styles.totalDetailsText}>15.2%</Typography>
                          </Box>
                        </Stack>
                        <ReportProblemOutlined style={{ color: '#BC4C34', fontSize: '3em', marginTop: '10%' }} />
                        <Typography style={styles.totalTitleText}>Total Alarms</Typography>
                        <Stack direction="row" spacing={1} alignItems="center" style={{ marginTop: '2%' }}>
                          <Typography style={styles.totalText}>600</Typography>
                          <Box style={{ ...styles.totalDetailsContainer, padding: "2%" }}>
                            <ArrowUpward style={styles.arrowUpward} />
                            <Typography style={styles.totalDetailsText}>15.2%</Typography>
                          </Box>
                        </Stack>
                        <Typography style={{ ...styles.totalTitleText, marginTop: '20%' }}>Previous Year Total</Typography>
                        <Stack direction="row" spacing={1} alignItems="center" style={{ marginTop: '2%' }}>
                          <Typography style={styles.totalText}>1187</Typography>
                          <Box style={{ ...styles.totalDetailsContainer, padding: "2%" }}>
                            <ArrowUpward style={styles.arrowUpward} />
                            <Typography style={styles.totalDetailsText}>15.2%</Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item md={8} xs={12}>
                        <Box style={styles.pieBackground}>
                          <Typography style={{ textAlign: 'center', color: '#B2BAC9' }}>Total Events</Typography>
                          <Typography style={{ textAlign: 'center', color: '#FFFFFF' }}>
                            {pieChartData.reduce((total, current) => total + current.value, 0)}
                          </Typography>
                          <PieChart
                            series={[
                              {
                                data: pieChartData,
                                innerRadius: 70
                              },
                            ]}
                            sx={{ marginLeft: '30%' }}
                            height={170}
                          >
                          </PieChart>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box style={{ ...styles.backgroundContainer, width: '95%' }}>
                    <Grid container>
                      <Grid item md={6} xs={12}>
                        <Site
                          siteName="Site 1"
                          percentageValue={0.7}
                          prevYr={4}
                          grpAvg={5}
                          prevYrPercentage={14.2}
                          percentageDetailsTextColor="#B2BAC9"
                          arrowDownwardColor="#B2BAC9"
                          grpAvgPercentage={20}
                          backgroundColor1="#BC4C34"
                          backgroundColor2="#DA7739"
                          backgroundColor3="#DA7739"
                          upperNumber={18}
                          lowerNumber={48}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Site
                          siteName="Site 3"
                          downArrow
                          percentageValue={6.4}
                          prevYr={4}
                          grpAvg={6}
                          prevYrPercentage={14.2}
                          percentageDetailsTextColor="#F26666"
                          arrowDownwardColor="#F26666"
                          grpAvgPercentage={50}
                          backgroundColor1="#BC4C34"
                          backgroundColor2="#5A91E2"
                          backgroundColor3="#5A91E2"
                          upperNumber={18}
                          lowerNumber={54}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Site
                          siteName="Site 2"
                          percentageValue={6}
                          prevYr={4}
                          grpAvg={5}
                          prevYrPercentage={14.2}
                          percentageDetailsTextColor="#B2BAC9"
                          arrowDownwardColor="#B2BAC9"
                          grpAvgPercentage={20}
                          backgroundColor1="#BC4C34"
                          backgroundColor2="#DA7739"
                          backgroundColor3="#5A91E2"
                          upperNumber={18}
                          lowerNumber={48}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Site
                          siteName="Site 4"
                          percentageValue={22.32}
                          prevYr={4}
                          grpAvg={5}
                          prevYrPercentage={14.2}
                          percentageDetailsTextColor="#B2BAC9"
                          arrowDownwardColor="#B2BAC9"
                          grpAvgPercentage={20}
                          backgroundColor1="#BC4C34"
                          backgroundColor2="#BC4C34"
                          backgroundColor3="#DA7739"
                          upperNumber={24}
                          lowerNumber={32}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <hr style={styles.hrStyle} />
        <Typography style={styles.copyRightsText}>Site ©Copyrights 2021. All rights reserved</Typography>
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
  },
  colorsInfoContainer: {
    backgroundColor: '#37393D',
    padding: '1%',
    borderRadius: 7,
  },
  colorInfoText: {
    color: '#B2BAC9',
    fontSize: '0.9em'
  },
  pieBackground: {
    backgroundColor: '#3B3B3B',
    borderRadius: "0px 12px 12px 0px",
    boxShadow: '10px 12px 5px 0 #00000026',
    paddingBlock: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    //height: '95%',
  },
  hrStyle: {
    borderColor: '#525A6B'
  },
  copyRightsText: {
    color: '#B2BAC9',
    fontSize: '0.9em',
    marginBottom: '3%',
    marginLeft: '3%'
  },
  personName: {
    color: '#D9D9D9',
    fontSize: '0.9em'
  },
  positionName: {
    color: '#B2BAC9',
    fontSize: '0.8em',
  },
  timeContainer: {
    backgroundColor: '#37393D',
    borderRadius: 4,
    padding: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default DashboardScreen;