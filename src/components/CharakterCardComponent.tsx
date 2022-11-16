import {Charekter} from "../model/Charekter";
import "./Card.css"

type CharakterCardcomponentsProps={
    charakter:Charekter
}

export default function CharakterCardComponent(props:CharakterCardcomponentsProps) {
    return(
        <a href={"https://www.adultswim.com/videos/rick-and-morty"} className={"Card"}>
            <div >
                <h3>{props.charakter.name}</h3>
                <p>{props.charakter.status}</p>

                    <img src={props.charakter.image}></img>

            </div>
        </a>
    )

}