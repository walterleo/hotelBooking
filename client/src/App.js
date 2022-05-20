import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        fname: "",
        lname: "",
        address: "",
        zip: "",
        city: "",
        state: "",
        email: "",
        phone: "",
        checkindate: "",
        checkoutdate: "",
        checkinTime: "",
        checkoutTime: "",
        numberAdults: "",
        numberChildren: "",
        room: "",
        room1Type: "",
        room2Type: "",
        instructions: "",
      },
      success : null,
      error: null
    };
  }

  onChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmit = async (e) => {
    
    try{
      e.preventDefault();
      console.log(this.state.formData);
      const res = await axios.post("/hotelbooking", this.state.formData);
      console.log(res.data);
    }catch(error){
      console.log(error.response.data);
    }
   
    // this.onChange(this.state.formData);

     
  };

  render() {
    return (
      <div className="testbox">
        <form onSubmit={this.onSubmit}>
          <div className="banner">
            <h1>Hotel Reservation Form</h1>
          </div>
          <br />
          <fieldset>
            <legend>Reservation Details</legend>
            <div className="columns">
              <div className="item">
                <label htmlFor="fname">
                  First Name<span>*</span>
                </label>
                <input id="fname" type="text" name="fname" onChange={this.onChange} />
              </div>
              <div className="item">
                <label htmlFor="lname">
                  {" "}
                  Last Name<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" onChange={this.onChange}/>
              </div>
              <div className="item">
                <label htmlFor="address">
                  Address<span>*</span>
                </label>
                <input id="address" type="text" name="address" onChange={this.onChange} />
              </div>
              <div className="item">
                <label htmlFor="zip">
                  Zip Code<span>*</span>
                </label>
                <input id="zip" type="text" name="zip" onChange={this.onChange} required />
              </div>
              <div className="item">
                <label htmlFor="city">
                  City<span>*</span>
                </label>
                <input id="city" type="text" name="city" onChange={this.onChange}/>
              </div>
              <div className="item">
                <label htmlFor="state">
                  State<span>*</span>
                </label>
                <input id="state" type="text" name="state" onChange={this.onChange} />
              </div>
              <div className="item">
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <input id="email" type="text" name="email" onChange={this.onChange} />
              </div>
              <div className="item">
                <label htmlFor="phone">
                  Phone<span>*</span>
                </label>
                <input id="phone" type="tel" name="phone" onChange={this.onChange}/>
              </div>
            </div>
          </fieldset>
          <br />
          <fieldset>
            <legend>Dates</legend>
            <div className="columns">
              <div className="item">
                <label htmlFor="checkindate">
                  Check-in Date <span>*</span>
                </label>
                <input id="checkindate" type="date" name="checkindate" onChange={this.onChange}/>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="item">
                <label htmlFor="checkoutdate">
                  Check-out Date <span>*</span>
                </label>
                <input id="checkoutdate" type="date" name="checkoutdate" onChange={this.onChange}/>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="item">
                <p>Check-in Time </p>
                <select name="checkinTime" onChange={this.onChange}>
                  <option value="" disabled>
                    Select time
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div className="item">
                <p>Check-out Time </p>
                <select name="checkoutTime" onChange={this.onChange}>
                  <option value="4" disabled>
                    Select time
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div className="item">
                <p>How many adults are coming?</p>
                <select name="numberAdults" onChange={this.onChange}>
                  <option value="8" disabled>
                    Number of adults
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="item">
                <p>How many children are coming?</p>
                <select name="numberChildren" onChange={this.onChange}>
                  <option value="14" disabled>
                    Number of children
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="item" style={{ width: "100%" }}>
                <label htmlFor="room">Number of rooms</label>
                <input id="room" type="number" name="room" onChange={this.onChange} />
              </div>
              <div className="item">
                <p>Room 1 type</p>
                <select name="room1Type" onChange={this.onChange}>
                  <option value=""></option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Suite">Suite</option>
                </select>
              </div>
              <div className="item">
                <p>Room 2 type</p>
                <select name="room2Type" onChange={this.onChange}>
                  <option value="24"></option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Suite">Suite</option>
                </select>
              </div>
            </div>
            <div className="item">
              <label htmlFor="instruction">Special Instructions</label>
              <textarea
                id="instruction"
                rows="3"
                name="instructions"
                onChange={this.onChange}
              ></textarea>
            </div>
          </fieldset>
          <div className="btn-block">
            <button type="submit" href="/">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
