export default [
  { heading: 'ADMIN & CONTROL' },
  {
    title: 'Master Data',
    icon: { icon: 'tabler-database' },
    children: [
      {
        title: 'Organization Setting',
        children: [
          { title: 'Company', to: 'master-organization-setting-company' },
          { title: 'Organization Data', to: 'master-organization-setting-organization-data' },
        ],
      },
      {
        title: 'Customer',
        to: 'master-customer',
      },
      {
        title: 'Product',
        to: 'master-product',
      },
      {
        title: 'Order',
        to: 'master-order',
      },
      {
        title: 'Users',
        to: 'master-users',
      },
      {
        title: 'Vehicle Setting',
        children: [
          { title: 'Vehicle Type', to: 'master-vehicle-vehicle-type' },
          { title: 'Vehicle Data', to: 'master-vehicle-vehicle-data' },
        ],
      },
      
      
      
    ],
  },
]
