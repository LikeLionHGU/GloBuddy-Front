import React, { useState } from "react";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={openModal}
        style={{ position: "relative", zIndex: "1", fontSize: "20px" }}
      >
        프로필 확인
      </button>
      {isModalOpen && (
        <div
          className="modal"
          style={{
            width: "600px",
            height: "700px",
            background: "pink",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
          }}
        >
          <div
            className="modal-content"
            style={{ padding: "20px", textAlign: "center", color: "white" }}
          >
            <button
              className="close-button"
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              X
            </button>
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>프로필</h1>
            <p style={{ fontSize: "16px" }}>국내/국제</p>
            <input
              type="text"
              style={{ padding: "10px", marginRight: "10px" }}
              placeholder="내용을 입력하세요."
            />
            <p style={{ fontSize: "16px" }}>성별</p>
            <input
              type="text"
              style={{ padding: "10px" }}
              placeholder="내용을 입력하세요."
            />
            <p style={{ fontSize: "16px" }}>성격</p>
            <input
              type="text"
              style={{ padding: "10px", marginRight: "10px" }}
              placeholder="내용을 입력하세요."
            />
            <p style={{ fontSize: "16px" }}>니즈</p>
            <input
              type="text"
              style={{ padding: "10px", marginRight: "10px", width: "400px" }}
              placeholder="내용을 입력하세요."
            />
            <br></br>
            <br></br>
            <input
              type="text"
              style={{ padding: "10px", marginRight: "10px", width: "400px" }}
              placeholder="내용을 입력하세요."
            />
            <br></br>
            <br></br>
            <input
              type="text"
              style={{ padding: "10px", marginRight: "10px", width: "400px" }}
              placeholder="내용을 입력하세요."
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            ></div>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#fff",
                color: "gray",
                border: "none",
                borderRadius: "4px",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "20px",
              }}
            >
              저장
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
