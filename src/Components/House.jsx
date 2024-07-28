import React, { useState } from 'react';

function House() {
  const [items, setItems] = useState(['', '', '']);
  const [isEditing, setIsEditing] = useState(items.map(() => true)); // Track editing state for each item

  const handleChange = (index, event) => {
    const newItems = [...items];
    newItems[index] = event.target.value;
    setItems(newItems);

    // Add a new item if the user is typing in the last input field
    if (index === items.length - 1 && event.target.value.trim() !== '') {
      setItems([...newItems, '']);
      setIsEditing([...isEditing, true]); // Add editing state for the new item
    }
  };

  const handleSave = (index) => {
    const newIsEditing = [...isEditing];
    newIsEditing[index] = false;
    setIsEditing(newIsEditing);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    const newIsEditing = isEditing.filter((_, i) => i !== index);
    setItems(newItems);
    setIsEditing(newIsEditing);
  };

  return (
    <>
      <div>
        <div id='house' className='flex justify-center'>
          <form
            id='todo-form'
            className='flex flex-col justify-center items-center p-2 border-solid border-2 border-black w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3'
          >
            <h1 className='text-3xl font-bold mb-2'>House Chores</h1>
            {items.map((item, index) => (
              <div key={index} className='flex items-center mb-2'>
                <input
                  type='text'
                  placeholder='Add new todo'
                  className='p-1 border border-gray-300 rounded'
                  value={item}
                  onChange={(event) => handleChange(index, event)}
                  disabled={!isEditing[index]}
                />
                {isEditing[index] ? (
                  <button
                    type='button'
                    className='ml-2 p-1 bg-blue-500 text-white rounded'
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type='button'
                    className='ml-2 p-1 bg-gray-500 text-white rounded'
                    onClick={() => {
                      const newIsEditing = [...isEditing];
                      newIsEditing[index] = true;
                      setIsEditing(newIsEditing);
                    }}
                  >
                    Edit
                  </button>
                )}
                <button
                  type='button'
                  className='ml-2 p-1 bg-red-500 text-white rounded'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

export default House;

