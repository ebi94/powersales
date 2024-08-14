import { getCompanyData } from '@/app/server/actions'
import CompanyDetails from '@/views/company/details'

const CompanyDetailsPage = async () => {
  const data = await getCompanyData()

  return <CompanyDetails customerData={data?.companyData} />
}

export default CompanyDetailsPage
