import React from "react";
import styled from "styled-components";

const Btn = styled.button`
display:block;
margin:0 auto`

export const Button = ({incremetPage}) => (
    <Btn  onClick={incremetPage}>Load more</Btn>
)