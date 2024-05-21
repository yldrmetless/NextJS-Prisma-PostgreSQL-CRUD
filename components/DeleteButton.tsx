import { deleteEmployee } from '@/lib/action'
import React from 'react'

const Delete = ({id}: {id: string}) => {
  const DeleteEmployeeWithId = deleteEmployee.bind(null, id)
  return (
    <form action={DeleteEmployeeWithId}>
        <button className='btn btn-error'>
            Delete
        </button>
    </form>
  )
}

export default Delete