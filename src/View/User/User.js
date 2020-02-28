import React, { Component } from "react";

import { Modal } from "react-bootstrap";

import "./User.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      addModel: false,
      userList: [
        {
          name: "Hirusha Kumarasinghe",
          age: "23",
          address: "smaple text",
          phone_number: ["0113105901", "0771138255"],
          email: "axg@gmail.com",
          gender: "male"
        },
        {
          name: "Rahal Kumarasinghe",
          age: "20",
          address: "abc text",
          phone_number: ["024310601", "0771138255"],
          email: "axg@gmail.com",
          gender: "male"
        },
        {
          name: "padula Kumarasinghe",
          age: "45",
          address: "smaple text",
          phone_number: ["0113105901", "0771138255"],
          email: "axg@gmail.com",
          gender: "female"
        },
        {
          name: "pasindu Kumarasinghe",
          age: "63",
          address: "smaple text",
          phone_number: ["0113105901", "0771138255"],
          email: "axg@gmail.com",
          gender: "male"
        },
        {
          name: "Hirusha Kumarasinghe",
          age: "23",
          address: "smaple text",
          phone_number: ["0113105901", "0771138255"],
          email: "axg@gmail.com",
          gender: "male"
        },
        {
          name: "Rahal Kumarasinghe",
          age: "20",
          address: "abc text",
          phone_number: ["024310601", "0771138255"],
          email: "axg@gmail.com",
          gender: "male"
        },
        {
          name: "padula Kumarasinghe",
          age: "45",
          address: "smaple text",
          phone_number: ["0113105901", "0771138255"],
          email: "axg@gmail.com",
          gender: "male"
        },
        {
          name: "pasindu Kumarasinghe",
          age: "63",
          address: "smaple text",
          phone_number: ["0113105901", "0771138255"],
          email: "axg@gmail.com",
          gender: "male"
        }
      ],
      editData: null,
      editModal: false
    };
  }

  toggleAddModel() {
    this.setState({
      addModel: !this.state.addModel
    });
  }

  async handleEditUser(_data) {
    console.log(_data);

    await this.setState({
      editData: _data
    });

    await this.setState({
      editModal: true
    });
  }

  handleDelete(i) {
    var arr = this.state.userList;

    arr.splice(i, 1);
    this.setState({
      userList: arr
    });
  }

  render() {
    var _userList = this.state.userList.map((_data, i) => {
      return (
        <tr>
          <th scope="row">{i}</th>
          <td>{_data.name}</td>
          <td> {_data.age}</td>
          <td> {_data.address}</td>
          <td> {_data.phone_number}</td>
          <td> {_data.email}</td>
          <td> {_data.gender}</td>
          <td align="center">
            <button
              onClick={() => this.handleEditUser(_data)}
              className="user_editButton"
            >
              Edit
            </button>
            <button
              onClick={() => this.handleDelete(i)}
              className="user_delButton"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
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
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">email</th>
              <th scope="col">Gender</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{_userList}</tbody>
        </table>

        {/* Add Modal */}
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
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="18"
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Address"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <button type="submit" className="user_formButton">
                Submit
              </button>
            </form>
          </Modal.Body>
        </Modal>

        {/* Edit Modal */}
        <Modal
          size="lg"
          show={this.state.editModal}
          onHide={() => this.setState({ editModal: false })}
          animation={true}
          dialogClassName="addModel"
        >
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={
                    this.state.editData === null ? "" : this.state.editData.name
                  }
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="18"
                  value={
                    this.state.editData === null ? "" : this.state.editData.age
                  }
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Address"
                  value={
                    this.state.editData === null
                      ? ""
                      : this.state.editData.address
                  }
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={
                    this.state.editData === null
                      ? ""
                      : this.state.editData.phone_number
                  }
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={
                    this.state.editData === null
                      ? ""
                      : this.state.editData.email
                  }
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  defaultValue={
                    this.state.editData === null
                      ? ""
                      : this.state.editData.gender
                  }
                >
                  <option></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <button type="submit" className="user_formButton">
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
