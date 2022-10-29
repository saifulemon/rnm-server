import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUsers] = useState({});
  useEffect(() => {
    const url = `http://localhost:4000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUpdateUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const updatedUser = { name, email };

    // send data to server
    const url = `http://localhost:4000/user/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("User Update successfully"); 
        e.target.reset();
      });
  };
  return (
    <div>
      <h3>Update User: {user.name}</h3>
      <form onSubmit={handleUpdateUser}>
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

export default UpdateUser;
