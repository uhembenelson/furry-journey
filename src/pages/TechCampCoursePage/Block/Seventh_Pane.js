import react from 'react'

import Img_Location from './../../../images/relatedProgImg3.png'
import stats1 from './../../../images/92percent.png'
import stats2 from './../../../images/100percent.png'
import stats3 from './../../../images/game_stats.png'

import check from './../../../images/check.png'
import {Link } from 'react-router-dom'




const Seventh_Pane = () => (

      <section className="grayBg">
                                    



              <div>
                     <div className="uk-flex uk-flex-center"> 
                      <div className="uk-margin-top mediumContainer  ">               
                 <div class="uk-grid-large uk-child-width-expand@s uk-text-center" data-uk-grid>

                 <div>
                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats1}  className="statsImg"/>
                             
                             <h4 className="uk-text-small uk-text-bold"> Games, Mods and Obstacles designed in Minecraft, Scratch and Roblox</h4>
                             
                         </div>
                     </div>


                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats3}  className="statsImg"/>
                            
                             <h4 className="uk-text-small uk-text-bold"> Students with basic tech skills are 92% more likely to get a degree</h4>
                             
                         </div>


                       



                         <div class="uk-margin-xlarge-top@s bIcon">
                             <img src={stats2}  className="statsImg"/>
                             
                             <h4 className="uk-text-small uk-text-bold"> Satisfied kids and parents</h4>
                             
                         </div>

                 </div>





                          

                 </div>
                 </div>
</div>




        <div className="uk-margin-large-top">
                             <div className="uk-container">
                  <div className="uk-padding " data-uk-grid>
            

                 

          <div className="uk-width-1-2@s ">
                            <div className=" ">
                                <h3 className="uk-margin-top uk-margin-remove-left@">You can also go for Small Group Computer Courses
</h3>
                            </div>



                            <div className=" uk-margin-medium-top">


                            <div className="uk-grid-collapse" data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="textLeft ">A chance for students to make friends and learn new tech skills.
                                       Sharing their designs with peers leads to social bonds and fun learning.</p>
                                   </div>
                            </div>


                             <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                  
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="textLeft ">Experimenting in Minecraft, Roblox and Scratch or Python teaches coding
                                       fundamentals on top of boosting critical thinking skills.</p>
                                
                                   </div>
                            </div>
                            </div>


                             <div className="marginTopSmall">
                            <div className="uk-grid-collapse " data-uk-grid>
                                   <div className="uk-width-1-5">
                                      <img src ={check} className="iconVirt"/>
                                   </div>

                                   <div className="uk-width-4-5">
                                      <p className="textLeft ">Dedicated teachers lead the way for your child through
                                       fascinating computer courses that improve programming abilities and set imagination on fire.

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
                  <div>
                      <img src= {Img_Location }  alt ="On-Campus Program" uk-scrollspy="cls: uk-animation-slide-right; repeat: true"/>
                  </div>
              </div>
           </div>
        </div>
 </div>


     </section>
)


export default Seventh_Pane