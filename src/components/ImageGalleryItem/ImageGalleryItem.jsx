import React from "react";
import styled from "styled-components";


const Item = styled.li`
width:300px;
height:200px;
margin:0 30px 30px 0
`
const Img = styled.img`
width:100%;
height:100%`

export const ImageGalleryItem = ({ src, keys, userPick }) => (
     <Item key={keys}><Img src={src} alt="" onClick={()=>userPick(keys)}/></Item>) 


