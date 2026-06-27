"use server"

import { redirect } from "next/navigation"
import { addNote, toggleImportance } from "../services/notes"
import { revalidatePath } from "next/cache"

export const createNote = async (formData: FormData) => {
  const content = formData.get("content") as string
  const important = formData.get("important") === "on"
  addNote(content, important)
  revalidatePath("/notes")
  redirect("/notes")
}


export const toggleNoteImportance = async (formdata: FormData)=>{

  const id = Number(formdata.get("id"))
  toggleImportance(id)
  revalidatePath(`/notes/${id}`)
  revalidatePath("/notes")


}

