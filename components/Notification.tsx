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

export const showSuccessNotification = (message) => {
  toast.success(message)
}

export const showErrorNotification = (message) => {
  toast.error(message)
}
