import Link from "next/link";
import React from "react";
import { getEmployeeList } from "@/lib/action";
import {formatDate} from '@/lib/utils'
import  Delete from '../../components/DeleteButton'

const Employee = async ({ query }: { query: string }) => {
  const employees = await getEmployeeList(query);
  return (
    <div className="w-full py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">CRUD</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href={"/employee/create"} className="btn btn-primary">
            Create
          </Link>
        </div>

        <table className="table table-zebra mt-6 w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((rs, index) => (
              <tr key={rs.id}>
                <th>{index + 1}</th>
                <td>{rs.name}</td>
                <td>{rs.email}</td>
                <td>{rs.phone}</td>
                <td>{formatDate(rs.createdAt.toString())}</td>
                <td className="flex justify-center gap-1 py-3">
                    <Link href={`/employee/edit/${rs.id}`} className="btn btn-info">
                        Edit
                    </Link>
                    <Delete id = {rs.id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
