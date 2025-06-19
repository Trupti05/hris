import React from "react";
import { FaSearch, FaRegFilePdf, FaUserEdit, FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";


const employees = [
  {
    name: "Saira Khan",
    role: "Officer",
    department: "Human Resource",
    empCode: "10000223",
    email: "SairaKhan@hrworld.org.pk",
    authority: "Normal",
    image: "Ellipse",
  },
  {
    name: "Hassan Khan",
    role: "Officer",
    department: "Human Resource",
    empCode: "10076523",
    email: "Hassankhan@hrworld.org.pk",
    authority: "Normal",
    image: "Ellipse1",
  },
  {
    name: "Nadeem Ur Rahman",
    role: "Manager",
    department: "Human Resource",
    empCode: "15045223",
    email: "Nadeem@hrworld.org.pk",
    authority: "HOD",
    image: "Ellipse2",
  },
  {
    name: "Mithali Ade",
    role: "Officer",
    department: "Human Resource",
    empCode: "10089073",
    email: "Mithaliade@hrworld.org.pk",
    authority: "Normal",
    image: "Ellipse3",
  },
];


function EmployeeInfo() {
  return (
    <div>
       <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <h1 className="font-bold text-xl">Employee Info</h1>

      
      <div className="bg-white p-4 rounded-lg flex flex-wrap mt-5 gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          <select className="w-full sm:w-60 p-2 text-gray-600 border-2 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Department</option>
            <option value="hr">Officer</option>
            <option value="it">Manager</option>
            <option value="finance">Jr.Officer</option>
          </select>

          <select className="w-full sm:w-60 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Employee</option>
            <option value="paid leave">Saira Khan</option>
            <option value="unpaid leave">Hasaan Khan</option>
            <option value="voluntary leave">Nadeem Ur Rahman</option>
            <option value="voluntary leave">Mithali Ade</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <button className="bg-blue-400 text-white px-4 py-2 rounded w-full sm:w-auto">
            Show
          </button>
          <Link to="/employeemanagement/employee_profile">
          <button className="bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto">
            Add New
          </button>
          </Link>
          <button className="bg-red-700 text-white px-4 py-2 rounded w-full sm:w-auto">
            Import
          </button>
        </div>
      </div>

    
      <div className="overflow-x-auto bg-white mt-4 rounded">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-sm md:text-base">
              <th className="p-3 text-left">Department</th>
              <th className="p-3">Emp Code</th>
              <th className="p-3">Email</th>
              <th className="p-3">Authority</th>
              <th className="p-3">View</th>
              <th className="p-3">PDF</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index} className="border-gray-300 hover:bg-[#DBF2FF]">
                <td className="p-3 flex items-center border-r border-gray-500">
                  <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-semibold">{emp.name}</p>
                    <p className="text-sm text-gray-500">{emp.role}</p>
                    <p className="text-sm text-blue-600">{emp.department}</p>
                  </div>
                </td>
                <td className="p-3 text-center border-r border-gray-500">
                  {emp.empCode}
                </td>
                <td className="p-3 text-center border-r border-gray-500">
                  {emp.email}
                </td>
                <td className="p-3 text-center border-r border-gray-500">
                  {emp.authority}
                </td>
                <td className="p-3 text-center border-r border-gray-500 text-gray-600 cursor-pointer">
                  <FaSearch className="mx-auto" />
                </td>
                <td className="p-3 text-center border-r border-gray-500 text-gray-600 cursor-pointer">
                  <FaRegFilePdf className="mx-auto" />
                </td>
                <td className="p-3 text-center border-r border-gray-500 text-blue-600 cursor-pointer">
                  <Link to="/employeemanagement/employee_profile">
                    <FaUserEdit className="mx-auto" />
                  </Link>
                </td>
                <td className="p-3 text-center border-r border-gray-500 text-red-600 cursor-pointer">
                  <FaTrashAlt className="mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default EmployeeInfo;





 



