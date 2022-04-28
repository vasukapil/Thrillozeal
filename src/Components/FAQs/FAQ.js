import React from 'react'
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



const FAQ = () => {
  return (
    <div className="Card-Wrapper">
        <h2>FAQs</h2>
      <Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Things to carry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
              <li>Basic and Essential items:</li>
              <li>Backpack</li>
              <li>ID Card (original &amp; photocopy)</li>
              <li>Water Bottle</li>
              <li>Trekking Shoes</li>
              <li>Meds (by consulting your personal doctor)</li>
              <li>Power bank</li>
              <li>Little cash</li>
          </ul>

          <ul>
              <li>Clothes</li>
              <li>Full sleeve t-shirts</li>
              <li>Warm jackets/sweaters</li>
              <li>Woolen cap &amp; gloves</li>
              </ul>
              <ul>
              <li>Snacks</li>
              <li>Energy bars</li>
              <li>Chocolate/toffee</li>
              <li>Glucose</li>
              <li>Biscuits</li>
              </ul>
              <ul>
              <li>Personal Care</li>
              <li>Toiletries</li>
              <li>Cold cream</li>
              <li>Pain relief spray</li>
              </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
       
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
export default FAQ
// Elevation - 4,090 m above sea level (highest point)
// District - Rudraprayag
// Starting point - Delhi/ Dehradun
// No. of days - 3 days
// Difficulty level - moderate
// Total trekking distance - 5-6 km (one way)
// Total travelling distance - 235 km (one way)
// Average cost - INR 8,500 to 12,000
// Best time to visit - April to June (summers) and September to December (winters)
// Climate - average 14°C in summers and 5°C in winters
// Geolocation - Baniyakund, Chopta

