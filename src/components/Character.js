// Write your Character component here
import React from "react";
import Char from "./create.js";
import styled from "styled-components";

const ContainerStyle = styled.div`
background-color: rgba(0, 0, 0, 0.5)
`

const Characters = (props) => {

    return (
        <ContainerStyle className="container">
            {props.data?.map(ele => {
                console.log(ele)
                return <Char info={ele} />
            })}
        </ContainerStyle>
    )
};

export default Characters;