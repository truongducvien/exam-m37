import { useLocation } from "react-router"
import { useNavigate } from "react-router";

export default function ShowDetail ({removeNote}) {
   const location = useLocation()
   const navigate = useNavigate()
   
   const note = location.state;
   
   const handleRemove = (id) => {
      removeNote(id)
      navigate('/')
   }
   
   return (
      <>
         <div  className='note'>
               <div className="main">
                  <div className="title">{note.title} </div>
                  <div className="info">
                     {/* <p>Recorded: {note.time}</p> */}
                     <span onClick={()=>navigate('/')}>(Hide Details)</span>
                     <span onClick={()=>handleRemove(note.id)}>(Remove Notes)</span>
                  </div>
               </div>

               <div className="detail">
                  Detail: {note.detail}
               </div>
            </div>
      </>
   )
}