import React from 'react'
import styled from 'styled-components'


const Package = () => {
  return (
    <div>
      <Heading1>Package Options</Heading1>
      <CardContain>
        <input type="radio" name="same-name"></input>
          <BorderCard>
            
            <Heading>
            Gangotri- Kedartal- Harsil Valley Trek Package
            </Heading>
            <Description><b>Dehradun to Dehradun</b> (Pickup and drop at Dehradun)</Description>
            <PackageInc>
              <p>Package Includes:</p>
              <div className="img_logo">
              <img src="./Images/Fast Food.png"></img>
              <img src="./Images/London Cab.png"></img>
              <img src="./Images/Hotel Door.png"></img>
              <img src="./Images/3D Glasses.png"></img>
              <img src="./Images/Fire.png"></img>
              <img src="./Images/Kayaking.png"></img>
              </div>
            </PackageInc>
           
            <Position>
              <p>NOW AT <s>6999/-</s></p>
              <p><span>4999/-</span> per person</p>
            </Position>
          </BorderCard>
        
      </CardContain>
      <CardContain>
        <input type="radio" name="same-name"></input>
          <BorderCard>
            
            <Heading>
            Gangotri- Kedartal- Harsil Valley Trek Package
            </Heading>
            <Description><b>Dehradun to Dehradun</b> (Pickup and drop at Dehradun)</Description>
            <PackageInc>
              <p>Package Includes:</p>
              <div className="img_logo">
              <img src="./Images/Fast Food.png"></img>
              <img src="./Images/London Cab.png"></img>
              <img src="./Images/Hotel Door.png"></img>
              <img src="./Images/3D Glasses.png"></img>
              <img src="./Images/Fire.png"></img>
              <img src="./Images/Kayaking.png"></img>
              </div>
            </PackageInc>
           
            <Position>
              <p>NOW AT <s>6999/-</s></p>
              <p><span>4999/-</span> per person</p>
            </Position>
          </BorderCard>
        
      </CardContain>

      
      
    </div>
  )
}

const Heading1=styled.h1`

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 34px;

color: #57BEBE;
padding-left:15px;
padding-bottom:15px;
`

const CardContain=styled.div`


`
const BorderCard=styled.div`
margin-left:20px;
position:relative;
width:783px;
height:187px;
padding:20px;

background: rgba(255, 252, 228, 0.3);
border: 2px solid #57BEBE;
border-radius: 30px;
`

const Heading=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
/* identical to box height */
color: #57BEBE;
`
const Description=styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;

color: rgba(0, 0, 0, 0.55);

`
const PackageInc=styled.div`
margin-top:60px;

p{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;

color: #57BEBE;
}
.img_logo{
  display:flex;
  
  align-items:center;
}
.img_logo img{
  padding:8px;
}
`
const Position=styled.div`
position:absolute;
right: 0px;
    top: 126px;
width:30%;

span{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */


color: #57BEBE;
}

s{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
text-decoration-line: line-through;

color: rgba(0, 0, 0, 0.55);

}


`


export default Package