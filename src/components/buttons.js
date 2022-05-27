import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Addicon} from '../assets/add.svg'

const buttons = () => {
    return (
        <div>
            <Link to='/note/new' className='floating-button'>
            <Addicon/>
            </Link> 
        </div>
    )
}

export default buttons
