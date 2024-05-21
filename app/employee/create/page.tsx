"use client";

import React from "react";
import { useFormState } from "react-dom";
import { saveEmployee } from "@/lib/action";

const CreateEmployeePage = () => {
  const [state, formAction] = useFormState(saveEmployee, null);

  return (
    <div className="w-full mt-5 flex flex-col items-center gap-y-8 py-12">
      <h1 className="text-2xl text-center mb-2 font-bold">Add New Employee</h1>
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
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
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
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
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
            />
             <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
