'use client'

// MUI Imports
import MuiButton from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Component Imports
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import UpgradePlan from '@components/dialogs/upgrade-plan'

const Button = styled(MuiButton)(() => ({
  backgroundColor: 'var(--mui-palette-common-white) !important',
  color: 'var(--mui-palette-primary-main) !important'
}))

const CompanyPlan = () => {
  // Vars
  const buttonProps = {
    variant: 'contained',
    children: 'Upgrade To Premium'
  }

  return (
    <Card>
      <CardContent className='flex flex-col gap-2 bg-primary'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-4'>
            <Typography variant='h5' color='common.white'>
              Upgrade to premium
            </Typography>
            <Typography color='common.white'>Upgrade customer to premium membership to access pro features.</Typography>
          </div>
          <img src='/images/apps/ecommerce/3d-rocket.png' height={108} />
        </div>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={UpgradePlan} />
      </CardContent>
    </Card>
  )
}

export default CompanyPlan
