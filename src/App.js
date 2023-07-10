import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/comments";
  console.log("data", data);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("jsonnnn", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);
  //put event
  const postEvent = () => {
    const data = {
      name: "seeema",
      mobile: "8788825285",
      designation: "developer",
      pin: "454578",
    };
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => setData("jsonnnn", json))
      .catch((e) => {
        console.log("e", e);
      });
  };
  return (
    <div className="App">
      <h1>welcome</h1>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <li>
              <h6>{item.id}</h6>
              <p>{item.name}</p>
              <p>{item.body}</p>
            </li>
          </div>
        );
      })}
      <button onClick={postEvent}>submit</button>
    </div>
  );
}

export default App;
