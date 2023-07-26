import React from "react";
import { BrowserRouter } from "react-router-dom";
// import FileExplorer from "./file-explorer/FileExplorer";
import Routes from "./routes";

const App = () => {
  return (
    <>
      {/* <FileExplorer /> */}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
