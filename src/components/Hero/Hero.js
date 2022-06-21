import React, {useState,useEffect} from 'react'
import styled from "styled-components"
import Header from '../Header/Header'
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
    const [scroll, setScroll] = useState(false);

	const getScroll = () => {
		const check = window.scrollY;
		if (check >= 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	window.addEventListener("scroll", getScroll);
    useEffect(()=>{
Aos.init({duration:1500})
    }, [])
  return (
      <div 
      >
          
          <Header
          bc={scroll ? "bc" : ""}
          />

          
   <Container>
<Wrapper>
    <Top>
        <Line></Line>
        <Text>THE 
            BRIDGE  FOR MARITIME  OIL  &  GAS</Text>
    </Top>
    <Play data-aos="fade-right">
        synergizing maritime and oil & gas
    </Play>
    <FFF>Follow us
        <div style={{marginBottom:"20px"}}>
            <img src ="/images/Vector (5).svg"/>
        </div>
        <div>
            <img src ="/images/Vector (6).svg"/>
        </div>
    </FFF>
</Wrapper>
<Box>

</Box>
<Holder>
<Left data-aos="fade-up">
<Abt>
    <Dash></Dash>
    <Abu>ABOUT US</Abu>
</Abt>
<Pass>
    Our passion drives our solution
</Pass>
<Textt>
Exclusive Storm Oil & Gas was born out of passionate desire to bridge the inconspicuous gap between the Oil & Gas and Maritime sectors. These gaps very often amount to huge loss of revenue resulting from prolonged and extended project duration, inefficient supply chain management & logistics and equipment sourcing. At Storm Oil, we leverage on our broad client management experience, skilled workforce and industry expertise to deliver safe, quality and cost-efficient services that consistently exceed customer's expectations. 
</Textt>
    </Left>
<Right data-aos="fade-down">
<img src ="/images/ttt.svg"/>
    </Right>
</Holder>

  
   </Container>
   <Bottom>
  <Wavehold>
  <Waves>

</Waves>
<Waver>
    <Cardhold data-aos="fade-up">
    <Card>
        <Cardwrap>
        <Image>
            <img src ="/images/vector.svg"/>
        </Image>
        <Topics>
OUR VISION
        </Topics>
        <Types>

        We are committed to being the preferred service provider and trusted partner/advisor in the Maritime and Oil & Gas sectors by supporting our numerous customers from the project conceptualization phase to successful implementation via constant collaboration to deliver on set goals within approved budget provisions.
        </Types>
        
</Cardwrap>
    </Card>
    <Card3>
        <Cardwrap>
        <Image>
            <img src ="/images/Vector (1).svg"/>
        </Image>
        <Topics>
MISSION STATEMENT
<div style={{display:"flex",
justifyContent:"center", marginTop:"20px"}}>
    <img src ="/images/“.svg"/>
</div>
        </Topics>
        <Types>
        Our mission is to deliver safe and high-quality services in a cost-efficient manner that bring value to our esteemed customers. 
        </Types>
        
</Cardwrap>
    </Card3>
    <Card2>
        <Cardwrap>
        <Image>
            <img src ="/images/Vector (2).svg"/>
        </Image>
        <Topics>
CORE VALUES
        </Topics>
        <div style={{fontFamily:"Roboto"}} >
        <ul>
            <li>
        People- the society and workforce</li>
<li>Excellent customer experience</li>
<li>Exceptional Service delivery</li>
<li>Safety and Quality</li>
<li>Professionalism and Compliance with industry best </li> practices
<li>Diversity, Equality and inclusiveness</li>

</ul> 
        </div>
        
</Cardwrap>
    </Card2>
    </Cardhold>
  
    </Waver>
    
  </Wavehold>
  <Last>
  <Lbox>

     
  </Lbox>
  </Last>
  <Wrapps>
  <Storm>
      <Logo >
STORM OIL<div style={{fontFamily:"Roboto"}}>Oil & Gas, Maritime Services</div>
<div style={{fontFamily:"Roboto", color: "rgba(255, 255, 255, 0.5)"}}>
Oil and Gas, Maritime and Equipment Leasing, Rental & Leasing services
</div>
            </Logo> 
      </Storm>
      <Quick>
<div style ={{color:"#fac017"}}>Quick Link</div>

<br/>
<div>Our Services</div>
<br/>
<div>Make Enquiries</div>
<br/>
<div>Contact us</div>
<br/>
<div>Terms and Conditions</div>
      </Quick>
      <Phone>
          <TT>
              <img src ="/images/Vector (3).svg"/><span>phone</span>
          </TT>

              <br/>
              <div>Mon - Fri: 8am -5pm </div>
              <br/>
              <div>+234 803-865-0055</div>
      </Phone>
      <Location>
          <Up>
          <img src ="/images/Vector (4).svg"/><span>location</span>
          </Up>
          <br/>
          <div>22 Orelope Str, Egbeda, Lagos State, Nigeria.</div>
      </Location>
  </Wrapps>
  
      
</Bottom>

   </div>
  )
}

export default Hero
const FFF = styled.div`
color:#fff;
transform: rotate(90deg);
position:absolute;
font-family:Roboto;
top:250px;
left:-50px ;

display:flex;
justify-content:space-between;
width:180px;
/* background: red; */
@media(max-width:600px){
    display:none ;
}
`
const Card3 = styled.div`
width:350px;
height:400px;
border-radius:15px;
box-shadow: 4px 5px 20px 3px rgba(53, 65, 71, 0.15);
margin:40px;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:1204px){
    width:300px;
};
@media(max-width:600px){
    display:none ;
}
`
const Up = styled.div`
display:flex ;
align-items:center;
justify-content:space-between;
width:90px
`
const Location = styled.div`
color:#fff;
width:200px;
display:flex ;
/* align-items:center; */
flex-direction:column ;
@media(max-width:672px){
    margin-top:20px ;
}
@media(max-width:400px){
    margin-top:30px ;   
}
`
const Phone = styled.div`
color:#fff;
width:200px;
@media(max-width:400px){
    margin-top:30px ;   
}
`
const TT = styled.div`
color:#fff;
justify-content:space-between;
width:80px;


display:flex ;
/* align-items:center; */
/* flex-direction:column ; */
`
const Quick = styled.div`
color:#fff;
width:200px;

@media(max-width:400px){
    margin-top:30px ;   
}
`
const Wrapps = styled.div`
position:absolute ;
bottom:-2000px;
/* left:100px; */
display:flex;
justify-content:space-evenly ;
width:100%;
flex-wrap:wrap ;
/* @media(max-width:800px){
    flex-direction:column;
    align-items:center;
    /* justify-content:center */
@media(max-width:400px){
flex-direction:column;
/* justify-content:center */
align-items:center;
}
`
const Logo = styled.div`
width:200px;
font-weight:500;
color:#fff;
cursor:pointer ;
font-family:playfair Display ;
`
const Storm = styled.div`
@media(max-width:400px){
  display  :none ;
}
`
const Lbox = styled.div` 
background: rgba(11, 29, 38, 0.9);
mix-blend-mode: multiply;
/* background:red ; */
position:absolute;
width:100%;
height:600px ;
`
const Last = styled.div`
position:absolute;
width:100%;
/* left: -101px; */
bottom: -2100px;
background-position:center ;
background-size:cover ;
height:600px;
background-repeat:no-repeat ;
background:url("/images/unsplash_hy97yy3e03A.svg"), #C4C4C4;
/* mix-blend-mode: multiply; */

`
const Cardhold=styled.div`
display:flex ;
justify-content:center;
flex-wrap:wrap ;
width:100%;
position:absolute;
bottom:-30px;
@media(max-width:1204px){
    flex-direction:row-reverse ;
}
`
const Card = styled.div`
width:350px;
height:400px;
border-radius:15px;
box-shadow: 4px 5px 20px 3px rgba(53, 65, 71, 0.15);
margin:40px;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:1204px){
    width:300px
}
`

const Card2 = styled.div`
width:350px;
height:400px;
border-radius:15px;
box-shadow: 4px 5px 20px 3px rgba(53, 65, 71, 0.15);
margin:40px;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:1204px){
    display:none ;
}
`
const Cardwrap = styled.div`
width:300px;
/* background:red; */
height:350px;
display:flex ;
justify-content:center;
align-items:center;
flex-direction:column ;


`
const Image = styled.div`
background:#FBD784;
width:100px;
height:100px;
border-radius:50px ;
display:flex ;
justify-content:center;
align-items:center;
margin-bottom:20px ;
img{
   width:50px;
}

`
const Topics = styled.div`
font-weight:600;
font-size:20px;
margin-bottom:20px ;
font-family:Roboto ;
`
const Types = styled.div`
text-align:center ;
font-family:Roboto ;
/* text-align:aligned ; */

`
const Wavehold = styled.div`
/* background:red ; */
height:800px;
position:absolute ;
width:100% ;
bottom:-1500px;
z-index:100 ;
`
const Waver = styled.div`
background-image:url("/images/svg (1).png");

width:100% ;
height:800px;
/* position:absolute ; */
background-position:center ;
background-size:cover ;

`
const Waves = styled.div`
background-image:url("/images/svg.png") ;
width:100% ;
height:500px;
/* position:absolute ; */
background-position:center ;
background-size:cover ;
/* bottom:-400px */
/* display:flex;
justify-content:center; */
`
const Holder = styled.div`
display:flex ;
position:absolute;
bottom:-320px;
left:0 ;
right:0 ;
justify-content:space-around ;
align-items:center;
/* width:1200px; */
@media(max-width:768px){
    flex-direction:column ;
    /* background:red ; */
}
@media(max-width:500px){
  width:300px;
  bottom:-600px;
  margin:auto ;
}
`
const Bottom = styled.div`
height:1700px;
background:#0b1d26;
width:100%;
/* position:absolute;
bottom: -050px; */
`
const Left = styled.div`

width:600px;
color:#fff;
@media(max-width:768px){
   text-align:center ;
}
@media(max-width:600px){
  width:400px;
  
}
@media(max-width:500px){
  width:300px;
  
}
`
const Abt = styled.div`
display:flex;
align-items:center;
justify-content:space-around ;
width:170px;
font-family:Roboto ;
`
const Dash = styled.div`
width:50px;
height:1.5px;
background:#fac017;
margin-bottom:20px ;

`
const Abu= styled.div`
color:#fac017;
margin-bottom:20px ;


`
const Pass = styled.div`
font-weight:800;
font-size:70px;
font-family:Roboto;
margin-bottom:20px ;
@media(max-width:600px){
  font-size:30px
}
`
const Textt = styled.div`
font-family:Roboto;
font-size:18px;
`
const Right = styled.div`
width:300px;
img{
    width:100%
}
@media(max-width:768px){
    margin-top:20px
}
`
const Base = styled.div`
background:#0b1d26;
position:absolute;
width:100%;
height:250px;
bottom:-300px;
display:flex ;
justify-content:center
`
const Play = styled.div`
text-transform:capitalize;
font-family:playfair Display;
font-style: normal;
font-weight: 400;
font-size: 88px;
line-height: 100px;
text-align: right;
color:#fff;
width:900px;
@media(max-width:900px){
    width:400px;
font-size: 60px;
line-height: 60px;


}
@media(max-width:600px){
    width:280px;
font-size: 20px;
line-height: 40px;
text-align: center;




}


`
const Container = styled.div`
background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%),url("/images/ship 1.svg");
 
width:100% ;
height:1100px;
display:flex;
justify-content:center;
position:relative;
/* align-items:center; */
/* min-height:calc(100vh - 70px); */
background-position:center ;
background-size:cover ;
@media(max-width:500px){
   height:100vh




}
`
const Top= styled.div`
/* background:red; */
margin-top:190px;
margin-left:400px;
display:flex;
justify-content:space-around;
align-items:center;
width:513px;
@media(max-width:900px){
    margin-left:0 ;


}
@media(max-width:500px){
    width:280px;
    margin-left:0 ;



}
`
const Line = styled.div`
width:100px;
height:1px;
background:#fac017;
@media(max-width:500px){
display:none ;



}
`
const Text = styled.div`
font-weight:800;
font-family:Roboto ;
color:#fac017;
font-style:normal ;
font-size:20px;
@media(max-width:900px){
font-size:18px;
}
@media(max-width:500px){
font-size:18px;
}
/* line-height:100px; */
`
const Wrapper = styled.div``
const Box = styled.div`
height:660px;
width:100%;
background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);
position:absolute;
bottom:-250px
`