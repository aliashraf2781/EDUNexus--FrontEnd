import React from 'react';

const FormActions = () => {
  return (
    <div className="flex justify-between mt-6">
      <button className="bg-gray-200 outline-none text-gray-700 px-6 py-2 rounded-md hover:cursor-pointer">
        Cancel
      </button>
      <button className="bg-[#FF6636] text-[#ffffff] outline-none px-6 py-2 rounded-md hover:cursor-pointer">
        Save
      </button>
    </div>
  );
};

export default FormActions;
