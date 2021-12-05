

import react from 'react'

import whychooseicon6 from './../../../images/whychooseicon6.png'
import whychooseicon5 from './../../../images/whychooseicon5.png'
import check from './../../../images/check.png'
import whychooseicon2 from './../../../images/whychooseicon2.png'
import whychooseicon3 from './../../../images/whychooseicon3.png'



const Third_Pane = () => (

    <div className="uk-container negativeMobileTech  uk-margin-large-top">
           <div className="uk-grid" data-uk-grid>
                    <div className="uk-width-1-2@s">
                       <div className="uk-margin-large-top uk-padding">
                           <h3 className="header3">Why choose our <span className="greenText"> innovative Tech Camps </span> at Location near you</h3>
                           <p className="subText ">Tech Courses designed to tap into your child's creativity and bring their ideas to life, empowering these future tech savvys.
                               Game designs, animation and obstacles to share with other camp friends.</p>
                       </div>
                    </div>

                    <div className="uk-width-1-2@s">
                       <div>

                       <div class="uk-child-width-expand@s uk-grid-small uk-text-center" data-uk-grid>
                                <div>
                                <div>
                                    <div class="uk-card uk-card-default uk-card-body uk-padding-remove ">
                                        <img src={whychooseicon5} className="icon uk-margin-small-top uk-margin-bottom-small"/>
                                        <h6 className="uk-text-bold uk-padding-small uk-margin-remove-top">Experienced Tech Education Provider</h6>
                                        <p className="iconParagraphSmall uk-padding-small">We know what makes students hungry for
                                         knowledge and how to motivate them. More than 10 years experience in building tech abilities and building futures.
                                        </p>
                                    </div>
                                </div>
                                </div>
                                <div className="uk-margin-medium-top">
                                <div>
                                    <div class="uk-card uk-card-default uk-card-body uk-padding-remove ">
                                        <img src={whychooseicon2} className="icon uk-margin-large-top uk-margin-bottom-small"/>
                                        <h6 className="uk-text-bold uk-margin-remove-top">Dedicated Teachers</h6>
                                        <p className="iconParagraphSmall uk-padding-small">Selected from top tech experts, our educators awake students’ 
                                        interest and build up know-how and creativity in the fascinating world of tech.
                                        </p>
                                    </div>
                                </div>
                                </div>
                               
                        </div>

                        <div class="uk-child-width-expand@s uk-margin-medium-top uk-grid-small uk-text-center" data-uk-grid>
                                <div>
                                    <div class="uk-card uk-card-default  uk-card-body uk-padding-remove ">
                                        <img src={whychooseicon6} className="icon  uk-margin-bottom-small"/>
                                        <h6 className="uk-text-bold uk-margin-remove-top">Make Tech Camps fun</h6>
                                        <p className="iconParagraphSmall uk-padding-small">We deliver education through game design, video animations and modelling.
                                           students perceive as interesting and time flies while gathering up knowledge.
                                        </p>
                                    </div>
                                </div>



                                <div  className="uk-margin-medium-top">
                                      <div>
                                    <div class="uk-card uk-card-default uk-card-body uk-padding-remove ">
                                        <img src={whychooseicon3} className="icon  uk-margin-bottom-small"/>
                                        <h6 className="uk-text-bold uk-margin-remove-top">Flexibility to fit all parents</h6>
                                        <p className="iconParagraphSmall uk-padding-small">We bring you our partner Locations to make it even more accessible. Check 
                                        out Schools or Parks&Rec Centers and see what is your best option.
                                        </p>
                                    </div>
                                </div>
                                </div>
                               
                        </div>




                       </div>
                    </div>
           </div>
    </div>
)


export default Third_Pane