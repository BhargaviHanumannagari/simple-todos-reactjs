import {Component} from 'react'
import DeleteProfile from './components/DeleteProfile'

import './App.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

const DeleteProfile = props => {
  const {userDetails, deleteUser} = props
  const {id, title} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <div className="bg-container">
      <li className="user-card-container">
        <div className="user-details-container">
          <h1 className="heading"> {title} </h1>
        </div>

        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </li>
    </div>
  )
}

export default DeleteProfile
