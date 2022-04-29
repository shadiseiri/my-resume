import React from 'react'
import { expenseObj, shoppingCartObj, spaObj, todoObj } from '../data'
import InfoSection from '../InfoSection/InfoSection'

const Resume = () => {
  return (
    <div id='portfolio'>
    <InfoSection {...spaObj} />
    <InfoSection {...expenseObj} />
    <InfoSection {...todoObj}/>
    <InfoSection {...shoppingCartObj}/>
    </div>
  )
}

export default Resume