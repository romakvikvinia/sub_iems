import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Navbar from "./components/partiasl/Navbar";
import Index from "./components/page/Index";
import Dynamic from "./components/page/Dynamic";

//style
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { ID: 1, ParentID: null, Name: "HOME" },

        { ID: 2, ParentID: null, Name: "PRODUCTS" },

        { ID: 3, ParentID: 2, Name: "Product 1" },

        { ID: 4, ParentID: 2, Name: "Product 2" },

        { ID: 5, ParentID: 4, Name: "Sub Item" },

        { ID: 6, ParentID: 4, Name: "Sub Item" },

        { ID: 7, ParentID: null, Name: "ABOUT" },

        { ID: 8, ParentID: null, Name: "CONTACT" }
      ]
    };
  }
  addMenuHandler = item => {
    this.setState(prevState => ({
      ...prevState,
      menu: [...prevState.menu, item]
    }));
  };
  deleteItem = id => {
    this.setState(prevState => ({
      ...prevState,
      menu: prevState.menu.filter(i => i.ID != id)
    }));
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Navbar items={this.state.menu} />

                <section className="contatiner">
                  <Route
                    path="/"
                    exact
                    render={props => (
                      <Index
                        {...props}
                        onAddMenu={this.addMenuHandler}
                        items={this.state.menu}
                        onDeleteItem={this.deleteItem}
                      />
                    )}
                  />
                  <Route
                    path="/page/:id"
                    exact
                    render={props => (
                      <Dynamic {...props} items={this.state.menu} />
                    )}
                  />
                </section>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
