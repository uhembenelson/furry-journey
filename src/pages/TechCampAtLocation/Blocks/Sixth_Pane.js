import React from "react";


const Sixth_Pane = () => (

     <section className="uk-margin-small-top  accBgTechCamp">
             <div className="uk-container">
                 <div className=" uk-margin-large-top  ">
                   <div className="" data-uk-grid>
                        <div className="uk-width-1-2@s">
                            <h3 className="header3  uk-margin-top  uk-text-left light">Innovative Tech Camps turn students into future tech savvysech </h3>
                                <p className ="subText   uk-text-left  light">We know how to light up the imagination of young minds 
                                and train essential skills useful for any future tech savvy.</p>


                               {/**Accordion**/}
                               <div className="accordionContainer whiteBg  uk-margin-large-bottom uk-margin-large-top">
                                   <div  className="">
                                  <ul uk-accordion="collapsible: false" >
                                                    <li uk-scrollspy="cls: uk-animation-fade4; repeat: true">
                                                        <a class="uk-accordion-title accHeader" href="#">Comprehensive tech curricula</a>
                                                        <div class="uk-accordion-content">
                                                            <p>Students develop critical thinking, design their own tech projects, 
                                                               games and animation or create obstacles in popular programming languages
                                                               built especially for students. Everything from Minecraft and Scratch to
                                                               Python and Roblox.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">Take your camp experience anywhere, anytime </a>
                                                        <div class="uk-accordion-content">
                                                            <p>School free weeks can be fun and useful. You decide when, how often and where your child 
                                                                joins smart friends at fun tech camp.</p>
                                                        </div>
                                                    </li>
                                               

                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">Opt for one of many partner locations</a>
                                                        <div class="uk-accordion-content">
                                                            <p>Choose to experience camp time with friends at Schools and Parks & Rec Centers. For
                                                                 ultimate mobility, go for Virtual or In-Person options.</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">Spring break and summer camps to boost skills and confidence</a>
                                                        <div class="uk-accordion-content">
                                                            <p>Camps to light up the imagination of young minds and train useful skills for any future tech savvy. Abilities
                                                                 developed at camp also bring your child two steps ahead in school. </p>
                                                        </div>
                                                    </li>


                                                    <li>
                                                        <a class="uk-accordion-title accHeader" href="#">Share the camp experience with friends</a>
                                                        <div class="uk-accordion-content">
                                                            <p>The best part about learning tech and bringing ideas to life is getting to share it
                                                                 with friends. Challenge each other and advance together.</p>
                                                        </div>
                                                    </li>


                                                    
                                                    
                                  </ul>
                                  </div>
                                  </div>{/*accordion ends here*/}






                        </div>

                        <div className="uk-width-1-2@s">
                           
                        </div>
                        </div>
                   </div>
             </div>
     </section>
)


export default Sixth_Pane