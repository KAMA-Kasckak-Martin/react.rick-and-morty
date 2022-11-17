import {ChangeEvent, ChangeEventHandler, useState} from "react";

export default function SearchCharacter(){
    let [searchCharakter, setCharacter]=useState("all");

    const textOutput=(event: ChangeEvent<HTMLInputElement>)=>{
        return event.target.value

    }

    return(
        <div>
            <input onChange={textOutput} />
        </div>
    )
}