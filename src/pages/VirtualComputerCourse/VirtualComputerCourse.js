import react from 'react';
import Layout from '../Layout';
import './VirtualComputerCourse.css'
import First_pane from './Blocks/First_Pane';
import Second_pane from './Blocks/Second_Pane';
import Third_Pane  from './Blocks/Third_Pane';
import Fourth_Pane from './Blocks/Fourth_Pane';
import Fifth_pane from './Blocks/Fifth_Pane';
import Teachers from '../HomePage/Blocks/AmazingTeachersBlock';
import Testimonial from './../HomePage/Blocks/TestimonialBlock';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadAllVirtualcourses } from "../../DataStore/CourseReducer";
import Data from "../../Data";
import { Link } from "react-router-dom";
import {
      BodyText, PageBlock, PrimaryText, TickLabels,
      HeaderBox, HeaderTitle, PrimaryButton, HeaderDescription, SecondaryText, CourseBlock
  } from "../../features/Atoms";
  import { Grid, Box, Paper, CardMedia, Card, CardContent, Divider, Hidden, Typography } from "@material-ui/core";


export default function VirtualComputerCourse(props) {
      const courseListStatus = useSelector(state => state.course.loadAllVirtualcourses)
      const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false)
    const [data, setData] = useState()
      useEffect(() => {
            if (!mounted) {
                dispatch(loadAllVirtualcourses({
                    courseCategory: [Data.Config.CourseCategory.COMPUTER_COURSE.id]
                }));
                setMounted(true)
            }
        }, [])


        const gotoplan = (item) => {
           console.log("this is my item here", item)
           const vcoursedata = {
               title:item.title,
               grade:item.grade,
               Category:item.courseType,
               price:0,
               discount:0,
               coursetype:item.courseType
           }
          

           var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
           if(existingEntries == null) existingEntries = [];
          
           localStorage.setItem("checkout", JSON.stringify(vcoursedata));
           // Save allCourseEntries back to local storage
           existingEntries.push(vcoursedata);
           localStorage.setItem("allEntries", JSON.stringify(existingEntries));
           console.log("this is my real data", existingEntries)
           window.location.href = "/plan"


        }

        const removeitem = () => {
                    alert("this is another one")
        //     const index = data.findIndex(key => key.id === `${id}`);
        // console.log(index)
        // data.splice(index,1);
        // console.log(data);
        // localStorage.setItem("allCourseEntries", JSON.stringify(data));
        // window.location.reload(false);
        
           
           }



      return(
         <Layout >
                                    <First_pane />
                                    <Second_pane />
                                    {/* <Third_Pane /> */}

                                    
                      <PageBlock>
                <Grid item xs={12} className="uk-margin-top" md={8} style={{  }}>
                    <PrimaryText>
                    <h1 className="header1 uk-text-center uk-margin-large-top">Choose your <span className="greenText">Virtual 1-on-1 </span> Computer Courses</h1>
                    </PrimaryText>
                </Grid>
                <Grid item xs={12}>
                </Grid>{
                    courseListStatus.status === 'FULFILLED' &&
                    courseListStatus.data &&
                    Object.values(Data.Config.Grade).map(grade =>
                        <>
                            <Grid xs={12} item disableGutter>
                                <SecondaryText className="greenText" style={{ fontSize: '28px' }}>
                                    Grade {grade.displayName}
                                </SecondaryText>
                            </Grid>
                            <Grid xs={12} item>
                                <Box container spacing={5} component={Grid} style={{ padding: '0px 7%' }}>
                                    {
                                        courseListStatus.data
                                            .filter(course => course.grade === grade.id)
                                            .slice(0, 6)
                                            .map(item =>
                                                <Grid item xs={12} sm={6} md={4}>

                                                    <p onClick={()=> {
                                                        gotoplan(item)
                                                    }}>
                                                    <CourseBlock
                                                         
                                                         // to={`/courses/${item.id}/${item.title.replaceAll(' ', '-')}`}
                                                         label={item.title}
                                                         grade={Data.Config.get(Data.Config.Grade, item.grade, 'displayName')}
                                                         courseType={Data.Config.get(Data.Config.CourseType, item.courseType, 'displayName')}
                                                         price={item.price}
                                                         mrpPrice={item.mrpPrice}
                                                         coverPic={item.thumbnil}
                                                     />
                                                    </p>

                                                </Grid>
                                            )
                                    }
                                </Box>
                            </Grid>
                        </>
                    )
                }
                <Grid xs={12} item>
                    <Link to="/courses" component={PrimaryButton}>View All Courses & Plan</Link>
                </Grid>
            </PageBlock>
     




<div className="uk-margin-xlarge-top"><Teachers /></div>
                                     {/* <Fourth_Pane /> */}
<div className="uk-margin-xlarge-top"><Testimonial /></div>
                                       <Fifth_pane />
               
         </Layout>
        
      )

}