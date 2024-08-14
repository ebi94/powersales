'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

import AgentSalesListTable from './AgentSalesListTable'

// Component Imports

const SalesTab = () => {
  const data = [
    {
      id: '4987',
      issuedDate: '13 Aug 2024',
      stockIn: 20,
      stockOut: 18,
      stockRemaining: 2,
      total: 342800,
      status: 'Achived',
      invoiceStatus: 'Paid',
      balance: '$724',
      dueDate: '23 Aug 2024'
    },
    {
      id: '4988',
      issuedDate: '17 Aug 2024',
      stockIn: 20,
      stockOut: 18,
      stockRemaining: 2,
      total: 521900,
      status: 'Achived',
      balance: 0,
      dueDate: '15 Aug 2024'
    },
    {
      id: '4989',
      issuedDate: '19 Aug 2024',
      stockIn: 20,
      stockOut: 10,
      stockRemaining: 10,
      total: 371900,
      status: 'Not Achieved',
      balance: 0,
      dueDate: '03 Aug 2024'
    },
    {
      id: '4990',
      issuedDate: '06 Aug 2024',
      stockIn: 20,
      stockOut: 18,
      stockRemaining: 2,
      total: 474900,
      status: 'Achived',
      balance: 0,
      dueDate: '11 Aug 2024'
    },
    {
      id: '4991',
      issuedDate: '08 Aug 2024',
      stockIn: 20,
      stockOut: 18,
      stockRemaining: 2,
      total: 405600,
      status: 'Achived',
      balance: '$815',
      dueDate: '30 Aug 2024'
    },
    {
      id: '4992',
      issuedDate: '26 Aug 2024',
      stockIn: 20,
      stockOut: 18,
      stockRemaining: 2,
      total: 277100,
      status: 'Achived',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '24 Aug 2024'
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AgentSalesListTable dataList={data} />
      </Grid>
    </Grid>
  )
}

export default SalesTab
