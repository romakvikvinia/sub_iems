import React from "react";
import CreateMenu from "../page/menu/create";
import MenuList from "../page/menu/Index";
function Index(props) {
  console.log(props);
  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <CreateMenu {...props} />
      <MenuList {...props} />
    </React.Fragment>
  );
}
export default Index;
