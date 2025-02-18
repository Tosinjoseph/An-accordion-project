import './Hero.css'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../Utils/accordion.jsx'
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="h-wrapper">
        <img src="./background-pattern-desktop.svg" alt="" />
        <div className="h-container">
            <div className="head">
                <img src="./icon-star.svg" alt="" />
                <h1>FAQS</h1>
            </div>
            <Accordion 
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}>
              {
                data.map((item, i)=>{
                  const[className, setClassName]=useState(null)
                  return(
                    <AccordionItem className={`accordionItem ${setClassName}`} key={i} uuid={i}>
                      <AccordionItemHeading style={{border: 'none'}}>
                        <AccordionItemButton style={{border: 'none'}} className='accordionButton'>
                        <AccordionItemState>
                              {({expanded})=> expanded? setClassName('expanded') : setClassName('collapsed')}
                            </AccordionItemState>
                            <div className="side">
                          <div className="text">{item.ask}</div>
                         <MdOutlineArrowDropDown className='text-img' size={20}/>
                         </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel style={{border: 'none'}} className='accordionPanel'>
                       <p>{item.detail}</p>
                      </AccordionItemPanel >
                    </AccordionItem>
                  )
                })
              }

            </Accordion>
        </div>
    </section>
  )
}

export default Hero