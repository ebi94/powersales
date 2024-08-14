// MUI Imports
import Typography from '@mui/material/Typography'

// Component Imports

const AgentDetailsHeader = ({ customerId }) => {
  // Vars

  return (
    <div className='flex flex-wrap justify-between items-center gap-x-6 gap-y-4'>
      <div className='flex flex-col gap-1'>
        <Typography variant='h4'>{`Agent ID #321312`}</Typography>
        <Typography>Aug 17, 2020, 5:48 (ET)</Typography>
      </div>
    </div>
  )
}

export default AgentDetailsHeader
