import React, { useEffect } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { fetchVendors } from '../../redux/services/vendorService';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';

const Users = () => {
  const vendors = useSelector((state) => state?.vendors?.vendors?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  return (
    <div className="shadow-sm dark:border-gray-700 min-h-screen p-4">
      <div className="flex mb-6 justify-between items-center">
        <h2 className="text-[24px] font-bold text-gray-900 dark:text-gray-100">
          Vendors
        </h2>
      </div>

      {/* Scrollable table container */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Company Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Contact Number
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Services
              </th>
              <th className="relative px-6 py-3 text-center">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {vendors?.map((vendor) => (
              <tr key={vendor.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-purple-100 dark:bg-purple-700 rounded-full flex justify-center items-center">
                      <BsPersonFill className="text-purple-800 dark:text-purple-300" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {vendor.companyName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center">
                  {vendor.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center">
                  {vendor.contactNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center">
                  {vendor.services.join(', ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium relative">
                  <div className="flex justify-center gap-4">
                    <button
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                      aria-label="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                      aria-label="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
                      aria-label="Delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
