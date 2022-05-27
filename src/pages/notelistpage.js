import React,{useState, useEffect} from 'react'
//import notes from '../assets/data'
import ListItem from '../components/listItem'
import Addicon from '../components/buttons'

const notelistpage = () => {
    let [notes,setNotes] = useState([])
    useEffect(()=>{
        getNotes()
    },[])//will run just once

    let getNotes = async () =>{
        let response = await fetch('http://localhost:8000/notes')
        let data = await response.json()
        setNotes(data)
    }
    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note,index)=>(
                    <ListItem key={index} note={note} />
                    
                ))} 
            </div>
            <Addicon/>
        </div>
    )
}

export default notelistpage
 