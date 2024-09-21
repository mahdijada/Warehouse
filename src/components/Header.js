import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { GridView, NotificationsOutlined, Search } from "@mui/icons-material";

const Header = ({ screenName, position, zIndex, left, top, titleMarginLeft }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Box style={{ ...styles.container, position: position, zIndex: zIndex, left: left, top: top }}>
      <Typography style={{ ...styles.title, marginLeft: titleMarginLeft }}>{screenName}</Typography>
      <Stack direction="row" spacing={2} style={{ alignItems: 'center' }}>
        <TextField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          variant='outlined'
          placeholder="Search..."
          size="small"
          style={styles.searchBarContainer}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: '#B2BAC9' }} />
              </InputAdornment>
            ),
            style: { color: '#B2BAC9' }
          }}
        />
        <IconButton style={styles.notificationButtonContainer} aria-label="delete">
          <NotificationsOutlined style={{ color: '#B2BAC9' }} />
        </IconButton>
        <Button
          variant="contained"
          startIcon={<GridView />}
          style={styles.modulesButton}
        >
          Modules
        </Button>
        <Avatar alt="avatar" src={require('../images/avatar_1.png')} />
      </Stack>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '93%'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '1.3em',
    marginTop: '2%'
  },
  searchBarContainer: {
    backgroundColor: '#37393D',
    borderRadius: 8,
  },
  notificationButtonContainer: {
    backgroundColor: '#37393D',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  modulesButton: {
    backgroundColor: '#37393D',
    color: '#B2BAC9'
  },
}

export default Header;