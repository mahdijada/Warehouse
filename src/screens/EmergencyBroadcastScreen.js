import React, { useState } from "react";
import { Box, Button, Checkbox, Container, Fab, FormControlLabel, FormGroup, IconButton, Stack, TextField, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { API_KEY } from "../common";
import { InfoOutlined, Add } from "@mui/icons-material";

const floatingButtonList = [
  { buttonName: 'Assembly Point', img: require('../images/assembly_point.png') },
  { buttonName: 'Fire Extinguisher', img: require('../images/fire_extinguisher.png') },
  { buttonName: 'Safety Exit', img: require('../images/safety_exit.png') },
  { buttonName: 'First Aid', img: require('../images/first_aid.png') },
  { buttonName: 'Shower', img: require('../images/shower.png') },
  { buttonName: 'Life Boat', img: require('../images/life_boat.png') },
]

const EmergencyBroadcastScreen = () => {
  const [showEmergencyDetailsModal, setShowEmergencyDetailsModal] = useState(false);
  const [emergencyDomain, setEmergencyDomain] = useState('');
  const [defaultName, setDefaultName] = useState('');
  const [showFloatButtonList, setShowFloatButtonList] = useState(false);

  return (
    <Box>
      <APIProvider apiKey={API_KEY}>
        {showEmergencyDetailsModal &&
          <Box style={styles.blackBackground} />
        }
        <Sidebar showEmergencyDetails={showEmergencyDetailsModal} setShowEmergencyDetails={setShowEmergencyDetailsModal} position="absolute" zIndex={3} />
        <Container>
          <Header
            screenName="EMERGENCY BROADCAST"
            position="absolute"
            zIndex={3}
            top="1%"
            titleMarginLeft="4%"
            color={showEmergencyDetailsModal ? '#FFFFFF' : '#000000'}
          />
          {showEmergencyDetailsModal &&
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
                InputProps={{
                  style: { color: '#BABDC1' }
                }}
              />
              <hr style={styles.divider} />
              <Typography style={styles.label}>Emergency Area</Typography>
              <Typography style={{ ...styles.label, marginTop: '1%' }}>Choose emergency area shape</Typography>
              <Stack style={{ marginTop: '2%' }} direction="row" spacing={1}>
                <IconButton style={styles.shapeContainer}>
                  <Box style={{ border: '2px dashed #F26666', borderRadius: 3, width: 25, height: 25 }} />
                </IconButton>
                <IconButton style={styles.shapeContainer}>
                  <img src={require('../images/circle.png')} style={styles.shapeImage} />
                </IconButton>
                <IconButton style={styles.shapeContainer}>
                  <img src={require('../images/triangle.png')} style={styles.shapeImage} />
                </IconButton>
                <IconButton style={styles.shapeContainer}>
                  <img src={require('../images/polygon.png')} style={styles.shapeImage} />
                </IconButton>
              </Stack>
              <hr style={styles.divider} />
              <Typography style={styles.label}>Emergency Name</Typography>
              <TextField
                value={defaultName}
                onChange={(e) => setDefaultName(e.target.value)}
                variant='outlined'
                placeholder="Default Name"
                style={styles.textField}
                fullWidth
                size="small"
                InputProps={{
                  style: { color: '#BABDC1' }
                }}
              />
              <hr style={styles.divider} />
              <Typography style={styles.label}>Emergency Layers</Typography>
              <FormGroup>
                <FormControlLabel style={{ color: '#FFFFFF' }} control={<Checkbox defaultChecked />} label="Employees" />
                <FormControlLabel style={{ color: '#FFFFFF' }} control={<Checkbox />} label="Points of interest" />
                <FormControlLabel style={{ color: '#FFFFFF' }} control={<Checkbox defaultChecked />} label="HSE Zones" />
                <FormControlLabel style={{ color: '#FFFFFF' }} control={<Checkbox defaultChecked />} label="Events" />
              </FormGroup>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Button
                  variant="contained"
                  style={styles.button}
                >
                  Save & Broadcast later
                </Button>
                <Button
                  variant="contained"
                  style={styles.button}
                >
                  Save & Broadcast Now
                </Button>
              </Stack>
            </Box>
          }
          <Fab
            onClick={() => setShowFloatButtonList(!showFloatButtonList)}
            style={styles.floatButton}
            aria-label="add"
          >
            <Add />
          </Fab>
          {showFloatButtonList &&
            <Box style={styles.floatButtonList}>
              <Typography style={{ ...styles.label, marginTop: 0 }}>Add Points of Interests</Typography>
              <hr />
              <Stack direction="column" alignItems="flex-start">
                {floatingButtonList.map((item) => (
                  <Button
                    variant="text"
                    startIcon={<img alt="Assembly Point" src={item.img} style={styles.pointIcon} />}
                    style={styles.pointsButton}
                  >
                    {item.buttonName}
                  </Button>
                ))}
              </Stack>
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
    </Box>
  );
};

const styles = {
  blackBackground: {
    position: 'absolute',
    zIndex: 2,
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: '#000000',
    opacity: 0.8,
    overflowX: 'hidden'
  },
  emergencyDetailsContainer: {
    padding: '1%',
    backgroundColor: '#1E1E1E',
    position: 'absolute',
    zIndex: 4,
    top: '10%',
    left: '8.5%',
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
    borderWidth: 0.5,
    marginTop: '5%'
  },
  shapeContainer: {
    backgroundColor: '#37393D',
    borderRadius: 4,
    padding: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shapeImage: {
    objectFit: 'contain',
    width: '70%'
  },
  button: {
    backgroundColor: '#404040',
    color: '#FFFFFF',
    fontSize: '0.7em',
    '&:hover': {
      backgroundColor: '#404040',
      color: '#FFFFFF',
    }
  },
  floatButton: {
    position: 'absolute',
    zIndex: 3,
    top: '15%',
    right: '3%',
    backgroundColor: 'green',
    color: '#FFFFFF'
  },
  floatButtonList: {
    backgroundColor: '#1E1E1E',
    padding: '1%',
    position: 'absolute',
    top: '20%',
    right: '6%',
    zIndex: 3,
    borderRadius: 12
  },
  pointIcon: {
    objectFit: 'contain',
    width: '70%'
  },
  pointsButton: {
    color: '#FFFFFF',
  }
}

export default EmergencyBroadcastScreen;