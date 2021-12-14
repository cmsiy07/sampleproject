import React from 'react';
import Card from '../UI/Card.js'

import styles from './AddUsers.module.css'

const AddUsers = (props) => {

const addUserHandler = (event) =>{
  event.preventDefault();
  console.log("add user")
}

  return (
    <Card className= {styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
  

}

export default AddUsers