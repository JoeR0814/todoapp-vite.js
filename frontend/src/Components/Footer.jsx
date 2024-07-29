import React from 'react';

function Header() {
  return (
    <>
      <div id='footer' className='p-6 flex items-center md-hidden'>
        <div className='bg-blue-500 text-orange-400 rounded-xl border-4 border-orange-400 p-6 text-center w-full md-hidden'>
          <p className='pl-4 flex justify-center m-3 items-center text-3xl font-bold  '>
            With our Web app, you can save your to-do lists and access them from
            your phone, allowing you to stay organized no matter where you
            are—whether you're at the grocery store, in your garage, or on the
            go!
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;

