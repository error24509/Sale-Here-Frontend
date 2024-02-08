import React from 'react'

const PartSelectCreateOrJoinRoom = (props) => {
  const { name, onNext, onPrev } = props


  return (
    <div>
      <h1 className="checked-name">คุณ {name}</h1>
      <div className='box-center'>
        <button className="button" onClick={onNext}>สร้างห้องใหม่</button>
        <button  className="button join-btn" onClick={onNext}>เข้าร่วมแชท</button>
      </div>
      {/* <p className="center-text" onClick={onPrev}>เข้าร่วมแชท</p> */}
    </div>
  )
}

export default PartSelectCreateOrJoinRoom