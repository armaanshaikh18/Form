import React, { Component } from "react";

import SimpleReactValidator from "simple-react-validator";
import "./validate.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",

      mobileno: "",
      UserLogin: {
        userId: "",
        email: "",
      },
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        mobileno: this.state.mobileno,

        UserLogin: {
          userId: this.state.userId,
          email: this.state.email,
        },
      };
      alert("thanks for the registration");
      console.log(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleInputdata = (e) => {
    //console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  setUserid = (e) => {
    let uId = Object.assign({}, this.state.UserLogin);
    uId.userId = e.target.value;
    this.setState({ UserLogin: uId });
  };

  setUseremail = (e) => {
    let eId = Object.assign({}, this.state.UserLogin);
    eId.email = e.target.value;
    this.setState({ UserLogin: eId });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter FirstName"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleInputdata}
                />

                {this.validator.message(
                  "firstname",
                  this.state.firstname,
                  "required|min:5"
                )}
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter lastName"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleInputdata}
                />
                {this.validator.message(
                  "lastname",
                  this.state.lastname,
                  "required|min:5"
                )}
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter mobileno"
                  name="mobileno"
                  value={this.state.mobileno}
                  onChange={this.handleInputdata}
                />{" "}
                {this.validator.message(
                  "mobileno",
                  this.state.mobileno,

                  "required|phone"
                )}
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter userId"
                  name="userId"
                  value={this.state.UserLogin.userId}
                  onChange={this.setUserid}
                />{" "}
                {this.validator.message(
                  "userId",
                  this.state.UserLogin.userId,
                  "required|min:5"
                )}
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.UserLogin.email}
                  onChange={this.setUseremail}
                />
                {this.validator.message(
                  "email",
                  this.state.UserLogin.email,
                  "required|email",
                  { className: "text-danger" }
                )}
              </div>

              <br />

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
