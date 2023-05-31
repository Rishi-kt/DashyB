import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Edit, Inject, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header categoery="Page" title="Customers" />
      <GridComponent
      
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true }}
      width="auto"
      >
        <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Sort, Selection, Filter, Edit ]} />
      </GridComponent>
    </div>
    </div>
  )
}

export default Customers
