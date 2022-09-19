import React from "react";
import styled from "styled-components";

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;`

const Wrap = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 600px;
    height: 400px;
    background-color:#fff`

const Img = styled.img`
    width:100%;
    height:100%;`
export const Modal = ({currentImg, closeModal}) => (
    <BackDrop onClick={closeModal}>
  <Wrap>
    <Img src={currentImg.largeImageURL} alt="" />
  </Wrap>
</BackDrop>
)
