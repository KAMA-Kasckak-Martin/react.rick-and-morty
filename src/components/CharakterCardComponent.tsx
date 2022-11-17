import {Charekter} from "../model/Charekter";
import "./Card.css"
import {type} from "os";

type CharakterCardcomponentsProps={
    charakter:Charekter,
    deleteCharacter(id:number):void

}



export default function CharakterCardComponent(props:CharakterCardcomponentsProps) {
    function deleteCharacter(){
        props.deleteCharacter(props.charakter.id)
    }
    return(

            <div className={"Card"}>
                <button onClick={deleteCharacter}>banane</button>
                <h3>{props.charakter.name}</h3>
                <p>{props.charakter.status}</p>
                <a href={"https://www.adultswim.com/videos/rick-and-morty"} >
                    <img src={props.charakter.image}></img>
                </a>
            </div>

    )

}