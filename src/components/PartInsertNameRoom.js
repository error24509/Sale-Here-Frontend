import React, { useState } from 'react'
import { useMutation, useQuery } from "@apollo/client"
import { GET_ROOM, POST_ROOM } from '../api/api'


const PartInsertNameRoom = (props) => {
  const { setDataRoom, onNext, onPrev } = props
  const { data, loading, error } = useQuery(GET_ROOM)
  const [nameRoom, setNameRoom] = useState("")
  const [postRoom] = useMutation(POST_ROOM)

  const nextStep = async () => {
    try {
      const room = data?.rooms?.find(room => room.name === nameRoom)
      if (room) {
        alert(`มีห้องนี้แล้ว ${nameRoom}`)
      } else {
        const res = await postRoom({
          variables: { name: nameRoom }
        })
        if(res?.data?.createRoom?.id){
          onNext(5)
          setDataRoom(res.data.createRoom)
        }
        // setDataRoom(room)
        // onNext(5)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const prevStep = () => {
    onPrev(2)
    setNameRoom('')

  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div className='sequence-container'>
      <h1 className="center-text item">สร้างห้องใหม่</h1>
      <input
        className='item'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            nextStep()
          }
        }}
        type="text" value={nameRoom} onChange={(evt) => setNameRoom(evt.target.value)} />
      <div className="container-btn item">
        <button className="button join-btn" onClick={prevStep} >กลับ</button>
        <button className="button" onClick={() => nameRoom === '' ? alert('กรุณากรอกชื่อห้อง') : nextStep()}>ยืนยัน</button>
      </div>
    </div>
  )
}


export default PartInsertNameRoom

