// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types Imports
import { DataGridRowType } from 'src/@fake-db/types'

const data: DataGridRowType[] = [
  {
    id: 95,
    avatar: '2.png',
    full_name: 'Edwina Ebsworth',
    post: 'Human Resources Assistant',
    email: 'eebsworth2m@sbwire.com',
    city: 'Puzi',
    start_date: '09/27/2018',
    salary: 19586.23,
    age: '27',
    experience: '2 Years',
    status: 1
  }
]

mock.onGet('/api/nfse/data').reply(config => {
  const { q = '', column = '', sort = '' } = config.params
  const queryLowered = q.toLowerCase()

  // @ts-ignore
  const dataAsc = data.sort((a, b) => (a[column] < b[column] ? -1 : 1))

  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()

  const filteredData = dataToFilter.filter(
    (item: DataGridRowType) =>
      item.id.toString().toLowerCase().includes(queryLowered) ||
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.post.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.age.toLowerCase().includes(queryLowered) ||
      item.salary.toString().toLowerCase().includes(queryLowered) ||
      item.city.toLowerCase().includes(queryLowered) ||
      item.start_date.toLowerCase().includes(queryLowered)
  )

  return [
    200,
    {
      allData: data,
      total: filteredData.length,
      data: filteredData
    }
  ]
})
