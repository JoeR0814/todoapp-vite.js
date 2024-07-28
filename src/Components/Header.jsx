import React from 'react';

function Header() {
  return (
    <>
      <div id='main' className='p-6 flex items-center md-hidden'>
        <div className='bg-blue-500 text-orange-400 rounded-xl border-4 border-orange-400 p-6 text-center w-full md-hidden'>
          <h1 className='pl-4 flex justify-center m-3 items-center text-3xl font-bold  '>
            Your Too Do List, Pick And Click A Category To Add things That Need
            To Be Done Around The House House
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;

