import React from 'react';

class InviteForm extends React.Component {
  
  state = {
  }

 //This func is called when you click the button
 // has been passed in from from the parent via props
  nextCicked = e => {
    e.preventDefault();
    this.props.showConfirmScreen(this.state.name, this.state.dietaryRequirements);
  }

  render() {

  return (
  <div>
  <p>{this.props.errorMessage}</p>

  {/* Form */}
   <form
    className="form">    

  {/* Enter Name Textfield */}
      <label>
      Name:
        <br />
        <input
         type="text" name="name"
         className="textfield"
         onChange={e => this.setState({ name: e.target.value})}/>
      </label>


  {/* Select Dietary Requirements Dropdown */}
      <br /><br />
      <label>
      Dietary Requirements:
          <br />
          <select 
          className="textfield"
          onChange={e => this.setState({ dietaryRequirements: e.target.value})}>
              <option value="" disabled selected>Select</option>
              <option value="none">I'll eat anything!</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="pescatarian">Pescatarian</option>
          </select>
      <br /><br />
      </label>

          <button 
          className="mainbtn"
          onClick={e => this.nextCicked(e)}>Next</button>
     </form>
    </div>

    );
  }
  }

export default InviteForm;