
import react from 'react';
import { Link }  from 'react-router-dom'
import check from './../../../images/check.png'

import imagePane from './../../../images/image_paneNew.png'



const Fifth_Pane = () => (
      
    <div className="curvedBgVirtTech">

        <div className="uk-grid " data-uk-grid>
      <div className="uk-width-1-2@s">
             <div className="uk-margin-large-left uk-margin-larg-bottom uk-margin-large-top uk-padding-small">
                 <h3 className="header3"> Try our Tech Camps at Parks & Rec Centers and School Locations Near You</h3>
                 <p>CyberTeck Academy partners with Parks & Rec Centers and Schools to make sure students complement 
                     their tech education. We make it easy and accessible for your kid to experience fun Summer and 
                     Spring Break Camps. Check locations available and choose one that is closer to you. Go for 
                     Virtual or In-Person and start attending at partner locations near you.</p>
             </div>
      </div>


      <div className="uk-width-1-2@s">
                   <div className="uk-margin-xlarge-top">
                       <div className="virtPadding">

                       </div>
                   </div>

      </div>

      </div>




      <div className="uk-container uk-margin-medium-top">
      <div className="uk-grid   uk-margin-large-bottom" data-uk-grid>


                        <div className="uk-width-1-2@s">
                        <div className="uk-margin-xlarge-top ">
                                <img src=  {imagePane} className="uk-margin-large-top"/>
                        </div>

                        </div>

                            <div className="uk-width-1-2@s ">
                                <div className=" uk-margin-xlarge-top">
                                    <h3 className="uk-margin-top paddingTop uk-margin-remove-left@">You can also go for Virtual 1-on-1 Computer Courses</h3>
                                </div>



                     

                                <div className=" uk-margin-medium-top">


                                            <div className="uk-grid-collapse" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                    <img src ={check} className="iconVirt"/>
                                                </div>

                                                <div className="uk-width-4-5">
                                                    <p className="textLeft ">Customized tech pathway for your child and 1-on-1 
                                                    time and attention to having the fastest way of building in-demand tech skills. 
</p>
                                                </div>
                                            </div>


                                            <div className="marginTopSmall">
                                            <div className="uk-grid-collapse " data-uk-grid>
                                                
                                                <div className="uk-width-1-5">
                                                    <img src ={check} className="iconVirt"/>
                                                </div>

                                                <div className="uk-width-4-5">
                                                    <p className="textLeft ">Enjoy max flexibility: time slots and hours booked to fit
                                                     your needs. Course options tailored to fit every student. Everything at the best rates.
</p>
                                                
                                                </div>
                                            </div>
                                            </div>



                                            <div className="marginTopSmall">
                                            <div className="uk-grid-collapse " data-uk-grid>
                                                <div className="uk-width-1-5">
                                                    <img src ={check} className="iconVirt"/>
                                                </div>

                                                <div className="uk-width-4-5 uk-margin-left-remove">
                                                    <p className="textLeft ">The future is Tech and fun, just 
                                                    like our courses. Coding basics and creativity developed
                                                     with everything from Roblox to Minecraft.</p>
                                                </div>
                                            </div>
                                            </div>



                                            <div className="marginTopSmall">
                                            <div className="uk-grid-collapse " data-uk-grid>
                                                <div className="uk-width-1-5">
                                                    <img src ={check} className="iconVirt"/>
                                                </div>

                                                <div className="uk-width-4-5">
                                                    <p className="textLeft ">We bring the chance to learn @home or
                                                     anywhere. Virtual options available because education doesn’t
                                                      have to slow down.

                                                            </p>
                                                </div>
                                            </div>
                                            </div>

                                            <div class="uk-flex withPadding uk-margin-large-bottom">
                         <Link to="/computer-course"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More </div> </Link>
                       
                      </div>


                                            </div>




                                </div>



                            </div>



</div>























    
    </div>


)

export default Fifth_Pane