

import react from 'react'
import discovery_lesson_image from './../../../images/discovery_lesson_image.png'
import {Link } from 'react-router-dom'
import check from './../../../images/check.png'



const Fifth_Pane = () => (

<section>               
    
            
<div className="iconVertContainer">
             <div className="uk-grid   uk-margin-large-bottom" data-uk-grid>

                     <div className="uk-width-1-2@s ">
                            <div className="uk-margin-xlarge-left ">
                                <h3 className="uk-margin-top uk-margin-remove-left@">You can also go for Virtual Tech Camp</h3>
                            </div>



                            <div className="uk-margin-xlarge-left uk-margin-medium-top">


                            <div className="uk-grid-collapse" data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="textLeft ">Students create together and share with friends the best game
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
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5 uk-margin-left-remove">
                                      <p className="textLeft ">Affordable financial packages to benefit
                                      groups of like-minded friends passionate about tech</p>
                                   </div>
                            </div>
                            </div>



                             <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="textLeft ">Choose from our selection of popular game universes and coding platforms
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
                            <div className="virtual_img_bg">
                                   
                            </div>

                     </div>
             </div></div>




















  
                 <div className="uk-container uk-margin-large-bottom">
                      <div className="uk-grid" data-uk-grid>

                      <div className="uk-width-1-2@s">
                                 <div className="">
                                    <img src={discovery_lesson_image} />
                                 </div>
                             </div>






                             <div className="uk-width-1-2@s">
                                <div className=" uk-margin-large-top">
                                     <h3 className="header3">Sign up for a Free <span className="greenText">Discovery Lesson</span></h3>
                                     <p>Experience a 30 Minutes Computer Course with a Live Teacher. Choose your favorite course and get 
                                         to see if we are the right fit for you. No strings attached.</p>
                                </div>

                                <div class="uk-flex uk-flex-left uk-margin-medium-top ">
                                          <Link to="/"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div> </Link>
                                   </div>
                             </div>

                             
                      </div>
                 </div>

                 </section>
 
);


export default Fifth_Pane