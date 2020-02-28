import React, { Component } from "react";

import { Modal } from "react-bootstrap";

import "./User.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      addModel: false
    };
  }

  toggleAddModel() {
    this.setState({
      addModel: !this.state.addModel
    });
  }

  render() {
    return (
      <div className=" container userMain">
        <h1 className="title">Client Dashboard</h1>

        <hr />

        <div className="clienStats row">
          <div className="col-sm-4">
            <div className="cs_container">
              <h2>154</h2>
              <h4>Total Clients</h4>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="cs_container">
              <h2>54</h2>
              <h4>Active Clients</h4>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="cs_container">
              <h2>54</h2>
              <h4>Active Clients</h4>
            </div>
          </div>
        </div>

        <h3 className="subTitle">Client List</h3>

        <button onClick={() => this.toggleAddModel()} className="user_addBtn">
          Add Client
        </button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>

        <Modal
          size="lg"
          show={this.state.addModel}
          onHide={this.toggleAddModel.bind(this)}
          animation={true}
          dialogClassName="addModel"
        >
          <Modal.Body>
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default User;
