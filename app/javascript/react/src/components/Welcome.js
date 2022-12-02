import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MessageList from './Message'

const Weleome = () => {
    return(
        <div className='container'>
            <MessageList />
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () =>{
    ReactDOM.render(<Weleome />, document.getElementById('welcome'))
})

export default Weleome