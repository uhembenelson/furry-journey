import Layout from "../Layout";
//import "./schoolDetailsPage.css";
import {
  BodyText,
  HeaderBox,
  HeaderDescription,
  HeaderTitle,
  PageBlock,
  PrimaryButton,
  PrimaryText,
  SecondaryText,
} from "./../../features/Atoms";
import { Box, Grid, Paper, Typography, Container } from "@material-ui/core";
import coverImg from "./../../images/minecraft-animation.jpg";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadSchool } from "./../../DataStore/SchoolReducer";
import { useEffect, useState } from "react";
import Data from "../../Data";
import Api from "../../Api";
import tick_icon from "./../../images/tick_icon.png";
import school_aboutus from "./../../images/school_aboutus.png";
import ctaImg from "./../../images/ctaImg.png";
import TodayIcon from "@material-ui/icons/Today";
import { loadSchoolCourse } from "./../../DataStore/SchoolCoursesReducer";
import Moment from "react-moment";
import moment from "moment";
import CourseBookingModal from "../../pages/PlanPage/Block/courseBookingModal";
import EditIcon from "@material-ui/icons/Edit";
import { useAuthorize } from "./../../features/Authentication/Authorize";
import Fourth_Pane from "../PlanPage/Block/Fourth_Pane";
import check from "../../images/check.png"

import secured from "./../../images/secured.png"
import { SettingsOutlined } from "@material-ui/icons";

export default function PlanPage(props) {
  const { schoolId } = useParams();
  const isStudent = useAuthorize("STUDENT");
  const[ title, setTitle] = useState()
  const [price, setPrice] = useState(65)
  const [discount, setDiscount] = useState()
  const schoolDetails = useSelector(
    (state) => (state.school.loadSchool && state.school.loadSchool.data) || {}
  );
  const isRepresentative = useAuthorize("REPRESENTATIVE");
  const loadSchoolCourseDetails = useSelector(
    (state) =>
      (state.schoolCourses &&
        state.schoolCourses.loadSchoolCourse &&
        state.schoolCourses.loadSchoolCourse.data) ||
      []
  );
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const newexistingEntries = JSON.parse(localStorage.getItem("allEntries"));
    newexistingEntries.map((item)=>{
             console.log("this is my map item", item.title)
             const you = item.title
             setTitle(you)
            
    
        } )

    if (!mounted && schoolId) {
      dispatch(loadSchool(schoolId));
      dispatch(loadSchoolCourse(schoolId));
      setMounted(true);
    }

    // var coursedata = JSON.parse(localStorage.getItem("allCourseEntries"));
    // const ldata = JSON.parse([coursedata])
    // console.log("my course data", ldata)

   

  }, [schoolId]);
  const [isOpenBookingModal, setIsOpenBookingModal] = useState(false);
  const [courseInfoToBook, setCourseInfoTobook] = useState(null);
  
  const bookCourse = (courseInfo) => {
    if (isStudent) {
      setCourseInfoTobook(courseInfo);
      setIsOpenBookingModal(true);
    } else {
      document.getElementById("authButton")?.click();
    }
  };

  const showme = () => {





    setIsOpenBookingModal(true)

    setTimeout(()=> {
        const myprice = price
        const mynewdis = 11
        const caldis = myprice * mynewdis
        const resdis = caldis/100
        setDiscount(resdis)

       
        }, 3000);


   
    //localStorage.setItem("checkout", JSON.stringify(checkoutdata));
    // Save allEntries back to local storage
    // existingEntries.push(checkoutdata);
    // localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    // console.log("this is my real data", existingEntries)

   
   


  }


  const updatedata = () => {
      
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];

    console.log("this is my real vcoure", existingEntries)
    const getindexlength = [existingEntries].length - 1
    console.log("this is the length", getindexlength)

    existingEntries[getindexlength].price = ''
    existingEntries[getindexlength].discount = discount
  }


  const loadBookingModal = () => {
    return (
      <CourseBookingModal
        schoolId={schoolId}
        courseInfo={courseInfoToBook}
        isOpen={isOpenBookingModal}
        handleClose={() => setIsOpenBookingModal(false)}
      />
    );
  };
  return (
    <Layout className="detailsBlock">
     
     
        <Paper elevation={0} style={{ padding: "2%" }}>
          <Grid container spacing={2}>
            {loadSchoolCourseDetails?.map((course) => (
              <CourseBlock courseInfo={course} bookCourse={bookCourse} />
            ))}
          </Grid>
        </Paper>
        {isOpenBookingModal && loadBookingModal()}

          
   <div >
             <div className="uk-container uk-margin-top">

                  <div className=" uk-flex uk-flex-center">
                        <div className="">
                             
                            <h1 className="uk-text-center header1">Choose your lesson <span className="greenText">package</span></h1>
                        </div>
                  </div>
              </div>



               <div className=" ">
                   <div className="uk-padding-large">
               <div className="uk-margin-large-bottom">
                       <div className ="uk-grid-medium" data-uk-grid>




                             {/**First Table**/}
                            <div className="uk-width-1-4@s">
                                   <div className="bundleContainer">
                                       <div className="lessonHeaderBg">
                                            <h4 className=" uk-text-center light">1 lesson <span className="uk-text-bold">per month</span></h4>
                                       </div>

                                       <div className="numberDiscDiv uk-padding-small">
                                            <div className="uk-grid-collapse" data-uk-grid>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className="uk-text-bold strikeText uk-text-center"><strike >65</strike></h3>
                                                      </div>
                                                   </div>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className=" blueText priceText uk-text-center"><span className="uk-text-bold">$59</span> <span className="uk-text-light">/ Lesson</span></h3>
                                                      </div>
                                                   </div>
                                            </div>
                                              {/***Second_div**/}
                                            <div className="uk-grid-collapse uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <p className="uk-text-center smallText" > Once a month</p>
                                                   </div>
                                                </div>

                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <h3 className="smallText greenBgBrder uk-text-center">Save 11% </h3>
                                                   </div>
                                                </div>
                                         </div>


                                       </div>

                                       {/***Item list container**/}
                                       <div className="uk-padding-small">
                                           <div>
                                               <p className="uk-text-bold  uk-text-center">Explore your own choice in tech</p>
                                               
                                           </div>

                                           <div className="uk-grid-collapse uk-margin-small-top uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Learn from anywhere with virtual 1-on-1 course</p>
                                                 </div>

                                           </div>

                                           <div className="uk-grid-collapse  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Many tech topics to choose from at the best rates</p>
                                                 </div>

                                           </div>


                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconSecure" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Exclusive attention from teacher adapted to student’s pace and knowledge </p>
                                                 </div>

                                           </div>

                                     
                                       </div>{/***Item list container ends HERE!!!!**/}



                                             {/**CTA button**/}
                                             <div className="uk-flex uk-flex-center">
                                               
                                                      <h4 onClick={()=>showme(setPrice(65))
                                                          
                                                    } className="CTA_select_btn">
                                                           Select
                                                           </h4>
                                                      
                                             </div>

                                            


                                                  {/***SECURE**/}
                                            <div className="uk-grid-collapse uk-padding-small uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-3">
                                                   <div className="uk-margin-left">
                                                       <img src= {secured}  className="iconSecure"/>
                                                   </div>
                                                </div>

                                                <div className="uk-width-2-3">
                                                   <div className="">
                                                       <p className="smallText uk-text-bold uk-text-center"> Nos risk, cancel any time </p>
                                                   </div>
                                                </div>
                                         </div>

                                   </div>
                            </div >







                           
                             {/**SECOND Table**/}
                            <div className="uk-width-1-4@s">
                                   <div className="bundleContainer">
                                       <div className="lessonHeaderBgBlue">
                                            <h4 className=" uk-text-center light">4 lessons <span className="uk-text-bold">per month</span></h4>
                                            <h4 className="negativeTopMarginSmall light uk-text-bold uk-text-center">MOST POPULAR</h4>
                                       </div>

                                       <div className="numberDiscDiv uk-padding-small">
                                            <div className="uk-grid-collapse" data-uk-grid>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className="uk-text-bold strikeText uk-text-center"><strike >65</strike></h3>
                                                      </div>
                                                   </div>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className=" blueText priceText uk-text-center"><span className="uk-text-bold">$59</span> <span className="uk-text-light">/ Lesson</span></h3>
                                                      </div>
                                                   </div>
                                            </div>
                                              {/***Second_div**/}
                                            <div className="uk-grid-collapse uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <p className="uk-text-center smallText" > 4 times a month</p>
                                                   </div>
                                                </div>

                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <h3 className="smallText greenBgBrder uk-text-center">Save 11% </h3>
                                                   </div>
                                                </div>
                                         </div>


                                       </div>

                                       {/***Item list container**/}
                                       <div className="uk-padding-small">
                                           <div>
                                               <p className="uk-text-bold  uk-text-center">Build tech fundamentals </p>
                                               
                                           </div>

                                           <div className="uk-grid-collapse uk-margin-small-top uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="s" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Learn from anywhere with virtual 1-on-1 courses </p>
                                                 </div>

                                           </div>

                                           <div className="uk-grid-collapse  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Many tech topics to choose from at the best rates</p>
                                                 </div>

                                           </div>


                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Exclusive attention from teacher adapted to student’s pace and knowledge </p>
                                                 </div>

                                           </div>

                                                    
                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Start learning coding principles </p>
                                                 </div>

                                           </div>








                                     
                                       </div>{/***Item list container ends HERE!!!!**/}



                                             {/**CTA button**/}
                                             <div className="uk-flex uk-flex-center">
                                                  <a href=""><h4 className="CTA_select_btn"> Select</h4></a>
                                             </div>

                                            


                                                  {/***SECURE**/}
                                            <div className="uk-grid-collapse uk-padding-small uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-3">
                                                   <div className="uk-margin-left">
                                                       <img src= {secured}  className="iconSecure"/>
                                                   </div>
                                                </div>

                                                <div className="uk-width-2-3">
                                                   <div className="">
                                                       <p className="smallText uk-text-bold uk-text-center"> Nos risk, cancel any time </p>
                                                   </div>
                                                </div>
                                         </div>




                                   </div>
                            </div >









                           
                             {/**THIRD Table**/}
                            <div className="uk-width-1-4@s">
                                   <div className="bundleContainer">
                                       <div className="lessonHeaderBg">
                                            <h4 className=" uk-text-center light">8 lesson <span className="uk-text-bold">per month</span></h4>
                                       </div>

                                       <div className="numberDiscDiv uk-padding-small">
                                            <div className="uk-grid-collapse" data-uk-grid>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className="uk-text-bold strikeText uk-text-center"><strike >65</strike></h3>
                                                      </div>
                                                   </div>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className=" blueText priceText uk-text-center"><span className="uk-text-bold">$59</span> <span className="uk-text-light">/ Lesson</span></h3>
                                                      </div>
                                                   </div>
                                            </div>
                                              {/***Second_div**/}
                                            <div className="uk-grid-collapse uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <p className="uk-text-center smallText" > 8 times a month</p>
                                                   </div>
                                                </div>

                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <h3 className="smallText greenBgBrder uk-text-center">Save 11% </h3>
                                                   </div>
                                                </div>
                                         </div>


                                       </div>

                                       {/***Item list container**/}
                                       <div className="uk-padding-small">
                                           <div>
                                               <p className="uk-text-bold  uk-text-center">Advance in tech projects design </p>
                                               
                                           </div>

                                           <div className="uk-grid-collapse uk-margin-small-top uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Learn from anywhere with virtual 1-on-1 course</p>
                                                 </div>

                                           </div>

                                           <div className="uk-grid-collapse  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Exclusive attention from teacher adapted to student’s pace and knowledge </p>
                                                 </div>

                                           </div>


                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Best rates for tech education  </p>
                                                 </div>

                                           </div>


                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Advance your coding principles </p>
                                                 </div>

                                           </div>



                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall"> A wide range of topics and project designsn  </p>
                                                 </div>

                                           </div>

                                     
                                       </div>{/***Item list container ends HERE!!!!**/}



                                             {/**CTA button**/}
                                             <div className="uk-flex uk-flex-center">
                                                  <a href=""><h4 className="CTA_select_btn"> Select</h4></a>
                                             </div>

                                            


                                                  {/***SECURE**/}
                                            <div className="uk-grid-collapse uk-padding-small uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-3">
                                                   <div className="uk-margin-left">
                                                       <img src= {secured}  className=""/>
                                                   </div>
                                                </div>

                                                <div className="uk-width-2-3">
                                                   <div className="">
                                                       <p className="smallText uk-text-bold uk-text-center"> Nos risk, cancel any time </p>
                                                   </div>
                                                </div>
                                         </div>




                                   </div>
                            </div >







                            
                            




                            
                             {/**FOURTH Table**/}
                            <div className="uk-width-1-4@s">
                                   <div className="bundleContainer">
                                       <div className="lessonHeaderBg">
                                            <h4 className=" uk-text-center light">12 lesson <span className="uk-text-bold">per month</span></h4>
                                       </div>

                                       <div className="numberDiscDiv uk-padding-small">
                                            <div className="uk-grid-collapse" data-uk-grid>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className="uk-text-bold strikeText uk-text-center"><strike >65</strike></h3>
                                                      </div>
                                                   </div>

                                                   <div className="uk-width-1-2">
                                                      <div>
                                                          <h3 className=" blueText priceText uk-text-center"><span className="uk-text-bold">$59</span> <span className="uk-text-light">/ Lesson</span></h3>
                                                      </div>
                                                   </div>
                                            </div>
                                              {/***Second_div**/}
                                            <div className="uk-grid-collapse uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <p className="uk-text-center smallText" > 12 times a month</p>
                                                   </div>
                                                </div>

                                                <div className="uk-width-1-2">
                                                   <div>
                                                       <h3 className="smallText greenBgBrder uk-text-center">Save 11% </h3>
                                                   </div>
                                                </div>
                                         </div>


                                       </div>

                                       {/***Item list container**/}
                                       <div className="uk-padding-small">
                                           <div>
                                               <p className="uk-text-bold  uk-text-center">Fastrack to tech expert level </p>
                                               
                                           </div>

                                           <div className="uk-grid-collapse uk-margin-small-top uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Learn from anywhere with virtual 1-on-1 courses</p>
                                                 </div>

                                           </div>

                                           <div className="uk-grid-collapse  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Exclusive attention from teacher adapted to student’s pace and knowledge</p>
                                                 </div>

                                           </div>


                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Best rates for tech education  </p>
                                                 </div>

                                           </div>



                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Advance your coding principles</p>
                                                 </div>

                                           </div>



                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">A wide range of topics and project designs </p>
                                                 </div>

                                           </div>


                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Mix and match your own tech topics </p>
                                                 </div>

                                           </div>


                                           <div className="uk-grid-collapse uk-margin-top-remove  uk-padding-small" data-uk-grid>
                                                <div className="uk-width-1-5">
                                                      <img src= {check} className="iconCheck" />
                                                 </div>
                                                 
                                                 <div className="uk-width-4-5">
                                                      <p className="iconParagraphSmall">Save on the best value package </p>
                                                 </div>

                                           </div>

                                     
                                       </div>{/***Item list container ends HERE!!!!**/}



                                             {/**CTA button**/}
                                             <div className="uk-flex uk-flex-center">
                                                  <a href=""><h4 className="CTA_select_btn"> Select</h4></a>
                                             </div>

                                            


                                                  {/***SECURE**/}
                                            <div className="uk-grid-collapse uk-padding-small uk-margin-remove-top" data-uk-grid>
                                                
                                                <div className="uk-width-1-3">
                                                   <div className="uk-margin-left">
                                                       <img src= {secured}  className="iconCheck"/>
                                                   </div>
                                                </div>

                                                <div className="uk-width-2-3">
                                                   <div className="">
                                                       <p className="smallText uk-text-bold uk-text-center"> Nos risk, cancel any time </p>
                                                   </div>
                                                </div>
                                         </div>




                                   </div>
                            </div >





                       </div>
                       
                    </div>
            </div>
            </div>


           

</div>

        
      

    
    </Layout>
  );
}

const TickLabels = (props) => (
  <Typography
    variant="body1"
    {...props}
    className="bodyText"
    component="p"
    style={{ display: "flex", marginBottom: 15, marginTop: 10, ...props.style }}
  >
    <img
      src={tick_icon}
      style={{ width: "9%", marginRight: 10, objectFit: "contain" }}
    />
    <BodyText style={{ fontSize: "16px", lineHeight: "18px" }}>
      {props.label}
    </BodyText>
  </Typography>
);

const CourseBlock = (props) => {
  if(props?.courseInfo?.isActive)
  return (
    <Grid item xs={12} md={6}>
      <Paper style={{ padding: "2%", border: "2px solid #72d66d" }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 style={{ textAlign: "center" }}>{props?.courseInfo?.title}</h3>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ padding: "2%" }}
            >
              <Grid item xs={6}>
                <h3>Grade {props?.courseInfo?.grade}</h3>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                {/* HIDDEN AS PER REQ */}
                {/* <PrimaryButton style={{ backgroundColor: "#ff3e6c" }}>
                  Slot:{" "}
                  {props?.courseInfo?.totalSlot - props?.courseInfo?.bookedSlot}{" "}
                  left
                </PrimaryButton> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/* schedule data info */}
            {props?.courseInfo?.slotDateTimes?.map((slotTime) => (
              <ClassDateSection timings={slotTime} />
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: "right" }}
            className="marginGapBottom"
          >
            <PrimaryButton
              className="marginGapBottom"
              onClick={() => props?.bookCourse(props?.courseInfo)}
            >
              Register
            </PrimaryButton>
          </Grid>
          <Grid item xs={12} style={{ padding: "5%" }}>
            <h3>Course Description</h3>
            <BodyText className="marginGapTop">
              {props?.courseInfo?.description}
            </BodyText>
            <Paper style={{ padding: "5%", marginTop: 20 }}>
              <h3>
                In this Course{" "}
                <span style={{ color: "#72d66d" }}>you will</span>{" "}
              </h3>
              {props?.courseInfo?.highlightPoints?.map((point) => (
                <TickLabels label={point} />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <PrimaryButton
              style={{ padding: 20, minWidth: "40ch", borderRadius: 40 }}
              onClick={() => props?.bookCourse(props?.courseInfo)}
            >
              Register For this Course
            </PrimaryButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
  return (<></>)
};

const ClassDateSection = (props) => {
  const classTime = moment(props?.timings);
  return (
    <Grid
      container
      style={{ background: "#106a75", padding: "2%", margin: "10px 0" }}
    >
      <Grid item xs={8}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: 17,
            color: "#fff",
            fontWeight: 600,
          }}
        >
          <TodayIcon style={{ color: "#72d66d", fontSize: 33 }} />
          {/* <span style={{ marginLeft: 10 }}>10-12-2021</span> */}
          <span style={{ marginLeft: 10 }}>
            <Moment format="MMM DD, YYYY">{props?.timings}</Moment>
          </span>
        </div>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "right" }}>
        <div
          style={{
            display: "flex",
            alignItems: "right",
            flexWrap: "wrap",
            fontSize: 17,
            color: "#fff",
            fontWeight: 600,
            justifyContent: 'flex-end'
          }}
        >
          <span style={{ marginLeft: 10, marginTop: 5 }}>
            <div style={{ textAlign: "right" }}>
              <Moment format="hh:mm A">{classTime}</Moment>
            </div>
          </span>
        </div>
      </Grid>
    </Grid>
  );
};
