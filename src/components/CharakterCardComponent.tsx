import {Charekter} from "../model/Charekter";
import "./Card.css"
import {type} from "os";
import {useEffect, useState} from "react";
import axios from "axios";

type CharakterCardcomponentsProps={
    character:Charekter,
    deleteCharacter(id:number):void


}



export default function CharakterCardComponent(props:CharakterCardcomponentsProps) {

    function deleteCharacter(){
        props.deleteCharacter(props.character.id)
    }
    return(

            <div className={"Card"}>
                <button onClick={deleteCharacter}>banane</button>
                <h3>{props.character.name}</h3>
                <p>{props.character.status}</p>
                <a href={"https://www.adultswim.com/videos/rick-and-morty"} >
                    <img src={props.character.image}></img>
                </a>
            </div>

    )

}