import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'
import { selectCars } from '../features/car/CarSlice'
import { useSelector } from 'react-redux'
function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);

  const cars=useSelector(selectCars);

  return (

    
    <Container>
      
        <img src="/images/logo.svg" alt="" />
      
      <Menu>
        {cars && cars.map((car,index)=>(
            <p key={index}>{car}</p>
        ))}
       

      </Menu>
      <RightMenu>
        <p>Shop</p>
        <p>Tesla Account</p>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CustomWrapper>
          {cars && cars.map((car,index)=>(
            <li key={index}>{car} </li>
          ))}
          
          <li>Used Inventory</li>
          <li>Trade-in </li>
          <li>Cybertruck </li>
          <li>RoadSter </li>
          <li>Semi </li>
          <li>Existing Inventory</li>
          <li>Existing Inventory</li>
          <li>Existing Inventory</li>
        
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding 0 20px;
top:0;
left:0;
right:0;
justify-content:space-between;
z-index:1;
`

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
p{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
}
@media (max-width:768px){
  display:none;
}
`

const RightMenu=styled.div`
display:flex;
align-items:center;
p{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  cursor:pointer;
}
`

const CustomMenu =styled(MenuIcon)`

cursor:pointer;`

const BurgerNav=styled.ul`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transition:transform 0.2s ;
transform:${props=>props.show? 'translateX(0)' : 'translateX(100%)'};
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
  font-weight:600;
  cursor:pointer;
}

`

const CustomClose=styled(CloseIcon)`

cursor:pointer;
`
const CustomWrapper=styled.div`

display:flex;
justify-content:flex-end;
`