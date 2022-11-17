
import React, {ChangeEvent, useState} from "react";
import {Charekter} from "../model/Charekter";
import CharakterCardComponent from "./CharakterCardComponent";
import "./Galery.css"

type GalleryComponentProps={
    characters:Charekter[]
}




export default function GalleryComponent(props:GalleryComponentProps){
    let [searchCharakter, setCharacter]=useState("all");

    let [filteredCharacters, setFilterdCharacters]=useState(props.characters);

    function deleteCharacter(id:number){
        const newCharacterList = props.characters.filter(function (charakter){
            if (charakter.id !== id){
                return true
            }
        })
        setFilterdCharacters(newCharacterList)
    }

    const textOutput=(event: ChangeEvent<HTMLInputElement>)=>{
        setCharacter(event.target.value)
        console.log(event.target.value)
    }

    const result = filteredCharacters.filter((charakter)=>{
        if (charakter.name.toLowerCase().includes(searchCharakter)){
            return true
        }else {
            return false
        }
    })

    const charakterComponents = result.map((charakter) => {
        return<CharakterCardComponent charakter={charakter}key={charakter.id} deleteCharacter={deleteCharacter}></CharakterCardComponent>
    })
    return (
    <div>
        <input onChange={textOutput} />
        <section>{charakterComponents}</section>
    </div>)
}
