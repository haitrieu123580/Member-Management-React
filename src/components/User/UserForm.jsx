import React, { useState } from 'react';

const UserForm = ({ onSave, initialValues, hideForm }) => {
  const [formData, setFormData] = useState(initialValues || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if((formData.username == null ) || (formData.email == null) || (formData.gender ==null)){
      alert(`Missing User Info`);
    }
    else{
    onSave(formData);
    setFormData({});
    hideForm()
    }

  };

  return (
    <>
      <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
        <div className="absolute opacity-80 inset-0 z-0"></div>
        <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-slate-500">
          <form onSubmit={handleSubmit} className='flex-col justify-center'>
            <div className="">
              <h1>User Form</h1>
              <div class="flex flex-col">
                <label for="name" class="">Name</label>
                <input
                  className="text-black"
                  type="text"
                  name="username"
                  id='name'
                  placeholder={formData.username || ''}
                  onChange={handleInputChange}
                />
              </div>

              <div class="flex flex-col">
                <label for="gender" class="">Email</label>
                <input
                  className="text-black"
                  type="email"
                  name="email"
                  id='email'
                  placeholder={formData.email || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div class="flex flex-col">
                <label for="email" class="">Email</label>
                <select
                  className="text-black"
                  name="gender" // This name should match the property name in formData
                  value={formData.gender || ''}
                  onChange={handleInputChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

              </div>
            </div>
            <div className="p-3 mt-2 text-center space-x-4 md:block">
              <button
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                type="submit"
              >
                Submit
              </button>
              <button
                className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                type="button"
                onClick={() => {
                  setFormData({}); 
                  hideForm();
              }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
