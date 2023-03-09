import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const promise = axios
//   .get("http://localhost:3001/notes")
//   .then((response) => console.log(response.data));
// console.log(promise);
// const promise2 = axios.get("http://localhost:3001/foobar");
// console.log(promise2);

root.render(<App />);
