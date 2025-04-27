'use client'
import Table from "../ui/table"
import {
    createColumnHelper,

  } from '@tanstack/react-table'






  type Category = {
    name: string
    description: string
    createdAt: string
    updatedAt: string
   
  }



  const defaultData: Category[] = [
    {
      name: 'tanner',
      description: 'linsley',
      createdAt: '2025/4/12',
      updatedAt: '2025/4/12',
    },
    {
        name: 'tanner',
        description: 'linsley',
        createdAt: '2025/4/12',
        updatedAt: '2025/4/12',
      },
      {
        name: 'tanner',
        description: 'linsley',
        createdAt: '2025/4/12',
        updatedAt: '2025/4/12',
      },
  ]

export const CategoryList = () =>{
    const columnHelper = createColumnHelper<Category>()

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    header: () => <span>Category Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.description, {
    id: 'description',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Description</span>,
    footer: info => info.column.id,
  }),
 
  columnHelper.accessor('createdAt', {
    header: () => <span>Created At</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('updatedAt', {
    header: 'Updated At',
    footer: info => info.column.id,
  }),
  
]

    return (
        <div>
            <Table columns={columns} data={defaultData}/>
        </div>
    )
}