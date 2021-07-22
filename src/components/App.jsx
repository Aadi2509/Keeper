import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteItems,setNoteItems]=useState([]);

  function addItem(newNote){
      setNoteItems((prevValue)=>{
        return [...prevValue,newNote];
      });
  }

  function deleteNote(id){
      setNoteItems(prevValue=>{
        return prevValue.filter((item,index)=>{
            return index!==id;
        });
      })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      
      {noteItems.map((noteItem,index) => {
        return <Note 
                  key={index} 
                  id={index} 
                  title={noteItem.title} 
                  content={noteItem.content}
                  onChecked={deleteNote}
                  />
      })}

      <Footer/>
    </div>
  );
}

export default App;
