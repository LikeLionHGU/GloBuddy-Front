import React, { useState } from "react";

const FilterComponent = () => {
  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedNeeds, setSelectedNeeds] = useState("");

  const handleNationalityChange = (event) => {
    setSelectedNationality(event.target.value);
  };
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleNeedsChange = (event) => {
    setSelectedNeeds(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(255, 226, 193)",
          width: "195.75px",
          height: "490.5px",
          borderRadius: "10px",
          display: "flex",
          padding: "10px",
          justifyContent: "space-around",
          marginTop: "65px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <h4 style={{ color: "black", fontSize: "14px" }}>Nationality</h4>
          <select
            value={selectedNationality}
            onChange={handleNationalityChange}
            style={{
              width: "138px",
              height: "51px",
              border: "3px solid #FF9571",
              marginBottom: "10px",
              padding: "6px",
            }}
          >
            <option value=""></option>
            <option value="filter1">Korean</option>
            <option value="filter2">International</option>
          </select>
          <h4 style={{ color: "black", fontSize: "14px" }}>Gender</h4>
          <select
            value={selectedGender}
            onChange={handleGenderChange}
            style={{
              width: "138px",
              height: "51px",
              border: "3px solid #FF9571",
              marginBottom: "10px",
              padding: "6px",
            }}
          >
            <option value=""></option>
            <option value="filter1">Male</option>
            <option value="filter2">Femail</option>
          </select>
          <h4 style={{ color: "black", fontSize: "14px" }}>Needs</h4>
          <select
            value={selectedNeeds}
            onChange={handleNeedsChange}
            style={{
              width: "138px",
              height: "51px",
              border: "3px solid #FF9571",
              marginBottom: "10px",
              padding: "6px",
            }}
          >
            <option value=""></option>
            <option value="filter1">#Exercise</option>
            <option value="filter2">#Friends</option>
            <option value="filter3">#Information</option>
            <option value="filter4">#Languege</option>
            <option value="filter5">#Class</option>
            <option value="filter6">#Culture</option>
          </select>

          <button
            style={{
              backgroundColor: "#FF9571",
              borderRadius: "8px",
              width: "150px",
              height: "60px",
              color: "black",
              fontSize: "20px",
              border: "none",
              marginTop: "40px",
              cursor: "pointer",
              fontFamily: "Subtitle2",
            }}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
