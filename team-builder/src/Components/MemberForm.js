import React, { useState } from "react";

const MemberForm = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log(event.target);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: ""});
  }
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input 
            name="name" 
            id="name" 
            type="text" 
            placeholder="Name" 
            onChange={changeHandler}
            value={member.name}/>
        <label htmlFor="email">Email</label>
        <input 
            name="email" 
            id="email" 
            type="email" 
            placeholder="Email" 
            onChange={changeHandler}
            value={member.email}/>
        <label htmlFor="role">Role</label>
        <input 
            name="role" 
            id="role" 
            type="text" 
            placeholder="Role" 
            onChange={changeHandler}
            value={member.role}/>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;