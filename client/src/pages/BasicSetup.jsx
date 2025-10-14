
import React from 'react'
import { anticipate, motion } from "motion/react"

function BasicSetup() {
  return (
    <div>
      <motion.div className='box' 
      drag whileDrag={{scale:0.8}} 
      dragConstraints={{left:0,top:0,right:1000, bottom:500}} 
      animate={{ x: [0,800,800,0,0], y:[0,0,300,300,0], rotate: 360, scale:1.2 }}
      transition={{duration:3, delay:1}}
      >

      </motion.div>
      {/* <motion.div className='circle' initial={{x:800}} animate={{ x: 1000, y:500 }} transition={{duration:3, repeat:Infinity, ease:anticipate}}>

      </motion.div> */}
    </div>
  )   
}

export default BasicSetup