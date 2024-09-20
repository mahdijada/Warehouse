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

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Box style={styles.container}>
      <Typography style={styles.title}>Realtime Dashboard</Typography>
      <Stack direction="row" spacing={2} style={{ alignItems: 'center' }}>
        <TextField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          variant='outlined'
          placeholder="Search..."
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
        <Avatar alt="Remy Sharp" src={require('../images/avatar_1.png')} />
      </Stack>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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