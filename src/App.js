import React, { useState } from "react";
import logo from "../src/assets/images/logo.png"
import PartSetName from "./components/PartSetName";
import PartSelectCreateOrJoinRoom from "./components/PartSelectCreateOrJoinRoom";
import PartInsertNameRoom from "./components/PartInsertNameRoom";
import PartInsertJoinRoom from "./components/PartInsertJoinRoom";
import ChatRoom from "./components/ChatRoom";
import { ApolloProvider } from '@apollo/client';
import { client } from "./api/baseApi";

const App = () => {
  const [name, setName] = useState("")
  const [step, setStep] = useState(1)
  const [dataRoom, setDataRoom] = useState({})

  const handleStep = (data) => {
    setStep(data)
  }

  const showComponent = () => {
    switch (step) {
      case 1:
        return <PartSetName name={name} setName={setName} onNext={handleStep} />
      case 2:
        return <PartSelectCreateOrJoinRoom name={name} onNext={handleStep} onPrev={handleStep} />
      case 3:
        return <PartInsertNameRoom setDataRoom={setDataRoom} onNext={handleStep} onPrev={handleStep} />

      case 4:
        return <PartInsertJoinRoom setDataRoom={setDataRoom} onNext={handleStep} onPrev={handleStep} />

      case 5:
        return <div className="fullscreen">
          <ChatRoom dataRoom={dataRoom} name={name} />
        </div>
      default:
        break;
    }
  }

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <img src={logo} alt="logo" className="logo" />
        <div className="container">
          <ApolloProvider client={client}>
            {showComponent()}
          </ApolloProvider>
        </div>
      </div>
    </ApolloProvider>
  )

};

export default App;



