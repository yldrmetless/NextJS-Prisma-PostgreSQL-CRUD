import UpdateForm from '@/components/editForm'
import { getEmployeeById } from '@/lib/action';
import { notFound } from 'next/navigation';
import React from 'react'

const UpdateEmployeePage = async({params} : {params: {id: string}}) => {
  const id = params.id;
  const employee = await getEmployeeById(id)
//   console.log(id);

if(!employee){
    notFound()
}
    
  return (
    <div className='w-full flex flex-col items-center gap-y-6 py-12 mx-auto mt-3'>
        <h1 className='text-2xl text-center font-bold'>
            Update Employee
        </h1>
        <UpdateForm employee = {employee}/>
    </div>
  )
}

export default UpdateEmployeePage