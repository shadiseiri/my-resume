import React from 'react'
import { shoppingCartObj, spaObj, todoObj } from '../InfoSection/data'
import InfoSection from '../InfoSection/InfoSection'

const Resume = () => {
  return (
    <>
    <InfoSection {...spaObj} />
    <InfoSection {...todoObj}/>
    <InfoSection {...shoppingCartObj}/>
    </>
  )
}

export default Resume