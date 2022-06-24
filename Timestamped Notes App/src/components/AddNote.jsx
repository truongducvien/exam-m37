import { useState, useContext } from "react";

import { AppContext } from "../App";

export default function AddNote ({handleSubmit}) {
   const notes = useContext(AppContext)

   const [title, setTitle] = useState('')
   const [detail, setDetail] = useState('')

   const handleTitleChange = (e)=> {
      setTitle(e.target.value)
   }

   const handleDetailChange = (e)=> {
      setDetail(e.target.value)
   }


   return (
      <div className="addNote">
         <h2>Timestamped Notes App </h2>

         <form className="form" action="#" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" onChange={(e)=>handleTitleChange(e)} placeholder="Note Title"/> <br />
            <input type="text" onChange={(e)=>handleDetailChange(e)} placeholder="Note Details"/> <br />

            <button onClick={()=>handleSubmit(title, detail)}>Add</button>
         </form>
      </div>
   )
}