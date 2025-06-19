import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultimageicon from "../Image/defaultimageicon.png"

const EmployeeProfile = () => {
  const [employee, setEmployee] = useState({
    name: "",
    gender: "",
    departmentName: "",
    dateOfBirth: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
    profileImage: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEmployee({ ...employee, profileImage: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    Object.keys(employee).forEach((key) => {
      formData.append(key, employee[key]);
    });
    
    try {
      const response = await axios.post(
        "http://localhost:8000/website/employeeInfoRoute/employeeinfo",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (response.data.status === 1) {
        toast.success("Department added successfully!");
        setEmployee(
          {
            name: "",
            gender: "",
            departmentName: "",
            dateOfBirth: "",
            streetAddress: "",
            city: "",
            postalCode: "",
            country: "",
            profileImage: null,
          }
        )


      } else {
        alert("Error saving employee details.");
      }
    } catch (error) {
      console.error("Error submitting employee data:", error);
    }
  };

  return (
    <div className="bg-[#DBF2FF] p-6 rounded-lg min-h-screen">
      <h1 className="font-bold text-xl">Employee Info</h1>

      {/* Filter */}
      <div className="bg-white p-4 rounded-lg flex flex-wrap gap-4 items-center justify-between mt-3">
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <select className="w-full md:w-60 p-2 text-gray-600 border-2 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Department</option>
            <option value="hr">Officer</option>
            <option value="it">Jn. Officer</option>
            <option value="finance">Manager</option>
          </select>

          <select className="w-full md:w-60 p-2 border-2 text-gray-600 border-gray-600 outline-gray-400 rounded-md">
            <option>Select Employee</option>
            <option value="paid leave">Saira Khan</option>
            <option value="unpaid leave">Hassan Khan</option>
            <option value="voluntary leave">Nadeem Ur Rahman</option>
            <option value="voluntary leave">Mithali Ade</option>
          </select>
        </div>

        <div className="flex gap-3 w-full md:w-auto justify-center md:justify-start">
          <button className="bg-blue-400 text-white px-4 py-2 rounded">
            Show
          </button>
           <Link to="/employeemanagement/employee_profile">
          <button className="bg-green-700 text-white px-4 py-2 rounded">
            Add New
          </button>
          </Link>
          <button className="bg-red-700 text-white px-4 py-2 rounded">
            Import
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-3">
          <div className="flex flex-col md:flex-row mt-4 gap-4">
            {/* Profile Image Section */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
              <img 
                src={previewImage || defaultimageicon} 
                alt="Profile" 
                className="rounded-full mx-auto w-32 h-32" 
              />
              <h3 className="font-semibold mt-2">{employee.name}</h3>
              <input type="file" className="mt-4 border p-2 w-full rounded-md" onChange={handleImageChange} />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full mt-2 rounded">
                Update
              </button>
            </div>
            {/* Employee Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
              {/* Navigation Tabs */}
              <div className="flex overflow-x-auto border-b pb-2 mb-4">
                <Link 
                to ="/employeemanagement/employee_profile"
                className="mr-4 font-semibold border-b-2 border-gray-600">
                  Employee Info
                </Link>
                <Link to="/employeemanagement/employee_contact">
                  <button className="text-blue-500 px-4 pb-2">Contact Info</button>
                </Link>
                <Link 
                to="/employeemanagement/employeement_info" 
                className="text-blue-500 px-4 pb-2">Employment Info</Link>
                <Link 
                to="/employeemanagement/payroll" 
                className="text-blue-500 px-4 pb-2">Payroll</Link>
                <Link 
                to="/employeemanagement/security" 
                className="text-blue-500 px-4 pb-2">Security</Link>
                <Link 
                to="/employeemanagement/file" 
                className="text-blue-500 px-4 pb-2">Files</Link>
              </div>
              {/* Employee Info Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Gender</label>
                  <div className="flex space-x-4 mt-2">
                    {["Male", "Female", "None"].map((gender) => (
                      <label key={gender}>
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={employee.gender === gender}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Department</label>
                  <input
                    type="text"
                    name="departmentName"
                    value={employee.departmentName}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Date of Birth</label>
                  <div className="flex items-center border p-2 rounded-md">
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={employee.dateOfBirth}
                      onChange={handleChange}
                      className="w-full outline-none"
                    />
                    <FaCalendarAlt className="text-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={employee.streetAddress}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={employee.city}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={employee.postalCode}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={employee.country}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
       <ToastContainer />
    </div>
  );
};
export default EmployeeProfile;