// Data Imports
import { getCompanyData } from '@/app/server/actions'
import AgentDetails from '@/views/agent/details/index'

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
const CompanyDetailsPage = async () => {
  // Vars
  const data = await getCompanyData()

  return <AgentDetails customerData={data?.companyData} />
}

export default CompanyDetailsPage
