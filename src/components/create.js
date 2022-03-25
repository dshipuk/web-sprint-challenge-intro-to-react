import React from "react";
import styled from "styled-components";


const WrapperStyle = styled.div`
`

const Style = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
max-width: 25%;
margin: 10px auto;
background-color: rgba(0, 32, 255, 0.75);
padding-left: 25px;
padding-right: 25px;
border-radius: 25px
`

const NameStyle = styled.h1`
text-shadow:1px 1px 10px #fff, 1px 1px 10px #0060FF;
`
const BirthStyle = styled.h1`
text-shadow:1px 1px 10px #fff, 1px 1px 10px #0060FF;
`


const Char = (props) => {

    const {info} = props;

    return (
        <WrapperStyle className="wrapper">
            <Style className="holder">
                <NameStyle className="name">{info.name}</NameStyle>
                <BirthStyle className="birth">{info.birth_year}</BirthStyle>
            </Style>
        </WrapperStyle>
    )
}

export default Char;