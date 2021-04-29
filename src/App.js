import React, { useState } from "react";
import "./styles.css";

const emotiDictionary = {
  "Andhra Pradesh	": "Amravati",
  "Arunachal Pradesh": "Itanagar",
  Assam: "Dispur",
  Bihar: "Patna",
  Chhattisgarh: "Raipur",
  Goa: "Panaji",
  Gujarat: "Gandhinagar",
  Haryana: "Chandigarh",
  "Himachal Pradesh	": "Shimla",
  Jharkhand: "Ranchi",
  Karnataka: "Bangalore",
  Kerala: "Thiruvananthapuram	",
  "Madhya Pradesh	": "Bhopal",
  Maharashtra: "Mumbai",
  Manipur: "Imphal",
  Meghalaya: "Shillong",
  "Mizoram	": "Aizawl",
  Nagaland: "Kohima",
  Odisha: "Bhubaneswar",
  Punjab: "Chandigarh",
  Rajasthan: "Jaipur",
  Sikkim: "Gangtok	",
  "Tamil Nadu	": "Chennai",
  Telangana: "Hyderabad",
  Tripura: "Agartala",
  "Uttar Pradesh	": "Lucknow",
  "Uttarakhand	": "Dehradun",
  "West Bengal	": "Kolkata"
};

var emotisWeKnow = Object.keys(emotiDictionary);

export default function App() {
  var [shortCut, setShortCut] = useState("");

  function emotiHandler(event) {
    var userInput = event.target.value;
    var shortCut = emotiDictionary[userInput];
    // console.log("clicked",shortCut);

    if (shortCut === undefined) {
      shortCut = "sorry, couldn't find";
    }
    setShortCut(shortCut);
  }

  function emotiClickHandler(item) {
    var shortCut = emotiDictionary[item];
    setShortCut(shortCut);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#5B21B6" }}>RajDhaani</h1>

      <h2>Find the Capital of India States.</h2>

      <input
        onChange={emotiHandler}
        style={{ padding: ".5rem", width: "300px" }}
      ></input>

      <div
        style={{
          padding: "1rem",
          color: "blue",
          fontSize: "25px",
          autoCapitalize: "none"
        }}
      >
        {shortCut}
      </div>

      <h2 style={{ padding: "1rem" }}>Search Capital by clicking me. </h2>
      {emotisWeKnow.map((item) => {
        return (
          <button
            style={{
              cursor: "pointer",
              border: ".5rem",
              borderRadius: "1.2rem",
              margin: "1rem",
              padding: "1.4rem",
              fontSize: "20px"
            }}
            onClick={() => emotiClickHandler(item)}
          >
            {item}{" "}
          </button>
        );
      })}
      <hr />
    </div>
  );
}
