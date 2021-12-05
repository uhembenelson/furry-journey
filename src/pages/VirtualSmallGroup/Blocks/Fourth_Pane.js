import react from 'react';
import b4 from './../../../images/b4.jpg'
import b3 from './../../../images/b3.jpg'
import b2 from './../../../images/b2.jpg'
import b1 from './../../../images/b1.jpg'
import minecraft from './../../../images/minecraft.jpg'
import {Link } from 'react-router-dom'


const Fourth_Pane = () => (
    <section>
       <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
            <div className="uk-flex uk-flex-center">
                <div className="mediumContainer">
                 <h1 className="header1 uk-text-center">Combo  <span className="greenText">Courses</span></h1>
                 <p className="uk-text-center normalPaddingLR">Get a combo course that sets your child on the best track. You
                    get two topics instead of one, both focused on developing abilities
                    in a fun way. Let his imagination run wild in popular video game
                     universes and encourage him to explore them to get new skills.</p>
                 </div>
            </div>
       </div>


       <section>
                  {/**First bundle row**/}
                <div className="uk-grid-collapse uk-grid" data-uk-grid>
                     <div className="uk-width-1-2@s ">
                             <div className="one-one-groupBG">

                             </div>
                     </div>

                     <div className="uk-width-1-2@s uk-padding">
                           <div className="uk-margin-small-top uk-margin-large-right">
                               <h3 className="header3 uk-text-center">Coding <span className="greenText">Course Path</span></h3>
                               <p className=" uk-text-center subText">Take that first step in getting essential coding skills. Our dedicated teachers
                                make it easy and your child has fun while learning. Programming fundamentals and
                                exciting projects will put your child one step ahead. It opens up a new world 
                                of options in school.</p>
                          </div>

                            {/**Combo**/}
                            <div className="">

                               <div class="uk-flex uk-flex-center uk-margin-small-top">
                                    <div class=" uk-flex-last uk-margin-left"><img src= {b3} /></div>
                                    <div class=" uk-flex-firstk-"><img src= {b4} /></div>
                                   <div class="header1 uk-margin-xlarge-top">+</div>
                               </div>

                               <div class="uk-flex uk-flex-center uk-margin-medium-top ">
                                          <Link to="/courses"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div> </Link>
                                   </div>

                            </div>

                     </div>
                </div>



                  {/**Second bundle row**/}
                  <div className="uk-grid-collapse uk-grid uk-margin-remove-top" data-uk-grid>
                     

                     <div className="uk-width-1-2@s uk-padding">
                           <div className="uk-margin-medium-top uk-margin-large-left">
                               <h3 className="header3 uk-text-center">Minecraft <span className="greenText">Content Development</span></h3>
                               <p className=" uk-text-center subText">The popular universe gets your child involved and fascinated. He can bring 
                               characters to life with modding or design obstacles to challenge friends. Courses boost the creative side and 
                               build design skills. Extra: they can share designs online with thousands other Minecraft fans and develop further.</p>
                          </div>

                            {/**Combo**/}
                            <div className="uk-margin-medium-top">

                               <div class="uk-flex uk-flex-center">
                                    <div class=" uk-flex-last uk-margin-left"><img src= {b1} /></div>
                                    <div class=" uk-flex-firstk-"><img src= {b2} /></div>
                                   <div class="header1 uk-margin-xlarge-top">+</div>
                               </div>

                               <div class="uk-flex uk-flex-center uk-margin-medium-top ">
                                          <Link to="/"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Learn More</div> </Link>
                                   </div>

                            </div>

                     </div>


                     <div className="uk-width-1-2@s ">
                             <div className="minecraftComboBg">

                             </div>
                     </div>
                </div>





















       </section>








       </section>     

);


export default Fourth_Pane;