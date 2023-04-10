import React from 'react';



const AddStudent = ()=>{
    const [name,setName] = React.useState('');
    const [userName,setUsername] = React.useState('');
    const [phoneNumber,setphoneNumber] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [userType,setUserType] = React.useState('');

    const addstudent = async ()=>{
        // console.warn(name,userName,phoneNumber,email,userType);
        let result = await fetch("http://localhost:8080/add",{
            method : "post",
            body :JSON.stringify( {name,userName,phoneNumber,email,userType}),
            headers : {
                "Content-type" : "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }
    return(
        <div className='student'>
            <h1 align="left">Staff Managment</h1>
            
            <label className='inputLabel'>Staff Name</label>
            <input type='text' placeholder='Enter Staff Name' className='inputBox' value={name}  onChange={(e)=>{setName(e.target.value)}}/>

            <label className='inputLabel'>Staff ID</label>
            <input type='text' placeholder='Enter Staff Username'className='inputBox' value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>

            <label className='inputLabel'>Phone</label>
            <input type='number' placeholder='Enter Staff Phone Number' className='inputBox' value={phoneNumber}  onChange={(e)=>{setphoneNumber(e.target.value)}}/>

            <label className='inputLabel'>Staff Email</label>
            <input type='text' placeholder='Enter Staff Email' className='inputBox' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>

            <label className='inputLabel'>Designation</label>
            <input type='text' placeholder='Enter User Type' className='inputBox' value={userType}  onChange={(e)=>{setUserType(e.target.value)}}/>

            <button onClick={addstudent}  className='addButton'>Add Staff</button>
        </div>
    )
}
export default AddStudent;
