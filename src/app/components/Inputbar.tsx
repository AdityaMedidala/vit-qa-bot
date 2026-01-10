"use client";
import React,{useState} from "react";
import { Send } from "lucide-react";

type InputbarProps = {
    onSend: (message: string) => void;
};

function Inputbar ({onSend}:InputbarProps) {
const[message,setMessage]=useState("")

function handleSubmit(e: React.FormEvent){
  e.preventDefault();
  if(message.trim()=="") return;
  onSend(message);
  setMessage("")
}

return (
<form onSubmit={handleSubmit} className="w-full">
  <div className="flex items-center gap-3 w-full px-4 py-3">
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
      placeholder="Ask anything here"
    />
    <Send
      className="w-5 h-5 text-gray-400 hover:text-white transition"
      onClick={()=>{onSend(message); setMessage("")}}
    />
  </div>
</form>
)
}

export default Inputbar;
