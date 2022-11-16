import React, { useState } from 'react';
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

  const [file, setFile] = useState();
  function handleChangefile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

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
                <Tab label="References" value="6" />

              </TabList>
            </Box>
            <TabPanel value="1">Profile Image


              <form className="box" encType="multipart/form">
                <div className="field mt-5">
                  <input type="file" onChange={handleChangefile} /><br></br>
                  <img className="profileImg" src={file} />
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Email" />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Name</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Name" />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Address</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Address" />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Phone</label>
                  <div className="controls">
                    <input type="number" className="input" placeholder="Phone" />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Position</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Position" />
                  </div>
                </div>

                <div className="field mt-5">
                  <button className="Loginbutton">Save</button>
                </div>
              </form>


            </TabPanel>
            <TabPanel value="2">Education</TabPanel>
            <TabPanel value="3">Experience</TabPanel>
            <TabPanel value="4">Achievement</TabPanel>
            <TabPanel value="5">Skill</TabPanel>
            <TabPanel value="6">References</TabPanel>
          </TabContext>
        </Box></div></>
  )
}

export default ProfileTabs;