import React from 'react';

function Header() {
  return (
    <>
      <div id='footer' className='p-6 flex items-center md-hidden'>
        <div className='bg-blue-500 text-orange-400 rounded-xl border-4 border-orange-400 p-6 text-center w-full md-hidden'>
          <p className='pl-4 flex justify-center m-3 items-center text-3xl font-bold  '>
            You can save your to do lists then log in on to your phone and see
            what you need to get done if you outside, at the grocery store or in
            your garage to get your stuff done!
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;

