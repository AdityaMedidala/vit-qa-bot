"use client";
import React,{useState} from "react";
import { Send } from "lucide-react";

type InputbarProps = {
    onSend: (message: string) => void;
};

function Inputbar ({onSend}:InputbarProps) {
const[message,setMessage]=useState("")
return (
<div className="w-full flex justify-center mt-5">
  <div className="flex flex-row items-center gap-3 w-1/2">
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="flex-1 rounded-2xl border border-gray-300 px-4 py-2"
      placeholder="Ask anything here"
    />
    <Send className="active:scale-90 transition-transform" onClick={()=>{onSend(message), setMessage("")}}>
    </Send>
  </div>
</div>
)                                                                       
}
export default Inputbar;
