import {Charekter} from "../model/Charekter";

type CharakterCardcomponentsProps={
    charakter:Charekter
}

export default function CharakterCardComponent(props:CharakterCardcomponentsProps) {
    return(
        <div>
            <h3>{props.charakter.name}</h3>
            <p>{props.charakter.status}</p>
            <img src={props.charakter.image}></img>
        </div>
    )

}