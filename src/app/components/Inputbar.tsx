"use client";
import React,{useState} from "react";
import { Send } from "lucide-react";

type InputbarProps = {
    onSend: (message: string) => void
    disabled:boolean
};

function Inputbar (props:InputbarProps) {
const[message,setMessage]=useState("")

function handleSubmit(e: React.FormEvent){
  e.preventDefault();
  if(message.trim()=="") return;
  props.onSend(message);
  setMessage("")
}

return (
<form onSubmit={handleSubmit} className="w-full">
  <div className="flex items-center gap-3 w-full px-3 py-2">
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="flex-1 bg-transparent text-white placeholder-gray-400 focus:ring-0"
      placeholder="Ask anything here"
      disabled={props.disabled}
    />
    <button type="submit" disabled={props.disabled}>
      <Send className="w-5 h-5 text-gray-400 hover:text-white transition" />
    </button>
  </div>
</form>
)
}

export default Inputbar;
