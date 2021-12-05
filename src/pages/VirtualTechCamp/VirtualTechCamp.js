

import react from 'react';
import './VirtualTechCamp.css'
import Layout from './../Layout'
import First_Pane from './Blocks/First_Pane';
import Second_Pane from './Blocks/Second_Pane';

import Fourth_pane from './Blocks/Fourth_pane';

import Third_Pane from './Blocks/Third_Pane';
import Fifth_Pane from './Blocks/Fifth_Pane';
import Testimonial from './../AboutUsPage/Blocks/SeventhPane'
import Teachers from './../HomePage/Blocks/AmazingTeachersBlock'


const VirtualTechCamp = () => (
              <Layout>
             <First_Pane/>
             <Second_Pane />
             
             <Third_Pane />
             <Fourth_pane />
             
    <div className="uk-margin-xlarge-top"> <Testimonial /> </div>
    <div className="uk-margin-xlarge-top"><Teachers /> </div>
    <Fifth_Pane />
        




              </Layout>
          
)


export default VirtualTechCamp