'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

const AgentRight = ({ tabContentList }) => {
  // States
  const [activeTab, setActiveTab] = useState('attendance')

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  return (
    <>
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
              <Tab icon={<i className='ri-group-line' />} value='attendance' label='Attendance' iconPosition='start' />
              <Tab icon={<i className='ri-file-list-line' />} value='sales' label='Sales' iconPosition='start' />
              <Tab
                icon={<i className='ri-map-pin-user-line' />}
                value='tracking'
                label='Live Tracking'
                iconPosition='start'
              />
            </CustomTabList>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={activeTab} className='p-0'>
              {tabContentList[activeTab]}
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    </>
  )
}

export default AgentRight
