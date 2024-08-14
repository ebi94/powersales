// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { Controller, useForm } from 'react-hook-form'
import PerfectScrollbar from 'react-perfect-scrollbar'

export const country = {
  india: { country: 'India' },
  australia: { country: 'Australia' },
  france: { country: 'France' },
  brazil: { country: 'Brazil' },
  us: { country: 'United States' },
  china: { country: 'China' }
}

// Vars
const initialData = {
  contact: '',
  address1: '',
  address2: '',
  town: '',
  state: '',
  postcode: ''
}

const AddCompanyDrawer = props => {
  // Props
  const { open, handleClose, setData, customerData } = props

  // States
  const [formData, setFormData] = useState(initialData)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      country: ''
    }
  })

  const onSubmit = data => {
    const newData = {
      id: (customerData?.length && customerData?.length + 1) || 1,
      customer: data.fullName,
      customerId: customerData?.[Math.floor(Math.random() * 100) + 1].customerId ?? '1',
      email: data.email,
      country: `${country[data.country].country}`,
      countryCode: 'st',
      countryFlag: `/images/cards/${data.country}.png`,
      order: Math.floor(Math.random() * 1000) + 1,
      totalSpent: Math.random() * (10000 - 500 + 1) + 500,
      avatar: `/images/avatars/${Math.floor(Math.random() * 8) + 1}.png`
    }

    setData([...(customerData ?? []), newData])
    resetForm({ fullName: '', email: '', country: '' })
    setFormData(initialData)
    handleClose()
  }

  const handleReset = () => {
    handleClose()
    resetForm({ fullName: '', email: '', country: '' })
    setFormData(initialData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Add a Company</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>
        <div className='p-5'>
          <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-5'>
            <Typography color='text.primary' className='font-medium'>
              Basic Information
            </Typography>
            <Controller
              name='fullName'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Company Name'
                  placeholder='John'
                  {...(errors.fullName && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='email'
                  label='Email Address'
                  placeholder='johndoe@gmail.com'
                  {...(errors.email && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='text'
                  label='Address'
                  placeholder='johndoe@gmail.com'
                  {...(errors.email && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='text'
                  label='Phone'
                  placeholder='johndoe@gmail.com'
                  {...(errors.email && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            <Typography color='text.primary' className='font-medium'>
              PIC Information
            </Typography>
            <TextField
              fullWidth
              label='PIC Name'
              name='address1'
              variant='outlined'
              value={formData.address1}
              onChange={e => setFormData({ ...formData, address1: e.target.value })}
            />
            <TextField
              fullWidth
              label='PIC Contact'
              name='address2'
              variant='outlined'
              value={formData.address2}
              onChange={e => setFormData({ ...formData, address2: e.target.value })}
            />
            <div className='flex items-center gap-4 justify-content-center'>
              <Button variant='outlined' color='error' type='reset' onClick={handleReset} fullWidth>
                Cancel
              </Button>
              <Button variant='contained' type='submit' fullWidth>
                Add
              </Button>
            </div>
          </form>
        </div>
      </PerfectScrollbar>
    </Drawer>
  )
}

export default AddCompanyDrawer
