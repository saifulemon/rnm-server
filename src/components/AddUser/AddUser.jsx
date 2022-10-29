import React from "react";

const AddUser = () => {
  const handleAddUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const user = { name, email };

    // send data to server
    fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("User added successfully"); 
        e.target.reset();
      });
  };
  return (
    <div>
      <h2>Please Add a new User</h2>
      <form onSubmit={handleAddUser}>
        <div className="container">
          <input type="text" placeholder="Name" name="name" required />
          <br />
          <br />
          <input type="email" placeholder="Email" name="email" required />
          <br />
          <br />
          <input type="submit" value="Add User" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
