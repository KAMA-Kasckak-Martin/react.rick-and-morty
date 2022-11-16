
import React from "react";
import {Charekter} from "../model/Charekter";
import {CHARACTER} from "./characterRickAndMorty";
import CharakterCardComponent from "./CharakterCardComponent";

type GalleryComponentProps={
    characters:Charekter[]
}


export default function GalleryComponent(props:GalleryComponentProps){
    const charakterComponents = props.characters.map((charakter,index) => {
        return<CharakterCardComponent charakter={charakter}key={charakter.id}></CharakterCardComponent>
    })

    return (<section>{charakterComponents}</section>)
}
