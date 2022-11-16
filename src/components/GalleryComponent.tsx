
import React from "react";
import {Charekter} from "../model/Charekter";
import CharakterCardComponent from "./CharakterCardComponent";
import "./Galery.css"

type GalleryComponentProps={
    characters:Charekter[]
}


export default function GalleryComponent(props:GalleryComponentProps){
    const charakterComponents = props.characters.map((charakter) => {
        return<CharakterCardComponent charakter={charakter}key={charakter.id}></CharakterCardComponent>
    })

    return (<section>{charakterComponents}</section>)
}
