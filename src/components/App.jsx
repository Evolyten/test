import React, {useState } from "react";
import  SearchBar  from "./Searchbar/Searchbar";
import { ImageGaller } from "./ImageGallery/ImageGaller";




export default function App1() {
  const [name, setName] = useState('')
  
  const userName = value => {
    let k = value['query']

    setName(k)
  }


   return (
     <div>
        <SearchBar submitForm={userName} />
        <ImageGaller userPick={name} />
        

     </div>)
 }




