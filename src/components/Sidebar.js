import React from "react";
import { Box, IconButton, Typography } from '@mui/material';
import {
  FeedOutlined,
  HomeOutlined,
  InsertChartOutlined,
  SmartDisplayOutlined,
  WorkOutline
} from "@mui/icons-material";
import { windowHeight } from "../common";

const Sidebar = () => {
  const data = [
    { iconName: 'Home', icon: <HomeOutlined style={styles.iconStyle} /> },
    { iconName: 'Realtime', icon: <FeedOutlined style={styles.iconStyle} /> },
    { iconName: 'Events', icon: <InsertChartOutlined style={styles.iconStyle} /> },
    { iconName: 'Devices', icon: <WorkOutline style={styles.iconStyle} /> },
    { iconName: 'Realtime', icon: <FeedOutlined style={styles.iconStyle} /> },
    { iconName: 'Settings', icon: <SmartDisplayOutlined style={styles.iconStyle} /> },
  ]
  return (
    <Box style={styles.sideBarContainer}>
      <img src={require('../images/logo.png')} alt="logo" style={styles.logo} />
      {data.map((item) => (
        <IconButton style={styles.iconButton}>
          {item.icon}
          <Typography style={styles.iconText}>{item.iconName}</Typography>
        </IconButton>
      ))}
    </Box>
  );
};

const styles = {
  sideBarContainer: {
    backgroundColor: '#323232',
    height: windowHeight / 1.1,
    width: '6%',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBlock: '2%',
    position: 'sticky',
    top: '1%'
  },
  logo: {
    objectFit: 'contain',
    height: 80,
    width: 50
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5%'
  },
  iconStyle: {
    color: '#B2BAC9',
    marginBottom: '5%'
  },
  iconText: {
    color: '#B2BAC9',
    fontSize: '0.5em'
  },
}

export default Sidebar;