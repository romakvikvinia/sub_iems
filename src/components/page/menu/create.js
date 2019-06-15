import React, { Component } from "react";

//componets
import DefaultInput from "../../block/ui/DefaultInput";
export default class create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      ParentID: "",
      Name: ""
    };
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    const { ID, ParentID, Name } = this.state;
    this.props.onAddMenu({ ID, ParentID: ParentID ? ParentID : null, Name });
  };
  render() {
    return (
      <form className="w-100" onSubmit={this.submitHandler}>
        <div className="row">
          <div className="col">
            <DefaultInput
              type="number"
              title="ID"
              name="ID"
              value={this.state.ID}
              onChange={this.changeHandler}
            />
          </div>
          <div className="col">
            <DefaultInput
              title="Parent ID"
              name="ParentID"
              type="number"
              value={this.state.ParentID}
              onChange={this.changeHandler}
            />
          </div>
          <div className="col">
            <DefaultInput
              title="Name"
              name="Name"
              value={this.state.Name}
              onChange={this.changeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-success float-right">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}
