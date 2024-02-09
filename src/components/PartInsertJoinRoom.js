import React, { useState } from 'react'
import {  useQuery } from "@apollo/client"
import { GET_ROOM } from '../api/api'


const PartInsertJoinRoom = (props) => {
  const { setDataRoom, onNext, onPrev } = props
  const { data, loading, error } = useQuery(GET_ROOM)
  const [nameRoom, setNameRoom] = useState("")

  const nextStep = () => {
    try {
      const room = data?.rooms?.find(room => room.name === nameRoom)
      if (room) {
        onNext(5)
        setDataRoom(room)
      } else {
        alert(`ไม่พบห้อง ${nameRoom}`)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const prevStep = () => {
    setNameRoom('')
    onPrev(2)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div className='sequence-container'>
      <h1 className="center-text item">เข้าร่วมแชท</h1>
      <input className='item'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            nextStep()
          }
        }}
        type="text" value={nameRoom} onChange={(evt) => setNameRoom(evt.target.value)} />
      <div className="container-btn item">
        <button className="button join-btn" onClick={prevStep}>กลับ</button>
        <button className="button" onClick={() => (nameRoom === "" ? alert("กรุณากรอกชื่อห้อง") : nextStep())}>ยืนยัน</button>
      </div>
    </div>
  )
}

export default PartInsertJoinRoom