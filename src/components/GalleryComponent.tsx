
import React, {ChangeEvent, useState} from "react";
import {Charekter} from "../model/Charekter";
import CharakterCardComponent from "./CharakterCardComponent";
import "./Galery.css"

type GalleryComponentProps={
    characters:Charekter[]
}


export default function GalleryComponent(props:GalleryComponentProps){
    let [searchCharakter, setCharacter]=useState("all");

    const textOutput=(event: ChangeEvent<HTMLInputElement>)=>{
        setCharacter(event.target.value)
        console.log(event.target.value)

    }


    const result = props.characters.filter((charakter)=>{
        if (charakter.name.toLowerCase().includes(searchCharakter)){
            return true
        }else {
            return false
        }

    })

    const charakterComponents = result.map((charakter) => {
        return<CharakterCardComponent charakter={charakter}key={charakter.id}></CharakterCardComponent>
    })



    return (

    <div>
        <input onChange={textOutput} />
        <section>{charakterComponents}</section>
    </div>)
}
