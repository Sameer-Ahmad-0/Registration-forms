import { useState } from 'react'

import './App.css'

function App() {

  const [user,setUser] =useState({
    username:"",
    Email:"",
    Password:"",
    Phone:""

  })
  const [record,setRecord]= useState([])

  const handleInput=(e)=>{
    const name = e.target.name;
    const value =e.target.value;
    // console.log(name,value);

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newRecord = { ...user, id: new Date().getTime().toString() };
  //  console.log(record)
    setRecord((prevRecords) => [...prevRecords, newRecord]);
    setUser({
      username: "",
      Email: "",
      Password: "",
      Phone: "",
    });
    
  };
  // console.log(record)


  return (
    <>
    <div className='main'>
     <form action='' onSubmit={handleSubmit}>
      <div className='center'>
        <lable htmlfor="userName">FullName :</lable>

        <input name='username'
        value={user.username}
        onChange={handleInput}
        type="text" autoComplete='off' id='FullName' required />
      </div>
      <div className='center'>
        <lable htmlfor="userName">Email :</lable>
  
        <input name='Email'
        value={user.Email}
        onChange={handleInput}
        autoComplete='off' type="text" id='Email' required />
      </div>
      <div className='center'>
        <lable htmlfor="userName">Phone :</lable>

        <input name='Phone'
        value={user.Phone}
        onChange={handleInput}
        autoComplete='off' type="number" id='Phone' required />
      </div>
      <div className='center'>
        <lable htmlfor="userName">Password :</lable>

        <input name='Password'
        value={user.Password}
        onChange={handleInput}
        autoComplete='off' type="password" id='Password' required/>
      </div>
      <div className='center'>
        <lable htmlfor="username">Blood Group: </lable>
        <input type="text" 
        name='Blood Group'
        value={user.BloodGroup}
        onChange={handleInput}
        autoComplete='off'
        id='Blood Group'
        required
        />
      </div>
      <div className='center'>
        <lable htmlfor="username">Address: </lable>
        <input type="text" 
        name='Address'
        value={user.Address}
        onChange={handleInput}
        autoComplete='off'
        id='Address'
        required
        />
      </div>
      <button className='btn' type='submit'>Submit </button>
     </form>
      </div>
      <div className='gal'>
        {
          record.map((cruElem)=>{
           return(
            <div key={cruElem.id} className="user-data-container">
            <div className="user-data-label">Username:</div>
            <div className="user-data-value">{cruElem.username}</div>
      
            <div className="user-data-label">Email:</div>
            <div className="user-data-value">{cruElem.Email}</div>
      
            <div className="user-data-label">Phone:</div>
            <div className="user-data-value">{cruElem.Phone}</div>
      
            <div className="user-data-label">Password:</div>
            <div className="user-data-value">{cruElem.Password}</div>

            <div className="user-data-label">Blood Group:</div>
            <div className="user-data-value">{cruElem.BloodGroup}</div>

            <div className="user-data-label">Address:</div>
            <div className="user-data-value">{cruElem.Address}</div>
          </div>
           )


          })
        }
      </div>
    </>
  )
}

export default App
