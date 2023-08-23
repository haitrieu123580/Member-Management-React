import React, { useState } from 'react';

const UserForm = ({ onSave, initialValues, hideForm }) => {
  const [formData, setFormData] = useState(initialValues || {
    gender: 'false'
  });
  const hasInitialValues = !!initialValues;

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === 'checkbox' ? e.target.checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email) {
      alert(`Missing User Info`);
    } else {
      formData.gender = formData.gender === 'true' ? true : false
      formData.age = parseInt(formData.age)
      onSave(formData);
      setFormData({});
      hideForm();
    }
  };

  return (
    <>
      <div
        className="min-w-screen h-screen animated fadeIn faster fixed left-1/2 top-1/2 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  -translate-y-1/2 -translate-x-1/2"
        id="modal-id">
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
                  id='username'
                  placeholder={formData.username || ''}
                  onChange={handleInputChange}
                />
              </div>
              {!hasInitialValues && (<>
                <div class="flex flex-col">
                <label for="password" class="">Password</label>
                <input
                  className="text-black"
                  type="password"
                  name="password"
                  id='password'
                  placeholder={formData.password || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div class="flex flex-col">
                <label for="confirmPassword" class="">Confirm Password</label>
                <input
                  className="text-black"
                  type="password"
                  name="confirmPassword"
                  id='confirmPassword'
                  placeholder={formData.confirmPassword || ''}
                  onChange={handleInputChange}
                />
              </div>
              </>)}
              
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
                <label for="name" class="">Full name</label>
                <input
                  className="text-black"
                  type="text"
                  name="name"
                  id='name'
                  placeholder={formData.name || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div class="flex flex-col">
                <label for="age" class="">Age</label>
                <input
                  className="text-black"
                  type="number"
                  name="age"
                  id='age'
                  min={18}
                  max={100}
                  placeholder={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="gender">Gender</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="false" // Use 'false' as the value
                    checked={formData.gender === 'false' || formData.gender === false} // Check against the string 'false'
                    onChange={handleInputChange}
                  />
                  <label htmlFor="male" className="ml-2">
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="true" // Use 'true' as the value
                    checked={formData.gender === 'true' || formData.gender === true} // Check against the string 'true'
                    onChange={handleInputChange}
                  />
                  <label htmlFor="female" className="ml-2">
                    Female
                  </label>
                </div>
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
