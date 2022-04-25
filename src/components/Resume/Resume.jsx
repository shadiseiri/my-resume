import React from 'react'
import { shoppingCartObj, spaObj, todoObj } from '../InfoSection/data'
import InfoSection from '../InfoSection/InfoSection'

const Resume = () => {
  return (
    <div id='portfolio'>
    <InfoSection {...spaObj} />
    <InfoSection {...todoObj}/>
    <InfoSection {...shoppingCartObj}/>
    </div>
  )
}

export default Resume