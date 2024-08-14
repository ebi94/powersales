// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AgentLeftOverview from './agent-left-overview/index'
import AgentRight from './agent-right/index'
import AgentDetailsHeader from './AgentDetailsHeader'

const AttendanceTab = dynamic(() => import('@views/agent/details/agent-right/attendance'))
const TrackingTab = dynamic(() => import('@views/agent/details/agent-right/tracking'))
const SalesTab = dynamic(() => import('@views/agent/details/agent-right/sales'))

// Vars
const tabContentList = () => ({
  attendance: <AttendanceTab />,
  sales: <SalesTab />,
  tracking: <TrackingTab />
})

const AgentDetails = ({ customerData, customerId }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AgentDetailsHeader customerId={customerId} />
      </Grid>
      <Grid item xs={12} md={4}>
        <AgentLeftOverview customerData={customerData} />
      </Grid>
      <Grid item xs={12} md={8}>
        <AgentRight tabContentList={tabContentList()} />
      </Grid>
    </Grid>
  )
}

export default AgentDetails
