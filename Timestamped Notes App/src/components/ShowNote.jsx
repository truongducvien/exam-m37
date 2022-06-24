import { useContext } from "react";
import {NavLink, Navigate} from 'react-router-dom'

import { AppContext } from "../App";



export default function ShowNote ({removeNote}) {
   const notes = useContext(AppContext)

   

   return (
      <div className="showNote">
         {notes.map((note, index) => (
            <div key={index} className='note'>
               <div className="main">
                  <div className="title">{note.title}</div>
                  <div className="info">
                     <p>Recorded: {note.time.toLocaleString()}</p>
                     <span>
                        <NavLink to='/detail' state={note}>(Show Details)</NavLink>
                        
                     </span>
                     <span onClick={()=>removeNote(index)}>(Remove Notes)</span>
                  </div>
               </div>

            </div>
         ))}
      </div>
   )
}