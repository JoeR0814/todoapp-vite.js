import React from 'react';

function Header() {
  return (
    <>
      <div id='main' className='p-6 flex items-center md-hidden'>
        <div className='bg-blue-500 text-orange-400 rounded-xl border-4 border-orange-400 p-6 text-center w-full md-hidden'>
          <h1 className='pl-4 flex justify-center m-3 items-center text-3xl font-bold  '>
            Create Your At Home To Do List!
          </h1>
          <p className='pl-4 flex justify-center m-3 items-center text-4lg font-bold  '>
            Your To-Do List: Select a Category Add A Tasks That Needs To Be Done
            For Around the House. You can log in at the bottom of the page.
            Enjoy!
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;

