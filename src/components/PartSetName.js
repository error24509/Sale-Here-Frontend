import React, { useEffect, useState } from 'react'

const PartSetName = (props) => {
  const { name, setName, onNext } = props
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    name.length > 0 ? setShowBtn(true) : setShowBtn(false)
  }, [name])

  const onClick = (e) => {
    
    onNext(2)
  }


  return (
    <>
      <h1 className="title">ชื่อของคุณ</h1>
      <input 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClick()
          }
        }}
      type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
      {
        showBtn && <button id='btn-confirm' className="button" onClick={onClick}>ยืนยัน</button>
      }

    </>
  )
}

export default PartSetName