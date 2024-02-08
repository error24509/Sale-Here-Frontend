import React, { useState } from "react";
import logo from "../src/assets/images/logo.png"
import { useMorph } from 'react-morph';
import PartSetName from "./components/PartSetName";
import PartSelectCreateOrJoinRoom from "./components/PartSelectCreateOrJoinRoom";
import PartInsertNameRoom from "./components/PartInsertNameRoom";
// import PartSelectCreateOrJoinRoom from "./components/PartSelectCreateOrJoinRoom";

const App = () => {
  const [name, setName] = useState("Golf")
  const [step, setStep] = useState(1)
  const [nameRoom, setNameRoom] = useState("")
  const [toggle, setToggle] = useState(false)


  const morph = useMorph();

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }


  const showComponent = () => {
    switch (step) {
      case 1:
        return <PartSetName name={name} setName={setName} onAction={handleNextStep} />
      case 2:
        return <PartSelectCreateOrJoinRoom name={name} onNext={handleNextStep} onPrev={handlePrevStep} />
      case 3:
        return <PartInsertNameRoom nameRoom={nameRoom} setRoomName={setNameRoom} onNext={handleNextStep} onPrev={handlePrevStep} />
      default:
        break;
    }
  }

  return (
    <div {...morph} className="app">
      <img src={logo} alt="logo" className="logo" />
      <div className="container">

        {showComponent()}

        {/* <div>
          <h1 className="checked-name">คุณ {name}</h1>
          <button className="button" onClick={() => { }}>สร้างห้องใหม่</button>
          <p className="center-text">เข้าร่วมแชท</p>
        </div> */}


        {/* <div>
          <h1 className="center-text">สร้างห้องใหม่</h1>
          <input type="text" />
          <div className="container-btn">
            <p className="btn">กลับ</p>
            <button className="button" onClick={() => { }}>ยืนยัน</button>
          </div>
        </div> */}

        {/* <>
          <button onClick={() => setToggle(!toggle)}>Let's morph!</button>
          {toggle && <p {...morph}>Hello React Morph!</p>}
          <br />
          <br />
          <br />
          {!toggle && <h1 {...morph}>Hello React Morph!</h1>}
        </> */}


      </div>
    </div>
  )

};

export default App;
