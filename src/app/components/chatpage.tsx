"use client";
import React,{useState,useRef,useEffect} from "react";
import Inputbar from "./Inputbar";

export default function ChatPage(){
    const [messages, setMessages] = useState([] as {sender:string, text:string}[]);
    const bottomRef=useRef<HTMLDivElement| null>(null)
    const [hasStartedMessages,sethasStartedMessages]=useState(false)

    function handleUserMessage(message:string)
    {
        console.log("User message received:", message);
        if(!hasStartedMessages)
        {
            sethasStartedMessages(true)
        }
        const Newmessages={sender:"user" ,text:message}
        setMessages(prevMessages => [...prevMessages, Newmessages]);
        handleBotMessages("This is a bot reply");
    }

    function handleBotMessages(botReply:string)
    {
        setTimeout(() => {
            const botMessage = { sender: "bot", text:botReply };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    }

    useEffect(()=> {
        if(bottomRef.current != null)
        {
            bottomRef.current.scrollIntoView ({
                behavior:"smooth"
            })
        }
    },[messages.length])

    let containerjustify:string
    if(!hasStartedMessages)
    {
        containerjustify="justify-start"
    }
    else{
        containerjustify="justify-start"
    }

    return(
        <>
        <div className="w-full max-w-4xl flex flex-col h-screen sm:h-dvh overflow-hidden pb-6">

        <div className="h-16 shrink-0" />

        <div className={`flex-1 flex flex-col min-h-0 ${containerjustify}`}>
            {/*Welcome Section */}
        {!hasStartedMessages &&(
                <div className="flex flex-col items-center gap-6 text-center px-4 mt-[8vh]">
                <h2 className="text-lg sm:text-2xl text-center">
                    Ask Anything related to college
                </h2>
                <div className="w-full max-w-xl bg-gray-700 rounded-2xl">
                    <Inputbar onSend={handleUserMessage} />
                </div>
            </div>
        )}
        {/*Chat Section*/}
        {hasStartedMessages && (
        <>
        {/* Message Area */}
        <div className="flex-1 bg-gray-700 rounded-2xl flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 flex flex-col min-h-0 overflow-y-auto px-3 sm:px-4 pt-6 pb-4 space-y-3">
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
                <div key={index} className={`flex mb-3 ${alignmentClass}`}>
                <div className={`px-4 py-2 rounded-xl max-w-[80%] sm:max-w-xs ${bubbleClass}`}>
                    {msg.text}
                </div>
                </div>
            )
        })}
        <div ref={bottomRef} />
        </div>
        {/* Sticky Bar */}
        <div className="sticky bottom-0 border-t border-white/10 bg-gray-800/80 backdrop-blur sm:static px-3 pt-2 pb-3 pb-[env(safe-area-inset-bottom)]">
        <Inputbar onSend={handleUserMessage} />
        </div>
        </div>


        </>
        )}

        </div>
        </div>
        </>
    )
}
