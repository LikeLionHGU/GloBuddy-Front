import React, { useState } from "react";
import FilterImg from "../../img/Filter.png";
import GlassImg from "../../img/Glass.png";

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
          <img
            src={FilterImg}
            alt="사용자버튼"
            style={{
              width: "56px",
              height: "56px",
              marginLeft: "0px",
            }}
          />
          <h4 style={{ color: "black", fontSize: "18px" }}>Nationality</h4>
          <select
            value={selectedNationality}
            onChange={handleNationalityChange}
            style={{
              width: "138px",
              height: "51px",
              border: "3.5px solid #FF9571",
              marginBottom: "5px",
              padding: "6px",
            }}
          >
            <option value=""></option>
            <option value="filter1">Korean</option>
            <option value="filter2">International</option>
          </select>
          <h4 style={{ color: "black", fontSize: "18px" }}>Gender</h4>
          <select
            value={selectedGender}
            onChange={handleGenderChange}
            style={{
              width: "138px",
              height: "51px",
              border: "3.5px solid #FF9571",
              marginBottom: "5px",
              padding: "6px",
            }}
          >
            <option value=""></option>
            <option value="filter1">Male</option>
            <option value="filter2">Female</option>
          </select>
          <h4 style={{ color: "black", fontSize: "18px" }}>Needs</h4>
          <select
            value={selectedNeeds}
            onChange={handleNeedsChange}
            style={{
              width: "138px",
              height: "51px",
              border: "3.5px solid #FF9571",
              marginBottom: "5px",
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
              width: "140px",
              height: "60px",
              color: "black",
              fontSize: "23px",
              border: "none",
              marginTop: "40px",
              cursor: "pointer",
              fontFamily: "Subtitle2",
              marginBottom: "19px",
            }}
          >
            Find
            <img
              src={GlassImg}
              alt="사용자버튼"
              style={{
                width: "16px",
                height: "19px",
                marginLeft: "6px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
