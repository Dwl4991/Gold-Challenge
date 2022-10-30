import React, { } from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './style.css'
const Faq = () => {
  
  
  
    return (
        <section className="faq" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
            <div className="faq-head">
              <h3>Frequently Asked Question</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </div>
            </div>
            <div className="col-lg-7 col-md-12">
            <Accordion>
            <div className='accordion-border'>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading >
                    <AccordionItemButton >
                    Apa saja syarat yang dibutuhkan?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem tempora itaque sunt doloribus nihil officiis dolores fugiat.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </div>
            <div className='accordion-border'>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    Berapa hari minimal sewa mobil lepas kunci?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem tempora itaque sunt doloribus nihil officiis dolores fugiat.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </div>
            <div className='accordion-border'>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem tempora itaque sunt doloribus nihil officiis dolores fugiat.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </div>
            <div className='accordion-border'>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    Apakah Ada biaya antar-jemput?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem tempora itaque sunt doloribus nihil officiis dolores fugiat.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </div>
            <div className='accordion-border'>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    Bagaimana jika terjadi kecelakaan
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem tempora itaque sunt doloribus nihil officiis dolores fugiat.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </div>
           
        </Accordion>
 
                
          </div>
          
            </div>
          </div>
        
      </section>
        );
    };
        export default Faq;