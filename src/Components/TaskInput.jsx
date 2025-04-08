import React, { useEffect, useState } from "react";
import usetodo from "../TodoContext/TodoContext";

const TaskInput = () => {
  
  const [expanded, setExpanded] = useState(false); 
  const [title, setTitle] = useState("");          
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal"); 

  // method from context
  const { addTodo } = usetodo();

  // Function to add a new task
  const handleAdd = () => {
    addTodo(Date.now(), title, description, priority); 
    setTitle("");             
    setDescription("");       
    setPriority("normal");     
    setExpanded(false);        
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-4 transition-all duration-300">
      
      
      {!expanded ? (
        <input
          onFocus={() => setExpanded(true)} 
          placeholder="Add a task..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      ) : (
       
        <div className="space-y-4">
          {/* Title input */}
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            autoFocus
          />

         
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

        
          <div className="flex items-center justify-between">
           
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="px-4 py-2 w-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>

          
            <div className="flex gap-2">
              <button
                onClick={handleAdd}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm"
              >
                Add
              </button>
              <button
                onClick={() => setExpanded(false)} 
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskInput;
