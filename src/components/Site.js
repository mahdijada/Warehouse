import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowDownward, InfoOutlined } from "@mui/icons-material";

const Site = ({
  siteName,
  downArrow,
  percentageValue,
  prevYr,
  grpAvg,
  prevYrPercentage,
  percentageDetailsTextColor,
  arrowDownwardColor,
  grpAvgPercentage,
  backgroundColor1,
  backgroundColor2,
  backgroundColor3,
  upperNumber,
  lowerNumber
}) => {
  return (
    <Box style={styles.backgroundContainer}>
      <Box style={styles.headerContainer}>
        <Box style={styles.titleContainer}>
          <Typography style={styles.titleText}>{siteName}</Typography>
          {downArrow && <Box style={styles.arrowContainer}>
            <ArrowDownward style={styles.arrowIcon} />
          </Box>}
        </Box>
        <IconButton>
          <InfoOutlined style={styles.infoIcon} />
        </IconButton>
      </Box>
      <Stack direction="row" spacing={1}>
        <Stack direction="column">
          <Typography style={styles.siteSubTitle}>Total Events</Typography>
          <Typography style={styles.siteTitle}>{percentageValue}%</Typography>
          <Stack style={{ width: '105%' }} direction="row" spacing={1}>
            <Typography style={styles.siteSubTitle}>Prev. Yr. {prevYr}%</Typography>
            <Box style={{ ...styles.percentageContainer, padding: "1%" }}>
              <ArrowDownward style={{ ...styles.arrowDownward, color: arrowDownwardColor }} />
              <Typography style={{ ...styles.percentageDetailsText, color: percentageDetailsTextColor }}>{prevYrPercentage}%</Typography>
            </Box>
          </Stack>
          <Stack style={{ width: '105%' }} direction="row" spacing={1}>
            <Typography style={styles.siteSubTitle}>Grp. Avg {grpAvg}%</Typography>
            <Box style={{ ...styles.percentageContainer, padding: "1%" }}>
              <ArrowDownward style={{ ...styles.arrowDownward, color: arrowDownwardColor }} />
              <Typography style={{ ...styles.percentageDetailsText, color: percentageDetailsTextColor }}>{grpAvgPercentage}%</Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack direction="column" alignItems="center" style={{ width: '30%' }}>
          <Typography style={styles.siteSubTitle}>{upperNumber}</Typography>
          <Box style={{ padding: '20%', backgroundColor: backgroundColor1, borderRadius: '4px 4px 0px 0px' }} />
          <Box style={{ padding: '20%', backgroundColor: backgroundColor2, borderRadius: '0px 0px 0px 0px' }} />
          <Box style={{ padding: '20%', backgroundColor: backgroundColor3, borderRadius: '0px 0px 4px 4px' }} />
          <Typography style={styles.siteSubTitle}>{lowerNumber}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const styles = {
  backgroundContainer: {
    backgroundColor: '#323232',
    borderRadius: 12,
    boxShadow: '10px 12px 5px 0 #00000026',
    padding: '3%',
    width: '90%',
    marginBlock: '10%'
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: '1em',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  siteTitle: {
    color: '#FFFFFF',
    fontSize: '1.2em',
    marginBottom: '3%'
  },
  siteSubTitle: {
    color: '#D9D9D9',
    fontSize: '0.8em',
    marginBottom: '3%'
  },
  percentageContainer: {
    backgroundColor: '#37393D',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: '10%'
  },
  arrowDownward: {
    fontSize: '0.8em',
    fontWeight: 'bold'
  },
  percentageDetailsText: {
    fontSize: '0.8em',
    fontWeight: 'bold'
  },
}

export default Site;