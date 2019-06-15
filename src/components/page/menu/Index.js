import React from "react";

function Index({ items, onDeleteItem }) {
  return (
    <div className="col">
      <h3>List</h3>
      <ul className="list-group">
        {items
          ? items.map(item => (
              <li className="list-group-item" key={item.ID * Math.random()}>
                {item.Name}
                <button
                  type="button"
                  onClick={() => onDeleteItem(item.ID)}
                  className="btn btn-sm btn-danger float-right"
                >
                  X
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
export default Index;
