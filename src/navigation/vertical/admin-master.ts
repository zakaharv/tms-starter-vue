export default [
  { heading: 'ADMIN & CONTROL' },
  {
    title: 'Master Data',
    icon: { icon: 'tabler-database' },
    children: [
      {
        title: 'Organization Setting',
        children: [
          { title: 'Company', to: 'master-organization-setting-company', icon: { icon: 'tabler-corner-down-right' }, },
          { title: 'Organization Data', to: 'master-organization-setting-organization-data', icon: { icon: 'tabler-corner-down-right' }, },
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
          { title: 'Vehicle Type', to: 'master-vehicle-vehicle-type', icon: { icon: 'tabler-corner-down-right' }, },
          { title: 'Vehicle Data', to: 'master-vehicle-vehicle-data', icon: { icon: 'tabler-corner-down-right' }, },
        ],
      },
      
      
      
    ],
  },
]
