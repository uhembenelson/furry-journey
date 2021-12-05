import { Box, Grid,  Paper, Typography, Hidden, Container, Divider } from "@material-ui/core";
import bannerImg from './../../../images/online-classroom-47-2-540x482.png';
import {
    PrimaryButton, PrimaryText,
    CourseBlock,
    SecondaryText
} from "./../../../features/Atoms";
import relatedProgImg1 from  "./../../../images/relatedProgImg1.png"
import relatedProgImg2 from  "./../../../images/relatedProgImg2.png"
import relatedProgImg3 from  "./../../../images/relatedProgImg3.png"
import onlineClassroom from  "./../../../images/online-classroom.png"
import check from  "./../../../images/check.png"
import  { Link } from 'react-router-dom'


export default () => {
    return (
              <div className="uk-container uk-margin-large-top">

                      
         












                             <div className="" uk-scrollspy="cls: uk-animation-scale-up; repeat: true">
                           <h1 className="header1 uk-margin-large-top uk-text-center">Related   <span className="greenText" > Courses</span></h1>
                                    <p className="uk-text-center withPaddingToCenterSubText">
                        
                                    Find the best fit for your child in our selected courses designed to put them one step ahead in school

                             </p>
                         </div>
                      <div className=" uk-margin-large-bottom uk-margin-medium-top" data-uk-grid> 
                         <div className="uk-width-1-3@s">
                              <div className="">
                                  <img src={relatedProgImg1} alt ="Virtual Tech Camp" />
                                  <h4 className="imgHeader  uk-text-center">Virtual Tech Camp</h4>
                                  <p className="subText  withPadRightLeft uk-text-center" >  Take advantage of time off school to build coveted tech skills </p>
                                       
                                  <div class="uk-flex uk-flex-center uk-margin-top">
                                 <Link to="/techcamp-course"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div></Link>
                        
                                 </div>
                                     </div>
                         </div>


                         <div className="uk-width-1-3@s">
                                    <div>
                                        <img src={relatedProgImg3}  alt= "Small Group Courses"/>
                                        <h4 className="imgHeader  uk-text-center">Small Group Courses</h4>
                                            <p className="subText  withPadRightLeft uk-text-center" > Join other tech savvys to challenge each other and advance together </p>
                                        
                                            <div class="uk-flex uk-flex-center uk-margin-top">
                                            <Link to ="/VirtualSmallGroup"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div></Link>
                                    
                                            </div>
                                         </div>
                         </div>






                         <div className="uk-width-1-3@s">
                             <div>
                                <img src={relatedProgImg2} alt= "1-on-1 Virtual Courses" />
                                <h4 className="imgHeader  uk-text-center"> 1-on-1 Virtual Courses</h4>
                                  <p className="subText  withPadRightLeft uk-text-center" > Enjoy exclusive personalized courses for a fast track to performance </p>
                                  <div class="uk-flex uk-flex-center uk-margin-top">
                                 <Link to = "/virtualcourses"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div></Link>
                        
                                    </div>
                                </div>
                         </div>
                    </div>
              </div>
    
    )
}