import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${props=>(props.invalid?'red':'black')}
}

& input {
  display: block;
  width: 100%;
  border:1px solid ${props=>(props.invalid?'red':'#ccc')};
  // border:1px solid #ccc;
 
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

.& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}


// &.invalid input{
   
//   border-color: red;
  
// }

// &.invalid label{
//    color: red;
// }

`;

const CourseInput = props => {


  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsVald] = useState(true)
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsVald(true)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsVald(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };





  return (
    <form onSubmit={formSubmitHandler}>

      {/* using normal css */}
      {/* <div className={`form-control ${!isValid?'invalid':''}`}> */}
     
      {/* using styled comp (one approach) */}
      {/* <FormControl className={`${!isValid&&'invalid'}`}> */}
        
        {/* 2nd approach */}
      <FormControl invalid={!isValid}>
        <label >
          Course Goal
        </label>
        <input

          type="text" onChange={goalInputChangeHandler}
        />
      </FormControl>
      {/* </FormControl> */}
      {/* </div> */}
      <Button type="submit">
        Add Goal
        </Button>
    </form>
  );
};

export default CourseInput;
