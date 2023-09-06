import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  )
}

export default Notification

export const notifyRoomCreated = (roomName) => {
  toast.success(`Room "${roomName}" has been created!`, {
    position: 'top-right',
    autoClose: 3000, // Time for notification to auto-close (in milliseconds)
  })
}

export const showErrorNotification = (message) => {
  toast.error(message)
}
