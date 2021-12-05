import react from 'react';
import First_Pane from './Blocks/First_Pane';
import Second_Pane from './Blocks/Second_Pane';
import Third_Pane from './Blocks/Third_Pane';
import Fourth_Pane from './Blocks/Fourth_Pane';
import Fifth_Pane from './Blocks/Fifth_Pane'
import './VirtualSmallGroup.css'
import Testimonial from './../AboutUsPage/Blocks/SeventhPane'
import Teachers from './../HomePage/Blocks/AmazingTeachersBlock'
import { Link } from "react-router-dom";
import Data from "../../Data";
import {
    BodyText, PageBlock, PrimaryText, TickLabels,
    HeaderBox, HeaderTitle, PrimaryButton, HeaderDescription, SecondaryText, CourseBlock
} from "../../features/Atoms";
import Layout from "../Layout";
import { Grid, Box, Paper, CardMedia, Card, CardContent, Divider, Hidden, Typography } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadAllVirtualSmallGroup } from "../../DataStore/CourseReducer";

export default function VirtualSmallGroup(props) {
    const courseListStatus = useSelector(state => state.course.loadAllVirtualSmallGroup)
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        if (!mounted) {
            dispatch(loadAllVirtualSmallGroup({
                courseCategory: [Data.Config.CourseCategory.TECH_CAMP.id]
            }));
            setMounted(true)
        }
    }, [])


    return (

        <Layout>

            <First_Pane />
            <Second_Pane />
            {/* <Third_Pane /> */}
            <div className="uk-container uk-margin-large-top">
                <div className="uk-flex uk-flex-center">


                    <PageBlock>
                        {/* <Grid item xs={12} md={8} style={{ margin: 'auto' }}>
<PrimaryText>
<h1 className="header1 uk-text-center">Choose your <span className="greenText">Tech Camp  </span> Computer Courses</h1>
</PrimaryText>
</Grid> */}
                        <div className="mediumContainer uk-padding">
                            <h1 className="header1 uk-text-center ">Choose your Small Group <span className="greenText">Computer Courses</span></h1>
                            <p className="uk-text-center normalPaddingLR">Check out design and animation courses in Roblox or Minecraft. Choose one that your kid will love and be eager to explore,
                                all while enhancing their tech know-how.</p>
                        </div>
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
                                                            <CourseBlock
                                                                to={`/courses/${item.id}/${item.title.replaceAll(' ', '-')}`}
                                                                label={item.title}
                                                                grade={Data.Config.get(Data.Config.Grade, item.grade, 'displayName')}
                                                                courseType={Data.Config.get(Data.Config.CourseType, item.courseType, 'displayName')}
                                                                price={item.price}
                                                                mrpPrice={item.mrpPrice}
                                                                coverPic={item.thumbnil}
                                                            />
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
                </div>
            </div>
            <Fourth_Pane />
            <div className="uk-margin-xlarge-top">     <Testimonial /> </div>
            <div className="uk-margin-xlarge-top">      <Teachers /> </div>
            <Fifth_Pane />




        </Layout>

    )







    // const  VirtualSmallGroup = () => (




    // );
}

