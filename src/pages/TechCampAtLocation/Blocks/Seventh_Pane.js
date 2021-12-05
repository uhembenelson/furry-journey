import react from 'react'
import Testimonial from './../../HomePage/Blocks/TestimonialBlock';

import increase from './../../../images/increase.png'
import increase2 from './../../../images/increase2.png'
import modsProjects from './../../../images/mods_projects.png'
import atSchoolLocation from  './../../../images/img_at_location.png'

import check from  './../../../images/check.png'
import { Link } from 'react-router-dom'






const Seventh_Pane = () => (

            <section className = "bgTechCampAtLocation">
                   
                <div className="uk-container">

                    <div className="uk-margin-large-top">
                    <Testimonial />
                    </div>



                     <section className="">
                    <div className="smallContaner">
                         

                                  <div className=" uk-flex uk-flex-center uk-text-center">
                                       <div className="mediumContainer">
                                            <h1 className="header1">Camp boosts results in School and more</h1>
                                            <p>Confidence, tech abilities and problem solving skills bring your 
                                                child ahead, in general and on their academic path</p>
                                       </div>
                                    </div>




                                        {/** COUNTER  */}
                                        <div className="uk-margin-medium-top">
                                            
                                            <div className="uk-flex uk-flex-center ">
                                            <div className="counterCCP ">
                                                <div class="" data-uk-grid>

                                                <div class="uk-width-1-3@s  ">
                                                        <div>
                                                           <div className="uk-flex uk-flex-center ">   
                                                               <img src ={modsProjects}  className="iconBig  "/>
                                                            </div>
                                                            <p className="iconParagraphSmall uk-text-center uk-text-bold"> Mods or projects designed  </p>

                                                        </div>
                                                          
                                                </div>

                                                <div class="uk-width-1-3@s ">
                                                        <div>
                                                           <div className="uk-flex uk-flex-center ">   
                                                               <img src ={increase}  className="iconBig  "/>
                                                            </div>
                                                            <p className="iconParagraphSmall uk-text-center uk-text-bold"> Of teachers believe tech skills are a must </p>

                                                        </div>
                                                          
                                                </div>



                                                <div class="uk-width-1-3@s  ">
                                                        <div>
                                                           <div className="uk-flex uk-flex-center ">   
                                                               <img src ={increase2}  className="iconBig  "/>
                                                            </div>
                                                            <p className="iconParagraphSmall uk-text-center uk-text-bold"> Increase in academic results   </p>

                                                        </div>
                                                          
                                                </div>
                                      </div></div>
                                        </div>
                                        </div>
                          
                    </div>
                    </section>






                         <div className = "uk-container uk-margin-xlarge-top">
                            <div className= "uk-grid" data-uk-grid>
                                 <div className="uk-width-1-2@s">

                         
                                 <div className=" uk-margin-medium-top">


<div className="uk-grid-collapse" data-uk-grid>
       <div className="uk-width-1-5">
          <img src ={check} className="iconVirt"/>
       </div>

       <div className="uk-width-4-5">
          <p className=" textLeft">Students create together and share with friends the best game
              designs, coding or 3D modelling projects</p>
       </div>
</div>


 <div className="marginTopSmall">
<div className="uk-grid-collapse " data-uk-grid>
      
       <div className="uk-width-1-5">
          <img src ={check} className="iconVirt"/>
       </div>

       <div className="uk-width-4-5">
          <p className="textLeft ">Trust our teachers’ guidance, tech expertise and extensive
           experience for fast learning and boosting confidence</p>
    
       </div>
</div>
</div>



   <div className="marginTopSmall">
            <div className="uk-grid-collapse" data-uk-grid>
                  <div className="uk-width-1-5">
                     <img src ={check} className="iconVirt"/>
                  </div>

                         <div className="uk-width-4-5 uk-margin-left-remove">
                             <p className=" textLeft">Affordable financial packages to benefit
                                    groups of like-minded friends passionate about tech</p>
                            </div>
             </div>
        </div>



                            <div className="marginTopSmall">
                            <div className="uk-grid-collapse" data-uk-grid>
                                <div className="uk-width-1-5">
                                    <img src ={check} className="iconVirt"/>
                                </div>

                                <div className="uk-width-4-5">
                                    <p className=" textLeft">Choose from our selection of popular game universes and coding platforms
                                    to build an immersive experience into the world of tech
                                            </p>
                                </div>
                            </div>
                            </div>

                            <div class="uk-flex withPadding ">
                            <Link to="/#"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More </div> </Link>

                            </div>

                            </div>
                            
                                 </div>

                                 <div className="uk-width-1-2@s">
                                   <img src={atSchoolLocation} className=""/>
                                 </div>
                            </div>
                       </div>

                </div>

        </section>

);


export default Seventh_Pane;