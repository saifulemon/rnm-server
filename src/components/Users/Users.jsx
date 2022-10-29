import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDeleteUser = id => {
    const proceed = window.confirm("Are you sure you want to delete this user?");
    if (proceed) {
        console.log('deleting this user', id);
        const url = `http://localhost:4000/user/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            if(data.deletedCount > 0) {
                console.log('deleted');
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            } 
        }
        )};
  } 
  return (
    <>
      <h1>Available Users: {users.length}</h1>
      <ul>
            {users.map(user => <li key={user._id}>{user.name}: {user.email}
            <Link to={`/update/${user._id}`}><button>Update</button></Link>
            <button onClick={() => handleDeleteUser(user._id)}>❌</button>
            </li>)}
      </ul>
    </>
  );
};

export default Users;
