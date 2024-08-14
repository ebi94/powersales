import CompanyListTable from '@/views/company/CompanyListTable'
import { getCompanyData } from '@/app/server/actions'

const CompanyListTablePage = async () => {
  const data = await getCompanyData()

  return <CompanyListTable customerData={data?.companyData} />
}

export default CompanyListTablePage
