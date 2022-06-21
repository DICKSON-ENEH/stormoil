import React, {useState} from 'react'
import styled from "styled-components"
import Navside from "./Navside"
import {BiMenuAltRight} from "react-icons/bi"
import {MdOutlineCancel} from "react-icons/md"
// import { animateScroll as Scroll, Link } from "react-scroll";
// import {Link} from "react-router-dom"
const Header = ({bc}) => {
//     const [scroll, setScroll] =React.useState(false);
// window.addEventListener("scroll", getScroll);
// 	const getScroll = () => {
// 		const check = window.scrollY;
// 		if (check >= 70) {
// 			setScroll(true);
// 		} else {
// 			setScroll(false);
// 		}
// 	};
    const [toggle , setToggle] = useState(false)

    const change = ()=>{
        setToggle(!toggle)
    }
  return (
      <>
    <Container bc={bc}>
        <Wrapper>
            <Logo >
STORM OIL<div>Oil & Gas, Maritime Services</div>
            </Logo>
            <Navigation>
                <Navs style={{borderBottom:"solid 1px #fac017"}}>About Us</Navs>
                <Navs >Services</Navs>
                <Navs >Make Enquiry</Navs>
              
            </Navigation>
            <Last>
                <Button>Contact Us</Button>
            </Last>
            <Side>
            { 
  
  toggle? 
<MdOutlineCancel onClick={change}/>:
<BiMenuAltRight onClick={change}/>





  }
  </Side>
        </Wrapper>
        
    
    </Container>
    { toggle? <Navside setToggle={setToggle} toggle={toggle}/>:null}
    
    </>
  )
}

export default Header
const Last = styled.div``
const Button= styled.button`
padding:12px 30px;
background: #fac017;

border:none;
outline:none;
color:#fff;
font-family:Roboto;
border-radius:4px;
font-size:16px ;
:hover{
    transform:scale(1.05) ;
    transition:all 300ms;
    cursor:pointer ;
}
@media(max-width:768px){
display:none




}
`
const Container = styled.div`
/* position:fixed ; */
color:#fff;
display:flex;
justify-content:center;
/* align-items:center ; */
height:70px;
font-family:poppins;
/* background:transparent; */
background-color: ${({ bc }) => (bc ? "#0B1D26" : "transperant")};
	color: ${({ bc }) => (bc ? "white" : "black")};
position:fixed ;
z-index:1000 ;

    
width:100%;
color:#000
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
width:95%
`
const Logo = styled.div`
width:200px;
font-weight:500;
color:#fff;
cursor:pointer ;
img{
    width:100%
}
:hover{
    transition: all 300ms ;
    transform:scale(1.05)
}
div{
    font-size:10px
}
`
const Navigation = styled.div`
display:flex;
justify-content:space-between;
width:400px;
@media(max-width:768px){
    display:none
}
`
const Navs = styled.div`
font-weight:400;
font-size:18px;
text-decoration:none;
color:#fff;
a{
    text-decoration:none ;
    color:#fff
}

cursor:pointer ;
:hover{
    transition:all 300ms;
    transform:scale(1.05)
}
`
const Side = styled.div`
color:#fff;
display:none;
cursor:pointer ;
font-size:35px;
@media(max-width:768px){
    display:block
}
` 