import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  //get data from backend

  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    //document.getElementById("para").innerHTML = response.data;
    alert(response.data);
  };

  // insert data into backend
  const data = "hello";
  const getDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    //document.getElementById("para").innerHTML = response.data;
    alert(response.data);
  };

  //insert or postdata in form to backend
  const [formData, setformData] = useState("");

  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    //document.getElementById("para").innerHTML = response.data;
    alert(response.data);
  };

  return (
    <div className="App">
      {/* get data from backend */}
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

      {/* insert data into backend */}
      <button onClick={getDataFromFrontend}>Post Data</button>
      <p id="para"></p>

      <form onSubmit={postFormFromFrontend}>
        <label>Song</label>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setformData(e.target.value)}
        ></input>
        <input type="submit" value="testForm"></input>
      </form>
    </div>
  );
};
export default App;
