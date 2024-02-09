import React from 'react'

const PartSelectCreateOrJoinRoom = (props) => {
  const { name, onNext, onPrev } = props


  const nextStep = (e) => {
    onNext(3)
  }
  const prevStep = (e) => {
    onPrev(4)
  }

  return (
    <div className='sequence-container'>
      <h1 className="checked-name item">คุณ {name}</h1>
      <div className='box-center'>
        <button className="button item" onClick={nextStep}>สร้างห้องใหม่</button>
        <button className="button join-btn item" onClick={prevStep}>เข้าร่วมแชท</button>
      </div>
    </div>
  )
}

export default PartSelectCreateOrJoinRoom