import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./Tabs.css"


const ProfileTabs = () => {

    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <>
        <div className='tabs-box'>
        

      
      <Box sx={{ width: '50%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Profile" value="1" />
                <Tab label="Education" value="2" />
                <Tab label="Experience" value="3" />
                <Tab label="Achievement" value="4" />
                <Tab label="Skill" value="5" />
                <Tab label="References" value="5" />

              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Four</TabPanel>
            <TabPanel value="5">Item Five</TabPanel>
          </TabContext>
        </Box></div></>
  )
}

export default ProfileTabs;