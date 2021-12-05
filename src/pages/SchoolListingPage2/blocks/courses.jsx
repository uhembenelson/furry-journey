import staff from './../../../images/staff.PNG';
import courseImg from './../../../images/course1.JPG';
import Api from './../../../Api';
import { Box, Grid, Link, Paper, Typography, Hidden, Container, Divider } from "@material-ui/core";
import {
    PrimaryButton, PrimaryText,
    CourseBlock,SecondaryText
} from "./../../../features/Atoms"
import useFetch from 'react-fetch-hook';
import Data from './../../../Data';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, dispatch } from "react";
import axios from 'axios';
export default () => {
  //  const { isLoading, error, data } = useFetch(Api.School.loadAtSchoolCourses());

    const [mounted, setMounted] = useState(false)
    const [codingcourseList, setCodingcourseList] = useState()
    const [allcourseList, setAllcourseList] = useState()
    const [gamedevcourseList, setGamedevcourseList] = useState()
    useEffect(() => {
        axios.get(Api.School.loadAtSchoolCourses())
        .then(function (response) {
    
    const mydata = response.data.data
   // console.log("this is my data",mydata)
   setAllcourseList(mydata)
    console.log("this should work",mydata);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  axios.get(Api.School.loadAtSchoolCodingCourses())
  .then(function (response) {

const codedata = response.data.data
// console.log("this is my data",mydata)
setCodingcourseList(codedata)
console.log("this should work",codedata);
})
.catch(function (error) {
// handle error
console.log(error);
})
.then(function () {
// always executed
});


axios.get(Api.School.loadAtSchoolGameDevCourses())
.then(function (response) {

const gamedata = response.data.data
// console.log("this is my data",mydata)
setGamedevcourseList(gamedata)
console.log("this should work",gamedata);
})
.catch(function (error) {
// handle error
console.log(error);
})
.then(function () {
// always executed
});

        

       
    }, [])



    
  
   

    // if (isLoading) {
    //     return <h1 style={{ textAlign: 'center' }}>Loading</h1>
    // }
    const courseList = allcourseList
    const codingList = codingcourseList
    const gameList = gamedevcourseList
    // console.log("this my text", codingcourseList1)


    return (
        <div className="uk-container uk-margin-xlarge-top ">
                     <div>
                         

                         <div className="uk-flex uk-flex-center">
                             <div className="mediumContainer withPaddingLarge">
                            <h1 className="header1  uk-text-center">Computer Courses at Locations with Live Instructors</h1>
                            <p className="subText uk-text-center ">Browse through available locations for computer courses and choose the one that fits your child best from our Virtual and In-Person options.</p>
                            </div>
                           </div>

                           <div className="uk-margin-large-top">
                           <ul class=" uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
                                                <li ><a href="#" className="activeTabBtn">All Courses</a></li>
                                                <li><a href="#" className="InactiveTabBtn">Coding Courses</a></li>
                                                <li><a href="#" className="InactiveTabBtn">Game Dev Courses</a></li>
                             </ul>

                                       
                                        <ul class="uk-switcher uk-margin">

                                 {/*First Tab All courses*/}
                                 <li>
                                            <Grid container direction="row"  spacing={2} style={{ marginTop: 20 }}>
                                                {
                                    courseList?.map(item => <Grid item xs={12} md={4} lg={4} style={{ textAlign: 'center' }}>
                                        <CourseBlock
                                            to={`/courses/${item.id}/${item.title.replaceAll(' ', '-')}`}
                                            label={item.title}
                                            grade={Data.Config.get(Data.Config.Grade, item.grade, 'displayName')}
                                            courseType={Data.Config.get(Data.Config.CourseType, item.courseType, 'displayName')}
                                            price={item.price}
                                            mrpPrice={item.mrpPrice}
                                            coverPic={item.thumbnil}
                                        />
                                    </Grid>)
                                }
                            </Grid>    
                                            </li>




                                              {/*Second Tab to display Coding courses*/}
                                            <li>
                                            <Grid container direction="row"  spacing={2} style={{ marginTop: 20 }}>
                                                {
                                    codingList?.map(item => <Grid item xs={12} md={4} lg={4} style={{ textAlign: 'center' }}>
                                        <CourseBlock
                                            to={`/courses/${item.id}/${item.title.replaceAll(' ', '-')}`}
                                            label={item.title}
                                            grade={Data.Config.get(Data.Config.Grade, item.grade, 'displayName')}
                                            courseType={Data.Config.get(Data.Config.CourseType, item.courseType, 'displayName')}
                                            price={item.price}
                                            mrpPrice={item.mrpPrice}
                                            coverPic={item.thumbnil}
                                        />
                                    </Grid>)
                                }
                            </Grid>
                                            </li>






                                            {/*Third Tab to display Game Dev courses*/}
                                            <li>
                                            <Grid container direction="row"  spacing={2} style={{ marginTop: 20 }}>
                                                {
                                    gameList?.map(item => <Grid item xs={12} md={4} lg={4} style={{ textAlign: 'center' }}>
                                        <CourseBlock
                                            to={`/courses/${item.id}/${item.title.replaceAll(' ', '-')}`}
                                            label={item.title}
                                            grade={Data.Config.get(Data.Config.Grade, item.grade, 'displayName')}
                                            courseType={Data.Config.get(Data.Config.CourseType, item.courseType, 'displayName')}
                                            price={item.price}
                                            mrpPrice={item.mrpPrice}
                                            coverPic={item.thumbnil}
                                        />
                                    </Grid>)
                                }
                            </Grid>
                                            </li>
                                        </ul>
                                        </div>

      


                                     <div className="uk-margin-large-top uk-margin-large-bottom">
                                          <h3 className="header1 uk-text-center">In-Person</h3>
                                          <p className="uk-text-center withPaddingLarge"> To reach everyone’s needs, our Computer Courses will be
                                             available with a live instructor. We make sure our teachers are
                                              present at your location, both for In-Person courses and for Virtual settings.</p>
                                              <div class="uk-flex uk-flex-center  ">
                        <div class="btn uk-text-center uk-margin-medium-top" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Virtual Courses</div>
                        
                      </div>
                                     </div>


                     </div>
        </div>
    )
}


