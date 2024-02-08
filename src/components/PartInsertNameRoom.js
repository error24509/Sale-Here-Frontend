import React from 'react'

const PartInsertNameRoom = (props) => {
  const { nameRoom, setRoomName, onNext, onPrev } = props
  return (
    <div>
      <h1 className="center-text">สร้างห้องใหม่</h1>
      <input type="text" value={nameRoom} onChange={(evt) => setRoomName(evt.target.value)} />
      <div className="container-btn">
        <button className="button join-btn" >กลับ</button>
        <button className="button" onClick={onNext}>ยืนยัน</button>
      </div>
    </div>
  )
}

export default PartInsertNameRoom