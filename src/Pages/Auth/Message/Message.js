import React from 'react'
import "./Message.scss"
import MailMessage from "../../../images/mail-message.svg"

const Message = ({ message }) => {
    return (
        <div className='mail-message'>
            <img src={MailMessage} alt="mail" />
            <p className='message-text'>{message}</p>
        </div>
    )
}

export default Message