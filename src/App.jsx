// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css';
// import UseEffect from './UseEffect';
import Users from './Users';

const App = () => {
  
  
  return (
    // <UseEffect />
    <Users />
  )
}
export default App;


// const [selectedOption, setSelectedOption] = useState({
  //   option: 'option1', 
  //   Name: ''
  // });

	// const  handleDropdownChange = (e) => {
	// 	const {name, value} = e.target;
  //       /* 
  //       e.target is an object having name and value. eg: when you type a character 
  //       in name input box then onchage even handle fired, and
  //       e.target = {containg[]}
  //       */
  //   setSelectedOption({
  //     ...selectedOption, 
  //     [name]:value
  //   })

// return (
  // <form>
  // 	<label>
  // 		Select an option:
  // 		<select  value={selectedOption.drop} name="option" onChange={handleDropdownChange}>
  // 			<option  value="option1">Option 1</option>
  // 			<option  value="option2">Option 2</option>
  // 			<option  value="option3">Option 3</option>
  // 		</select>
  // 	</label>
  // 	<p>Selected option: {selectedOption.option}</p>

  //   <input 
  //   type="text" 
  //   name="Name" 
  //   onChange={handleDropdownChange} 
  //   value={selectedOption.Name} 
  //   placeholder="Enter your name"
  //   required
  //   />
  //   <button>Submit</button>
  // </form>
