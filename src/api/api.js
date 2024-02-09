import { gql } from "@apollo/client"

export const GET_ROOM = gql`
 query GetRoom{
  rooms{
    id
    name
  }
}
`

export const POST_ROOM = gql`
 mutation CreateRoom($name:String!){
   createRoom(name:$name){
    id
    name
   }
  }
  `