"use client";
import React,{useState,useRef,useEffect} from "react";
import { Loader2 } from "lucide-react";
import Inputbar from "./Inputbar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatPageProps ={
    onStart:()=>void
};
export default function ChatPage({onStart}:ChatPageProps){
    const [messages, setMessages] = useState([] as {sender:string, text:string}[]);
    const bottomRef=useRef<HTMLDivElement| null>(null)
    const [hasStartedMessages,sethasStartedMessages]=useState(false)
    const [conversationId,setconversationId]=useState<string | null>(null);
    const[isLoading,setisLoading]=useState(false)

    async function handleUserMessage(message:string)
    {
        //For redundancy
        if(!message.trim()){
            return
        }
        console.log("User message received:", message);
        if(!hasStartedMessages)
        {
            sethasStartedMessages(true)
            onStart();
        }
        const Newmessages={sender:"user" ,text:message}
        setMessages(prevMessages => [...prevMessages, Newmessages]);
        try{
        setisLoading(true)

        const response=await fetch(
           `${process.env.NEXT_PUBLIC_API_URL}/chat`,
           {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message:message,
                conversation_id: conversationId
            }),

           },
        );

        const data= await response.json()
        setconversationId(data.conversation_id);

        setMessages(prev=>[...prev,{sender:"bot",text:data.reply}])

    } catch (error) {
        setMessages(prev1 =>[...prev1,{
            sender:"bot",
            text:"Having trouble responding.Try Again Later"
        }])
    } finally {
        setisLoading(false)
    }

    }



    useEffect(()=> {
        if(bottomRef.current != null)
        {
            bottomRef.current.scrollIntoView ({
                behavior:"smooth"
            })
        }
    },[messages.length])

    return(
        <>
        <div className="w-full max-w-4xl flex flex-col h-screen sm:h-dvh overflow-hidden pb-6">

        <div className="h-16 shrink-0" />

        <div className={`flex-1 flex flex-col min-h-0 justify-start`}>
            {/*Welcome Section */}
        {!hasStartedMessages &&(
                <div className="flex flex-col items-center gap-6 text-center px-4 mt-[8vh]">
                <h2 className="text-lg sm:text-2xl text-center">
                    Ask Anything related to college
                </h2>
                <div className="w-full max-w-xl bg-gray-700 rounded-2xl">
                    <Inputbar onSend={handleUserMessage} disabled={isLoading} />
                </div>
            </div>
        )}
        {/*Chat Section*/}
        {hasStartedMessages && (
        <>
        {/* Message Area */}
        <div className="flex-1 bg-gray-700 rounded-2xl flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 flex flex-col overflow-y-auto px-3 sm:px-4 pt-6 pb-4 space-y-3">
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
                <div className={`px-4 py-2 rounded-xl max-w-[75%] ${bubbleClass}`}>
                    {/*=== for strict equality and GitHub markdowns */}
                    {msg.sender ==="bot"?(
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {msg.text}
                        </ReactMarkdown>
                    ):(msg.text)}
                </div>
                </div>
            )
        }
        
        )

        
        }
        {/*Spinner loading*/}
        { isLoading && (
            <div className="flex justify-start px-3">
                <Loader2 className="w-5 h-5 animate-spin text-gray-400"/>

            </div>

        )



        }


        <div ref={bottomRef} />
        </div>
        {/* Sticky Bar to keep mobile responsiveness */}
        <div className="sticky bottom-0 border-t border-white/10 bg-gray-700 px-3 pt-2 pb-3 rounded-b-2xl">
        <Inputbar onSend={handleUserMessage} disabled={isLoading} />
        </div>
        </div>


        </>
        )}

        </div>
        </div>
        </>
    )
}
