// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports

// Data Imports
import AttendanceListTable from './AttendanceListTable'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/widget-examples` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getStatisticsData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch statistics data')
  }

  return res.json()
} */
/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/ecommerce` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getEcommerceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/ecommerce`)

  if (!res.ok) {
    throw new Error('Failed to fetch ecommerce data')
  }

  return res.json()
} */
const AttandanceTab = () => {
  // Vars
  const data = [
    {
      id: 1,
      date: '01 Aug 2024',
      attendanceStatus: 'Present',
      notes: 'Arrived on time',
      timeIn: '08:00 AM',
      timeOut: '04:00 PM'
    },
    {
      id: 2,
      date: '02 Aug 2024',
      attendanceStatus: 'Present',
      notes: 'Arrived on time',
      timeIn: '08:00 AM',
      timeOut: '04:00 PM'
    },
    {
      id: 3,
      date: '03 Aug 2024',
      attendanceStatus: 'Present',
      notes: 'Arrived on time',
      timeIn: '08:00 AM',
      timeOut: '04:00 PM'
    },
    {
      id: 4,
      date: '04 Aug 2024',
      attendanceStatus: 'Absent',
      notes: 'Sick',
      timeIn: '',
      timeOut: ''
    },
    {
      id: 5,
      date: '05 Aug 2024',
      attendanceStatus: 'Present',
      notes: 'Arrived on time',
      timeIn: '08:00 AM',
      timeOut: '04:00 PM'
    },
    {
      id: 6,
      date: '06 Aug 2024',
      attendanceStatus: 'Present',
      notes: 'Arrived 10 minutes late',
      timeIn: '08:10 AM',
      timeOut: '04:00 PM'
    },
    {
      id: 7,
      date: '07 Aug 2024',
      attendanceStatus: 'Absent',
      notes: 'Family matters',
      timeIn: '',
      timeOut: ''
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AttendanceListTable dataList={data} />
      </Grid>
    </Grid>
  )
}

export default AttandanceTab
