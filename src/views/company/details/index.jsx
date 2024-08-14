// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CompanyLeftOverview from './company-left-overview/index'
import CompanyRight from './company-right/index'
import CompanyDetailsHeader from './CompanyDetailsHeader'

const AgentTab = dynamic(() => import('@views/company/details/company-right/agent'))
const TrackingTab = dynamic(() => import('@views/company/details/company-right/tracking'))
const SalesTab = dynamic(() => import('@views/company/details/company-right/sales'))

// Vars
const tabContentList = () => ({
  agent: <AgentTab />,
  sales: <SalesTab />,
  tracking: <TrackingTab />
})

const CompanyDetails = ({ customerData, customerId }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CompanyDetailsHeader customerId={customerId} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CompanyLeftOverview customerData={customerData} />
      </Grid>
      <Grid item xs={12} md={8}>
        <CompanyRight tabContentList={tabContentList()} />
      </Grid>
    </Grid>
  )
}

export default CompanyDetails
