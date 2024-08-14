// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const AgentDetails = ({ customerData }) => {
  // Vars
  const buttonProps = {
    variant: 'contained',
    children: 'Edit Details'
  }

  return (
    <Card>
      <CardContent className='flex flex-col pbs-12 gap-6'>
        <div className='flex flex-col justify-self-center items-center gap-6'>
          <div className='flex flex-col items-center gap-4'>
            <CustomAvatar src={customerData?.avatar} variant='rounded' alt='Customer Avatar' size={120} />
            <div className='flex flex-col items-center'>
              <Typography variant='h5'>Brian Winarno</Typography>
              <Typography>Agent ID #321321</Typography>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <Typography variant='h5'>Details</Typography>
          <Divider />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <Typography color='text.primary' className='font-medium' sx={{ width: '25%' }}>
                Full Name
              </Typography>
              <Typography>: Brian Winarno</Typography>
            </div>
            <div className='flex items-center gap-1'>
              <Typography color='text.primary' className='font-medium' sx={{ width: '25%' }}>
                Email
              </Typography>
              <Typography>: winarno@abc.com</Typography>
            </div>
            <div className='flex items-center gap-1'>
              <Typography color='text.primary' className='font-medium' sx={{ width: '25%' }}>
                Contact
              </Typography>
              <Typography>: +62 856 4640 600</Typography>
            </div>
            <div className='flex items-center gap-1'>
              <Typography color='text.primary' className='font-medium' sx={{ width: '25%' }}>
                Address
              </Typography>
              <Typography>: Surabaya, Jl Baru No. 1</Typography>
            </div>
            <div className='flex items-center gap-1'>
              <Typography color='text.primary' className='font-medium' sx={{ width: '25%' }}>
                Status
              </Typography>
              : <Chip label='Active' variant='tonal' color='success' size='small' />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AgentDetails
