'use client'

import Grid from '@mui/material/Grid'

import { getInvoiceData } from '@/app/server/actions'

import InvoiceListTable from '@/views/apps/invoice/list/InvoiceListTable'

const SalesTab = async () => {
  const data = await getInvoiceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <InvoiceListTable invoiceData={data} />
      </Grid>
    </Grid>
  )
}

export default SalesTab
