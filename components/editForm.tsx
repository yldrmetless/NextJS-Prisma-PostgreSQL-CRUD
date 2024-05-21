"use client";

import { Employee } from "@prisma/client";
import React from "react";
import { useFormState } from "react-dom";
import { updateEmployee } from "@/lib/action";

const UpdateForm = ({ employee }: { employee: Employee }) => {
  const UpdateEmployeeWithId = updateEmployee.bind(null, employee.id);
  const [state, formAction] = useFormState(UpdateEmployeeWithId, null);
  return (
    <div>
      <form className="max-w-[700px] w-full" action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={employee.name}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={employee.email}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-200"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={employee.phone}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default UpdateForm;
