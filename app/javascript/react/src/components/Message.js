import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'

const MessageList = () => {
    const [messagesList, setMessagesList] = useState([])
    const messagesUrl = 'http://localhost:3000/api/v1/messages'

    const fetchMessageList = () => {
        fetch (messagesUrl)
        .then((response) => response.json())
        .then((data) => {
            setMessagesList(data)
        })
    }

    useEffect(() => {
        fetchMessageList()
    }, [])

    return(
        <div className='row'>
            <div className='col-lg-10 mx-auto'>
                <div className='card rounded-0 mt-3'>
                    <div className='card-body'>
                        <h3 className='card-title'>{messagesList.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageList