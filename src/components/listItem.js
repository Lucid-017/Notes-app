import React from 'react'
import { Link} from 'react-router-dom'


let getDate =(note)=>{
    return new Date(note.updated).toLocaleDateString()
}
let getTime =(note)=>{
    return new Date(note.updated).toLocaleTimeString()
}
let getTitle = (note)=>{
    const title = note.body.split('\n')[0]
    
    if(title.length > 30){
        return title.slice(0,30) + '...'
    }
    
    return title
}
let getContent = (note)=>{
    let title = getTitle(note)
    let content = note.body.replaceAll('\n',' ')
    content = content.replaceAll(title,'')

    if(content.length >45){
        return content.slice(0,24)
    }else{
        return content
    }
}


const listItem = ({note}) => {

    return (
        <Link to={`/note/${note.id}`}>
            <div className='notes-list-item'>
                <h3>{getTitle(note)}</h3>
                <p><span>{getDate(note) +' '+getTime(note)}</span>{getContent(note )}</p>
            </div>
            
        </Link>
    )
}

export default listItem
