import React,{useState} from 'react';
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'
import styles from './AddUsers.module.css'


const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState();
  const [enteredAge, setEnteredAge] = useState();

const addUserHandler = (event) =>{
  event.preventDefault();
  console.log(enteredUsername,enteredAge)  
}
const usernameChangeHandler = (event) =>{
  setEnteredUsername(event.target.value);
}
const ageChangeHandler = (event) =>{
    setEnteredAge(event.target.value);


}

  return (
    <Card className= {styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange = {usernameChangeHandler}></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange = {ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
  

}

export default AddUsers