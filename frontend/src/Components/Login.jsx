import React, { useState } from 'react';

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      // Handle registration logic here
      console.log('Registering:', formData);
    } else {
      // Handle login logic here
      console.log('Logging in:', formData);
    }
  };

  return (
    <div className='flex justify-center items-center bg-blue-400'>
      <form
        onSubmit={handleSubmit}
        className='bg-orange-400 p-6 rounded-lg shadow-md w-full max-w-xs'
      >
        <h2 className='text-xl text-blue-600 font-bold mb-4 text-center'>
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <div className='mb-4'>
          <label htmlFor='username' className='block text-blue-700 mb-2'>
            Username
          </label>
          <input
            className='border-solid border-2 border-orange-300 w-full p-2 rounded-lg'
            placeholder='Enter username'
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-blue-700 mb-2'>
            Password
          </label>
          <input
            className='border-solid border-2 border-orange-300 w-full p-2 rounded-lg'
            type='password'
            placeholder='Enter password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {isRegister && (
          <div className='mb-4'>
            <label
              htmlFor='confirmPassword'
              className='block text-blue-700 mb-2'
            >
              Confirm Password
            </label>
            <input
              className='border-solid border-2 border-orange-300 w-full p-2 rounded-lg'
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        )}
        <button
          className='bg-blue-600 text-orange-500 w-full py-2 rounded-lg mb-4'
          type='submit'
        >
          {isRegister ? 'Register' : 'Login'}
        </button>
        <button
          className='w-full text-orange-700 py-2 rounded-lg border bg-blue-400 border-orange-600'
          onClick={() => setIsRegister(!isRegister)}
          type='button'
        >
          {isRegister ? 'Switch to Login' : 'Switch to Register'}
        </button>
      </form>
    </div>
  );
}

export default Login;

