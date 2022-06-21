import React, {useEffect} from 'react'
import styled from "styled-components"

// import { animateScroll as Scroll, Link } from "react-scroll";


const Navside = ({setToggle, toggle}) => {

    
  return (
    <Container >
        <Wrapper>

        
        <Nav onClick={(()=>{
            setToggle(false)
        })}>About us</Nav>
        <Nav  onClick={(()=>{
            setToggle(false)
        })} > services</Nav>
        <Nav
        onClick={(()=>{
            setToggle(false)
        })}
       
        >Make Enquiry</Nav>
        <Nav
        onClick={(()=>{
            setToggle(false)
        })}
        >
        Contact</Nav>
        <Button>Contact Us</Button>
        </Wrapper>
    </Container>
  )
}

export default Navside
const Button= styled.button`
padding:12px 30px;
background: #fac017;
border:none;
outline:none;
color:#fff;
font-family:Roboto;
border-radius:4px;
font-size:16px ;

`
const Container = styled.div`
display:none;
height:100vh;
color:#fff;
font-weight:500;
font-family:poppins;
border-radius:3px;
background:#0b1d26;
transition:all 400ms;
z-index:1000;
@media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:200px;
    height:200px ;
    position:fixed;

z-index:  1000;

    right:0;
    top:70px;
transition:all 400ms

    

}
@media(max-width:320px){
    right:40px
}
`
const Wrapper= styled.div`
 
 @media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:80vh
 }
 
`
const Nav = styled.div`
cursor:pointer;
font-weight:500;
:hover{
    transition: all 300ms ;
transform:scale(1.05)
}
a{
    text-decoration:none ;
    color:#fff
}
`