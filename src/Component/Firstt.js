import React, { useState } from "react";

export default function First(props) {
    const [subject, setsubject] = useState('')
    const [hour,sethour] = useState('')
     const ChangeSubject = (e) =>{
        setsubject(e.target.value)
        // console.log(subject);
    }
    const ChangeHour = (e) =>{
        sethour(e.target.value)
        // console.log(hour);
    }
    const ClickAdd = (event) => {
        
        props.items(subject,hour)
        setsubject('')
        sethour('')
    }
    const Check = (event)=>{
      event.preventDefault();
      if(subject === '' || hour === ''){
        alert('All input are Required')
      }
      else(
        ClickAdd()
      )
    }
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h2 className="text-2xl font-semibold">Geekster Education Planner</h2>
        <form action="" className="flex gap-2">
        <input type="text" className="border-2 focus:outline-none pl-1" onChange={ChangeSubject} value={subject}/>
        <input
          type="number"
          className="border-2 w-16 focus:outline-none"
          min={1} onChange={ChangeHour} value={hour}
        />
        <button className="bg-[#3B82F6] text-[#fff] w-11 rounded" onClick={Check}>Add</button>
        </form>
    </div>
  );
}