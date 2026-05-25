"use client"
import { useState } from "react"
import "./todo.css"

export default function Todo() {
 const [list, setList] = useState([])
 const [input, setInput] = useState("")

 const addTask = () => {
  if (!input.trim()) return;
  //here we make one new task object with data
  const newTask = {
   id: Date.now(),
   title: input,
   status: "pending",
  }
  console.log(newTask)
  setList([...list, newTask])
  setInput("")
 }

 const toggleStatus = (id) => {
  //here we update the status of tast by id
  console.log(id)
  setList(list.map(item => {
   console.log(item)
   return item.id === id ? { ...item, status: item.status === "pending" ? "completed" : "pending" } : item
  }))
 }

 const deleteTask = (id) => {
  //here we delete tha tast by id 
  const newArray = list.filter(item => {
   return item.id != id
  })
  //now here we update the list with new array
  setList(newArray)
 }

 return (
  <div className="container">
   <h2>Todo List</h2>

   <div className="inputBox">
    <input
     type="text"
     placeholder="Enter task..."
     value={input}
     onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={addTask}>Add</button>
   </div>

   <table>
    <thead>
     <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Status</th>
      <th>Action</th>
     </tr>
    </thead>

    <tbody>
     {list.length === 0 ? (
      <tr>
       <td colSpan="4">No Tasks Found</td>
      </tr>
     ) : (
      list.map(item => (
       <tr key={item.id}>
        <td>{item.id}</td>
        <td className={item.status === "completed" ? "done" : ""}>
         {item.title}
        </td>
        <td style={{ backgroundColor: "black", color: item.status === "pending" ? "yellow" : "green" }}>
         {item.status}
        </td>
        <td>
         <button className="toggle" onClick={() => toggleStatus(item.id)}>
          Toggle
         </button>
         <button className="delete" onClick={() => deleteTask(item.id)}>
          Delete
         </button>
        </td>
       </tr>
      ))
     )}
    </tbody>
   </table>
  </div>
 )
}