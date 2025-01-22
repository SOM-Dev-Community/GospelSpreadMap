import React, { useEffect } from 'react'
import './Home.css'
import MapView from '../../components/map/MapView'
import { Button, Divider, Typography, useMediaQuery } from '@mui/material'
import { green } from '@mui/material/colors'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import logo from '../../assets/GSMAPLOGO.png'

const Home = () => {
  const [visible, setVisible] = React.useState(true)
  const matches = useMediaQuery("(min-width:768px)");
  useEffect(()=> {
    setVisible(matches)
  }, [matches])
  return (
    <div className='Home'>
      <nav className='home-navbar'>
        <NavigationMenu visible= {visible} setVisible= {setVisible}/>
        <img src={logo} alt='  GSMAP' className='logo'/>
      </nav>
        <h1 className="title1" style={{ color: "white",  fontFamily: "Times new roman" }}>THE GOSPEL SPREAD MAP</h1>
      <MapView/>
      <div className={visible ? 'reach-percentage' : 'reach-percentage hidden'}>
        <Typography sx={{fontSize: 52, fontStretch: 'expanded', fontFamily: "Smooch sans", lineHeight: "1.1", fontWeight: 500}}>60%</Typography>
        <Typography sx={{fontSize: 18, fontStretch: 'expanded', fontFamily: "Smooch sans", lineHeight: "1", fontWeight: 500, textTransform:"capitalize"}}>spread rate of the gospel around the world</Typography>
      </div>
      <div className={visible ? 'color-codes-info' : 'color-codes-info hidden'}> 
        <Typography className='color-codes' sx={{padding: "5px", fontSize: 14}}>Where the Gospel is yet to reach</Typography>
        <Divider/>
        <Typography className='color-codes' sx={{padding: "5px", fontSize: 14}}>Where the Gospel has reached</Typography>
      </div>
      <Button sx={{flexDirection:"column", backgroundColor: green[800], color: 'black', position: "fixed", bottom: "7%", marginLeft: "40px", marginRight: "40px"}}>
        <Typography sx={{fontWeight: 800, lineHeight: 1.1, fontSize: 16}}>CLICK TO UPLOAD YOUR REPORT IF YOU HAVE EVANGEIZED A</Typography>
        <Typography sx={{fontWeight: 600, fontSize:12}}>STREET, TOWN, CITY, STATE, COUNTRY FOR THE GOSPEL</Typography>
      </Button>
    </div>
  )
}

export default Home
