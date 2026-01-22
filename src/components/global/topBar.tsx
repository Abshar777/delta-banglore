import React from 'react'
import { BiSolidOffer } from 'react-icons/bi'

const TopBar = () => {
  return (
   <div style={{
    width:"100%",
    height:"2rem",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:".5rem",
    backgroundColor:"#0D1E3C",
    color:"white",
    fontSize:".7rem",
    borderBottom:"#ffffff1a 1px solid",
    gap:".5rem"
   }} className="">
   <BiSolidOffer  />
    The Course Is Free for the First 49 Joinees
     <BiSolidOffer  />
   </div>
  )
}

export default TopBar