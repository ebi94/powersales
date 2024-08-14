// MUI Imports
import Grid from '@mui/material/Grid'
import CompanyDetails from './CompanyDetails'

// Component Imports

const CompanyLeftOverview = ({ customerData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CompanyDetails customerData={customerData} />
      </Grid>
    </Grid>
  )
}

export default CompanyLeftOverview
