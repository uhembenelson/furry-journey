import react from 'react';
import discovery_image from "./../../../images/discovery_lesson_image.png"
import {Link} from 'react-router-dom'
import check from './../../../images/check.png'



const Fifth_Pane = () => (

       <section>
           <div className="uk-container">
                  <div className="uk-grid" data-uk-grid>
                       <div className="uk-width-1-2@s">
                              <div className="">
                               <img src ={discovery_image} />
                              </div>
                       </div>

                       <div className="uk-width-1-2@s">
                              <div className="uk-padding">
                                     <h3 className="header3">Sign up for a <span className="greenText">Free Discovery</span> Lesson</h3>
                                     <p className="uk-margin-medium-top">Experience a 30 Minutes Computer Course with a Live Teacher.
                                        Choose your favorite course and get to see if we are the right
                                        fit for you. No strings attached.</p>

                                        <div class="uk-flex withPadding ">
                         <Link to="/#"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Discovery Lesson </div> </Link>
                        
                        </div>
                              </div>

                         
                         </div>
                    </div>
             </div>



            <div className="iconVertContainer">
             <div className="uk-grid uk-margin-xlarge-top negativeTop90 uk-margin-large-bottom" data-uk-grid>

                     <div className="uk-width-1-2@s ">
                            <div className="uk-margin-xlarge-left ">
                                <h3 className="uk-margin-top uk-margin-remove-left@">You can also go for Virtual Small Group Computer Courses</h3>
                            </div>
                            <div className="uk-margin-xlarge-left uk-margin-medium-top">


                            <div className="uk-grid-collapse" data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="leftNegMargin ">Students create together and share with friends the best game
                                          designs, coding or 3D modelling projects</p>
                                   </div>
                            </div>


                             <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                  
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="leftNegMargin ">Trust our teachers’ extensive experience and tech expertise and
                                      let them guide your child while learning and gaining confidence</p>
                                
                                   </div>
                            </div>
                            </div>



                               <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5 uk-margin-left-remove">
                                      <p className="leftNegMargin ">Affordable financial packages available by joining groups of friends passionate about tech</p>
                                   </div>
                            </div>
                            </div>



                             <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="leftNegMargin ">Go for Combo Courses to build an immersive experience into the world of tech
                                            </p>
                                   </div>
                            </div>
                            </div>

                            <div class="uk-flex withPadding ">
                         <Link to="/VirtualSmallGroup"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More </div> </Link>
                        
                        </div>
  
                            </div>

                     </div>


                     <div className="uk-width-1-2@s">
                            <div className="virtual_img_bg">
                                   
                            </div>

                     </div>
             </div></div>




        </section>




)


export default Fifth_Pane ;