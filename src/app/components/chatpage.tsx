"use client";
import React,{useState} from "react";
import Inputbar from "./Inputbar";
export default function ChatPage(){
    const [messages, setMessages] = useState([] as {sender:string, text:string}[]);
    function handleUserMessage(message:string)
    {
        const Newmessages={sender:"user" ,text:message}
        setMessages(prevMessages => [...prevMessages, Newmessages]);

    }
    function handleBotMessages(botReply:string)
    {
        setTimeout(() => {
        const botMessage = { sender: "bot", text:botReply };
        setMessages(prev => [...prev, botMessage]);
        }, 1000);

    }
    


    return(
        <>
        <div className="flex-1 overflow-y-auto bg-gray-700 p-4 rounded-2xl">
         {messages.map((msg,index)=> {
            let alignmentClass=""
            let bubbleClass=""
            if (msg.sender === "user") {
                alignmentClass = "justify-end";
                bubbleClass = "bg-blue-500 text-white";
            } else {
                alignmentClass = "justify-start";
                bubbleClass = "bg-gray-300 text-black";
            
            }
            return (
                <div key={index} className={`flex mb-2 ${alignmentClass}`}>
                <div className={`px-4 py-2 rounded-xl max-w-xs ${bubbleClass}`}>
                    {msg.text}
                </div>
                </div>
            )
        })}
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-700 p-4 rounded-2xl">
        </div>
        <div>
            This is the ChatPage
            <Inputbar onSend={handleUserMessage} />
        </div>
        </>
    )
}

