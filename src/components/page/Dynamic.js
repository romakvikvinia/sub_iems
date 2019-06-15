import React, { Component } from "react";

export default class Dynamic extends Component {
  render() {
    let { items } = this.props;
    let menuItem = items.find(i => i.ID == this.props.match.params.id);
    console.log(menuItem);
    return (
      <div>
        <h3>ID:{this.props.match.params.id}</h3>
        <h3>Name : {menuItem.Name}</h3>
      </div>
    );
  }
}
