
import React, {ChangeEvent, useEffect, useState} from "react";
import {Charekter} from "../model/Charekter";
import CharakterCardComponent from "./CharakterCardComponent";
import "./Galery.css"
import axios from "axios";

type GalleryComponentProps={
    characters:Charekter[]
}




export default function GalleryComponent(props:GalleryComponentProps){
    let [searchCharacter, setSearchCharacter]=useState("all");


    const [characters,setCharacters]=useState<Charekter[]>([])

    useEffect(()=>{
        getCharakter()
    },[])

    function getCharakter(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response)=>{
                setCharacters(response.data.results)
            })
    }



    function deleteCharacter(id:number){
        const newCharacterList = characters.filter(function (charakter){
            if (charakter.id !== id){
                return true
            }
        })
        setCharacters(newCharacterList)
    }

    const textOutput=(event: ChangeEvent<HTMLInputElement>)=>{
        setSearchCharacter(event.target.value)
        console.log(event.target.value)
    }
    console.log(characters)
    const result = characters.filter((character)=>{
        if (character.name.toLowerCase().includes(searchCharacter)){
            return true
        }else {
            return false
        }
    })

    const charakterComponents = result.map((charakter) => {
        return<CharakterCardComponent character={charakter}key={charakter.id} deleteCharacter={deleteCharacter}></CharakterCardComponent>
    })
    return (
    <div>
        <input onChange={textOutput} />
        <section>{charakterComponents}</section>
    </div>)
}
