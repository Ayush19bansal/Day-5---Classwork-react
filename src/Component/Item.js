import React from 'react';

export default function Item(props) {
  const handleAddHour = (index) => {
    const updatedList = props.list.map((ele, i) =>
      i === index ? { ...ele, hou: parseInt(ele.hou, 10) + 1 } : ele
    );
    props.onUpdateList(updatedList);
  };

  const handleMinusHour = (index) => {
    const updatedList = props.list.map((ele, i) =>
      i === index ? { ...ele, hou: parseInt(ele.hou, 10) - 1 } : ele
    );
    props.onUpdateList(updatedList);
  };

  return (
    <div className='p-10'>
      
      {props.list.map((ele, index) => (
        <div key={ele.sub + ele.hou} className='flex gap-2'>
          <p className='capitalize'>{ele.sub}</p>
          <p className='text-center w-32 '>{ele.hou} Hours</p>
          <button
            className='border-2 w-6 bg-rose-700 text-neutral-300'
            onClick={() => handleAddHour(index)}
          >
          +
          </button>
          <button
            className='border-2 w-6 bg-teal-500'
            onClick={() => handleMinusHour(index)}
          >
           -
          </button>
        </div>
      ))}
    </div>
  );
}