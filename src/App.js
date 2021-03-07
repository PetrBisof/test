import React, { useState, useEffect } from "react";
import { css, cx } from "@emotion/css";
import Ships from "./Ship.js";
import { useSelector } from "react-redux";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";

function App() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios("http://localhost:1500/api");

    setData(result.data);
  });
  // const name = useSelector((state) => state.name);
  const name = () => {
    return {
      type: "NAME",
      payload: data
    };
  };
  
  const getData = (state, action) => {
    switch (action.type) {
      case "NAME":
        return {data: data};
        default:
          return state
    }
  };
  
  let  store = createStore(getData);
  
  store.dispatch(name());
  store.subscribe(()=> console.log(store.getState));

  // state = {
  //   data: [],
  // };

  // componentDidMount() {
  //   fetch("http://localhost:1500/api")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ data: data });
  //     })
  //     .catch(console.log);
  // }

  // render() {
  //   console.log(this.state.data);
  //   const getContent = () => {
  //     return this.state.data.forEach((item) => {
  //       return (
  //         <>
  //           <div>{item.name}</div>
  //           <div>{item.details}</div>
  //         </>
  //       );
  //     });
  //   };
  console.log(name, data);
  return (
    <Provider store={store}>
      {name}
      <Ships />;
      {/* {this.state.data.map((item) => {
          return (
            <>
            {name}
              <Ships name={item.name} details={item.details} /> 
            </>
          );
        })} */}
    </Provider>
    // JSX to render goes here...
  );
}
// }

export default App;
