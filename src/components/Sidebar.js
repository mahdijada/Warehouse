import React from "react";
import { Box, IconButton, Typography } from '@mui/material';
import {
  Dns,
  FeedOutlined,
  HomeOutlined,
  InsertChartOutlined,
  SmartDisplayOutlined,
  WorkOutline
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'
import { windowHeight } from "../common";

const Sidebar = ({ position, zIndex, showEmergencyDetails, setShowEmergencyDetails }) => {
  const navigate = useNavigate();

  const data = [
    { iconName: 'Home', icon: <HomeOutlined style={styles.iconStyle} /> },
    { iconName: 'Realtime', icon: <FeedOutlined style={styles.iconStyle} /> },
    { iconName: 'Events', icon: <InsertChartOutlined style={styles.iconStyle} /> },
    { iconName: 'Devices', icon: <WorkOutline style={styles.iconStyle} /> },
    { iconName: 'Domain', icon: <Dns style={styles.iconStyle} /> },
    { iconName: 'Settings', icon: <SmartDisplayOutlined style={styles.iconStyle} /> },
  ];

  const onClickItem = (iconName) => {
    if (iconName === 'Home') {
      navigate('/')
    } else if (iconName === 'Events') {
      setShowEmergencyDetails(!showEmergencyDetails)
    }
  }

  return (
    <Box style={{ ...styles.sideBarContainer, position: position, zIndex: zIndex }}>
      <img src={require('../images/logo.png')} alt="logo" style={styles.logo} />
      {data.map((item) => (
        <IconButton onClick={() => onClickItem(item.iconName)} style={styles.iconButton}>
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
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1%',
    left: '1%',
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