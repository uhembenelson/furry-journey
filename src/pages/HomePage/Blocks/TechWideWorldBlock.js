import "./../homepage.css"
import {
    PageBlock, PrimaryText, BodyText, PrimaryButtonOutlined
} from "../../../features/Atoms"
import {
    Grid
} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import intro_pics from "./../../../images/intro_pics.png"
import virtualTutoring from "./../../../images/virtualTutoring.png"
import stats1 from "./../../../images/stats1.png";
import stats2 from "./../../../images/stats2.png";
import stats3 from "./../../../images/stats3.png";
import stats4 from "./../../../images/stats4.png";
import { Link } from "react-router-dom";


const TechWideWorldBlock = () => (
        
    <section className="bgTechBlock   uk-padding-small">
          <div className="uk-container">
                        <div className="uk-grid" data-uk-grid>
                            <div className="uk-width-1-2@s">
                                    <div className="uk-margin-large-top uk-padding-small">
                                    <h5 className=" smallTextTopHeader  uk-text-small">Tech Wide World</h5>
                                    <h3  className="header1 " uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">Our purpose at  <span className="greenText">CyberTeck </span> Academy</h3>
                                    <p className="subText   ">Experience in building futures. This is what our services
                                                                          deliver through Computer Courses, Tech Camps and Virtual Tutoring. 
                                                                          We make a commitment to develop essential tech skills for tomorrow’s 
                                                                          professionals. Our Tech oriented courses are easily accessible at School
                                                                           locations or online at Home. 
                                                </p>

                                      
                                      <p className="uk-margin-small-top">Together with personalized tutoring, any academic or professional paths are open to exploring.</p>
                                    </div>

                                    
                                <div class="uk-flex uk-margin-medium-top">
                                      <Link to="/about-us" > <div class="btn" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div> </Link>
                                        
                                    </div>
                            </div>

                            <div className="uk-width-1-2@s">
                                <div className="uk-margin-large-top" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                                    <img src={intro_pics}  />
                                </div>

                                
                            </div>
                        </div>



                                         <div className="uk-flex uk-flex-center">                              
                     <div className="  uk-visible@s  mediumContainer counterContainer uk-margin-large-top" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
                        <div className="uk-grid " data-uk-grid>
                            
                                <div className="uk-width-1-3@s ">
                                     <div className="imgCenter">
                                         <img src={stats1} class="statsImg"/>
                                     <p className="counterText uk-text-center">Increase in academic results</p>
                                        </div>
                                </div>

                                <div className="uk-width-1-3@s">
                                      <div className="imgCenter">
                                      <img src={stats4} class="statsImg"/>
                                      <p className="counterText uk-text-center">Tech hours completed</p>
                                        </div>
                                      </div>

                               


                                <div className="uk-width-1-3@s">
                                    <div className="imgCenter">
                                    <img src={stats3}  class="statsImg"/>
                                     <p className="counterText uk-text-center">Satisfaction Rate</p>
                                        </div>
                                    </div>
                            
                        </div>
                     </div>
                     </div> 






                     <div className="uk-hidden@s counterContainer uk-padding-bottom uk-margin-bottom uk-margin-large-top" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
                     <div className="uk-grid  " data-uk-grid>
                            
                              <div className="uk-width-1-2">
                                 <div className="imgCenter">
                                   <img src={stats1}  class="statsImg"/>
                                  <p className="counterText uk-text-center">Increase in academic results</p>
                                    </div>
                              </div>

                              <div className="uk-width-1-2">
                                 <div className="imgCenter">
                                   <img src={stats4}  class="statsImg"/>
                                  <p className="counterText uk-text-center">Tech hours completed</p>
                                    </div>
                              </div>
                        
                    </div>



                    <div className="uk-grid uk-margin-remove-top" data-uk-grid>
                            
                            <div className="uk-width-1-2">
                               <div className="imgCenter">
                                 <img src={stats2}  class="statsImg"/>
                                <p className="counterText uk-text-center">Students with basic tech skills are 92% more likely to get a degree</p>
                                  </div>
                            </div>

                            <div className="uk-width-1-2">
                               <div className="imgCenter">
                                 <img src={stats3}  class="statsImg"/>
                                <p className="counterText uk-text-center">Satisfaction Rate</p>
                                  </div>
                            </div>
                      
                  </div>








                     </div>



                     


                     
         <div className=" uk-margin-bottom ">
 <div className="uk-grid" data-uk-grid>
                          <div className="uk-width-1-2@s">

                                <div className="uk-margin-xlarge-top " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                                <img src={virtualTutoring}  alt="Virtual Online Tutoring" />
                               </div>
                           </div>

                  <div className="uk-width-1-2@s">
                  
                              <div className="uk-margin-xlarge-top uk-padding-small">
                                <h5 className=" smallTextTopHeader  uk-text-small">VIRTUAL TUTORING</h5>
                                <h3  className="header1 " uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">Advance rapidly to   <span className="greenText">that next step
                                 </span> </h3>
                                <p className="subText uk-text-left paddingRight ">Top teachers, the right approach and an open attitude to
                                 learning are the ingredients that promise results in school. .</p>

                                <p className="uk-text-left subText uk-margin-small-top  uk-text-left">Improve the exact area that you need 
                                or get  to that next level with personalized lessons 1-on-1 or in small groups.Nothing can stop our students 
                                from achieving academic excellence</p>
                                </div>

                    
                           <div class="uk-flex uk-margin-medium-top">
                          <Link to="/maths-tutoring"><div class="btn" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div> </Link>
                        
                      </div>
                   
                     </div>
             </div>
         </div>




















          </div>

    </section>
);

export default TechWideWorldBlock;