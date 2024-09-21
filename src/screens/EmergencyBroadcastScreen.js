import React, { useState } from "react";
import { Box, Container, IconButton, Stack, TextField, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { API_KEY } from "../common";
import { InfoOutlined } from "@mui/icons-material";

const EmergencyBroadcastScreen = () => {
  const [showModal, setShowModal] = useState(true);
  const [emergencyDomain, setEmergencyDomain] = useState('');
  return (
    <APIProvider apiKey={API_KEY}>
      <Box style={styles.blackBackground} />
      <Sidebar setShowEmergencyDetails={setShowModal} position="absolute" zIndex={3} />
      <Container>
        <Header
          screenName="EMERGENCY BROADCAST"
          position="absolute"
          zIndex={3}
          top="1%"
          titleMarginLeft="4%"
        />
        {showModal &&
          <Box style={styles.emergencyDetailsContainer}>
            <Stack direction="row" spacing={1}>
              <InfoOutlined style={styles.infoIcon} />
              <Typography style={styles.title}>Emergency Details</Typography>
            </Stack>
            <Typography style={styles.label}>Emergency Domain</Typography>
            <TextField
              value={emergencyDomain}
              onChange={(e) => setEmergencyDomain(e.target.value)}
              variant='outlined'
              placeholder="Refining - RR1"
              style={styles.textField}
              fullWidth
              size="small"
            />
            <hr style={styles.divider} />
            <Typography style={styles.label}>Emergency Area</Typography>
            <Typography style={{ ...styles.label, marginTop: '1%' }}>Choose emergency area shape</Typography>
          </Box>
        }
      </Container>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 31.9923352, lng: 35.9235009 }}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI
      />
    </APIProvider>
  );
};

const styles = {
  blackBackground: {
    position: 'absolute',
    zIndex: 2,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000000',
    opacity: 0.8
  },
  emergencyDetailsContainer: {
    padding: '1%',
    backgroundColor: '#1E1E1E',
    position: 'absolute',
    zIndex: 4,
    top: '15%',
    left: '10%',
    borderRadius: 8,
    width: '30%'
  },
  infoIcon: {
    color: '#B2BAC9'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '1em'
  },
  label: {
    color: '#FFFFFF',
    fontSize: '0.9em',
    marginTop: '5%'
  },
  textField: {
    backgroundColor: '#2C2C2C',
    borderRadius: 8
  },
  divider: {
    borderColor: 'gray',
    borderWidth: 0.5
  }
}

export default EmergencyBroadcastScreen;