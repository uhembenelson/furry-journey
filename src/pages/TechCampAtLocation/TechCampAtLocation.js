

import react from 'react';
import './TechCampAtLocation.css'
import Layout from './../Layout'
import First_Pane from './Blocks/First_Pane';
import Second_Pane from './Blocks/Second_Pane';
import Third_Pane from './Blocks/Third_Pane';
import Fourth_Pane from './Blocks/Fourth_Pane';
import Sixth_Pane from './Blocks/Sixth_Pane';
import Seventh_Pane from './Blocks/Seventh_Pane';

import Teachers from './../HomePage/Blocks/AmazingTeachersBlock'


const TechCampAtLocation = () => (
              <Layout>
             <First_Pane/>
             <Second_Pane /> 
             
             <Third_Pane />
             
             <Fourth_Pane />  
             
     <div className="uk-margin-xlarge-top">    <Teachers />  </div>
              
      <Sixth_Pane />
      <Seventh_Pane />




              </Layout>
          
)


export default TechCampAtLocation