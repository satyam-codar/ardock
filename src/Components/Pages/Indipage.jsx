import React from 'react'
import ControlledAccordions from './Indipage/Homeaccordian'
import Indiaboutprof from './Indipage/Indiaboutprof'
import Indifaq from './Indipage/Indifaq'
import Indifirst from './Indipage/Indifirst'
import Indipricing from './Indipage/Indipricing'
import Indisecond from './Indipage/Indisecond'
import Indisyllabus from './Indipage/Indisyllabus'

import { BlogData } from './Courses_details/Details'



function Indipage() {
  return (
    <>
    <Indifirst />
    <Indisecond/>
    <Indiaboutprof/>
    <Indisyllabus/>
    <Indipricing/>
    {/* <ControlledAccordions/> */}
    <Indifaq/>
    </>
  )
}

export default Indipage

// function Indipage() {
//   return (
//     <>

//     <Indifirst/>
//     <Indisecond/>
//     <Indiaboutprof/>
//     <Indisyllabus/>
//     <Indipricing/>
//     {/* <ControlledAccordions/> */}
//     <Indifaq/>
//     </>
//   )
// }

// export default Indipage