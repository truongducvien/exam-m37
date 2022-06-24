import './App.css';
import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddNote from './components/AddNote';
import ShowNote from './components/ShowNote';
import ShowDetail from './components/ShowDetail';


import './style/Layout.scss'


export const AppContext = createContext()

function App() {
  const [notes, setNotes] = useState([])

  const handleSubmit = (title, detail) => {
    let now = new Date()

    let newNote = {
      title: title,
      detail: detail,
      time: now 
    }
    setNotes([
      newNote,
      ...notes
    ])
  }

  const setNoteId = (notes) => {
    notes.map((note, index) => note.id = index)
  }

  const removeNote = (index) => {
    let newNotes = [...notes];
    newNotes.splice(index,1);
    setNoteId(newNotes);
    setNotes([...newNotes]);

  }
  
  useEffect(() => {
    setNoteId(notes)
  }, [notes]);



  return (
    <BrowserRouter>
      <AppContext.Provider value={notes}>
        <div className="App">
          <AddNote handleSubmit={handleSubmit}/>

          <Routes>
            <Route>
              <Route path='/' element={<ShowNote removeNote={removeNote}/>} />
              <Route path='/detail' element={<ShowDetail removeNote={removeNote}/>} />      
            </Route>
          </Routes>
          
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
