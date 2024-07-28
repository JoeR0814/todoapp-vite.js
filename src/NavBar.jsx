import React, { useState } from 'react';

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='position-sticky bg-orange-600 justify-center items-center m-4  border-solid border-2 border-black overflow-hidden'>
        <div className='flex flex-row justify-center p-2 m-2  flex-wrap'>
          <a
            onClick={handleNav}
            href='#main'
            className='bg-blue-500 flex flex-col justify-center items-center m-2 p-2 border-solid border-2 border-black sm:w-auto text-center'
          >
            Grocery List
          </a>
          <a
            href='#house'
            className='bg-blue-500 flex flex-col justify-center items-center m-2 p-2 border-solid border-2 border-black sm:w-auto text-center'
          >
            House Chores
          </a>
          <a
            href='#outside'
            className='bg-blue-500 flex flex-col justify-center items-center m-2 p-2 border-solid border-2 border-black sm:w-auto text-center'
          >
            Outside Chores
          </a>
          <a
            href='#garage'
            className='bg-blue-500 flex flex-col justify-center items-center m-2 p-2 border-solid border-2 border-black sm:w-auto text-center'
          >
            Garage/Cars
          </a>
          <a
            href='#other'
            className='bg-blue-500 flex flex-col justify-center items-center m-2 p-2 border-solid border-2 border-black w-full  sm:w-auto text-center'
          >
            Other
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;

