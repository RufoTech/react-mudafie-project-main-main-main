import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaAnglesRight } from 'react-icons/fa6';
import { CiCircleQuestion } from "react-icons/ci";

const CustomExpandIcon: React.FC<{ expanded: boolean }> = ({ expanded }) => {
  return expanded ? <FaMinus /> : <FaPlus />;
};

const FAQ: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <>
      <div className='contact-links'>
        <div className="container">
          <h1 data-aos="fade-up" className='playfair-display py-4 sales-offices-h1'>
            <span className=''>Sales Offices</span>
          </h1>
          <h5 data-aos="fade-up" className='text-light roboto-light'>
            The smaller male cones release pollen, which fertilizes the female
          </h5>
        </div>
      </div>

      <div data-aos="fade-up" className="container">
        <div className="avabile-link d-flex align-items-center">
          <h6 className='text-light poppins-bold'>
            Start <FaAnglesRight className='double-left-icon' /> 
            <span className='pages-double pages-double-small px-1'>Pages</span> 
            <FaAnglesRight className='double-left-icon double-left-icon-small ' /> 
            <span className='px-3 contact-link-contact'>FAQ</span>
          </h6>
        </div>
      </div>

      <div className="container">
        <div className="support-center text-center my-5 py-5">
          <CiCircleQuestion className='questions' />
          <h2 className='playfair-display gallery-h3 py-3'>Support Center</h2>
          <h5 className='py-3'>
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, <br /> sunt aliqua put a bird on it squid single-origin.
          </h5>
        </div>
      </div>

      <div className="container">
        <div>
          <Accordion expanded={expandedPanel === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel1'} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold '>How do I find analyst reports (investment bank research)?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2 */}
          <Accordion expanded={expandedPanel === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel2'} />}
              aria-controls="panel2-content"
              id="panel2-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'> Where can I find credit and bond ratings for a particular company?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedPanel === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel3'} />}
              aria-controls="panel3-content"
              id="panel3-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'> Where can I get access to Capital IQ?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedPanel === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel4'} />}
              aria-controls="panel4-content"
              id="panel4-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'> Where can I find the Wall Street Journal - today's and historical</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedPanel === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel5'} />}
              aria-controls="panel5-content"
              id="panel5-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'> Where can I get information on private companies?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>

        
          <Accordion expanded={expandedPanel === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel6'} />}
              aria-controls="panel6-content"
              id="panel6-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'> Where can I find constituent lists for the S&P indices?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedPanel === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel7'} />}
              aria-controls="panel7-content"
              id="panel7-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'>  Where can I find The Economist (current and historical)?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedPanel === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel8'} />}
              aria-controls="panel8-content"
              id="panel8-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'>  Where can I find the full-text of the Harvard Business Review?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedPanel === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon expanded={expandedPanel === 'panel9'} />}
              aria-controls="panel9-content"
              id="panel9-header"
               className='py-3 accordion-summary-hover'
            >
              <Typography><span className='poppins-bold'> How do I get access to case studies?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className='roboto-light'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        
        </div>
      </div>
      <div className="my-5 py-5" > </div>
    </>
  );
};

export default FAQ;
