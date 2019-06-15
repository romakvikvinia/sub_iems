import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  orderMenu = (items, ParentID) => {
    let out = [];
    for (let i in items) {
      if (items[i].ParentID == ParentID) {
        let children = this.orderMenu(items, items[i].ID);
        if (children.length) {
          items[i].children = children;
        }
        out.push(items[i]);
      }
    }
    return out;
  };

  drowOrderedMenu = (items, children) => {
    let output = items.map(item => (
      <li className="nav-item" key={Math.random() * 10000}>
        <Link className="nav-link" to={`/page/${item.ID}`}>
          {item.Name}
        </Link>
        {item.children && item.children.length
          ? this.drowChildren(item.children)
          : null}
      </li>
    ));
    return output;
  };

  drowChildren = items => {
    let output = (
      <ul className="sub-menu">
        {items.map(item => (
          <li key={Math.random() * 10000}>
            <Link
              to={
                item.children && item.children.length ? "#" : `/page/${item.ID}`
              }
            >
              {item.Name}
            </Link>
            {item.children && item.children.length
              ? this.drowChildren(item.children)
              : null}
          </li>
        ))}
      </ul>
    );

    return output;
  };

  render() {
    let { items } = this.props;
    items = this.orderMenu(items);
    const Drowed = this.drowOrderedMenu(items);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">{Drowed}</ul>
        </div>
      </nav>
    );
  }
}
