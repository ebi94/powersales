// MUI Imports
import Grid from '@mui/material/Grid'

import AgentDetails from './AgentDetails'

// Component Imports

const AgentLeftOverview = ({ customerData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AgentDetails customerData={customerData} />
      </Grid>
    </Grid>
  )
}

export default AgentLeftOverview
