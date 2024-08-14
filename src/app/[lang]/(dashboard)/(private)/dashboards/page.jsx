// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CardStatVertical from '@components/card-statistics/Vertical'
import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'
import LineAreaChart from '@views/dashboards/crm/LineAreaChart'
import RevenueReport from '@views/dashboards/crm/RevenueReport'
import CardWidgetsSalesOverview from '@views/dashboards/crm/SalesOverview'
import TotalSales from '@views/dashboards/crm/TotalSales'
import Transactions from '@views/dashboards/crm/Transactions'
import WeeklySales from '@views/dashboards/crm/WeeklySales'

const DashboardCRM = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} className='self-end'>
        <Transactions />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalSales />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RevenueReport />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWidgetsSalesOverview />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityTimeline />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={8}>
            <WeeklySales />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={6}>
              <Grid item xs={6} sm={12}>
                <LineAreaChart />
              </Grid>
              <Grid item xs={6} sm={12}>
                <CardStatVertical
                  stats='862'
                  trend='negative'
                  trendNumber='18%'
                  title='New Project'
                  subtitle='Yearly Project'
                  avatarColor='primary'
                  avatarIcon='ri-file-word-2-line'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
