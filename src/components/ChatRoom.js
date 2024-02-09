import React, { useState } from 'react'
import { useMutation, useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
  query GetById($id: ID!){
    GetById(id: $id){
    id
    name
    messages{
      id
      user
      content
    }
  }
}
`

const POST_MESSAGE = gql`
  mutation PostMessage($roomId:ID!,$user: String!, $content: String!) {
    postMessage(roomId:$roomId,user: $user, content: $content){
      id
    }
  }
`

const Messages = ({ user, id, dataRoom }) => {
  const data = dataRoom
  if (!data) return (
    <div className='loading '>
      <p>Loading...</p>
    </div>
  )
  return (
    <div style={{ width: '100%' }}>
      {data?.GetById.messages.map((message, index) => (
        <div
          key={index}
          className={user === message?.user ? 'box-chat user' : 'box-chat other-user'}
          style={{
            justifyContent: user === message?.user ? 'flex-end' : 'flex-start',
          }}>
          <div>
            <div
              className='box-user'
              style={{
                textAlign: user === message?.user ? 'right' : 'left',
                color: user === message?.user ? 'black' : 'darkgray'
              }}>
              {message?.user === user ? 'You' : `คุณ ${message?.user}`}
            </div>
            <div className='box-content'>
              {message?.content}
            </div>
          </div>
        </div>

      ))}
    </div>
  )
}


const ChatRoom = (props) => {
  const { dataRoom, name } = props

  const { data, loading, error } = useQuery(GET_MESSAGES, {
    variables: { id: dataRoom?.id },
    pollInterval: 500
  })

  const [state, setState] = useState({
    user: name,
    content: '',
    roomId: dataRoom?.id
  })
  const [postMessage] = useMutation(POST_MESSAGE)

  const onSend = async () => {
    if (state.content.length > 0) {
      const res = await postMessage({
        variables: state
      })
      res && setState({
        ...state,
        content: ''
      })
    }

  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div className="inner-container">
      <>
        <h1 className='item-room item'>ห้อง {dataRoom?.name}</h1>

        <div className='container-chat'>
          <div className='chat-list'
          >
            <Messages user={state.user} id={dataRoom.id} dataRoom={data} />
          </div>

          <input
            value={state.content}
            className='input-chat'
            placeholder='Enter เพื่อส่ง'
            onChange={(e) => setState({
              ...state,
              content: e.target.value
            })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSend()
              }
            }}
          />
        </div>
      </>
    </div>
  )
}

export default ChatRoom
