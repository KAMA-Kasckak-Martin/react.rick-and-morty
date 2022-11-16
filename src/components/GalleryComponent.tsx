
import React from "react";
import {Charekter} from "../model/Charekter";
import {CHARACTER} from "./characterRickAndMorty";

type GalleryComponentProps={
    characters:Charekter[]
}


export default function GalleryComponent(props:GalleryComponentProps){
    const charakterComponents = props.characters.map((charakter,index) => {
      return<
    })
}