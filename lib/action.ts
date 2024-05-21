"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const EmployeeSchema = z.object({
  name: z.string().min(6),
  email: z.string().min(6),
  phone: z.string().min(11),
});

export const saveEmployee = async (prevState: any, formData: FormData) => {
  const validateFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      Error: validateFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.employee.create({
      data: {
        name: validateFields.data.name,
        email: validateFields.data.email,
        phone: validateFields.data.phone,
      },
    });
  } catch (err) {
    return { message: "Failed to create new employee" };
  }

  revalidatePath("/employee");
  redirect("/employee");
};

export const getEmployeeList = async (query: String) => {
  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return employees;
  } catch (err) {
    throw new Error("Failed to fetch employees data");
  }
};

export const getEmployeeById = async (id: string) => {
  try {
    const employee = await prisma.employee.findUnique({
     where: {id}
    });
    return employee;
  } catch (err) {
    throw new Error("Failed to fetch employees data");
  }
};


export const updateEmployee = async(
    id: string,
    prevState: any,
    formData: FormData
) => {
    const validatedFields = EmployeeSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    };

    try{
        await prisma.employee.update({
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
            },
            where: {id}
        })
    }
    catch(err){
        return {message: "Failed to update employee"}
    }

    revalidatePath("/employee");
    redirect("/employee")
}

export const deleteEmployee = async(id: string) => {
    try{
        await prisma.employee.delete({
            where: {id}
        })
    }   
    catch(err){
        return {message: "Failed to delete employee"}
    }
}