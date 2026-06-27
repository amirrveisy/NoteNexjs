import { eq } from "drizzle-orm"
import { db } from "../../db"
import { notes } from "../../db/schema"






export const getNotes = async () => {
  return db.query.notes.findMany()
}

// export const addNote = (content: string, important: boolean) => {
//   notes.push({ id: nextId++, content, important })
// }

// export const getNoteById = (id: number) =>   {

//    return notes.find(note=> note.id=== id)
// }

// export const toggleImportance=(id: number)=>{

//   const note= notes.find((note)=> note.id=== id)

//   if( note){
//     note.important= !note.important
//   }
  


// }