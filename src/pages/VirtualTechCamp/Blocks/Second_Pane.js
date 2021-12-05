import react from 'react'




const Second_Pane = () => (

         <section className="">
              <div className="uk-container uk-margin-medium-top">
                <div className="uk-flex uk-flex-center" >
                      <div className="smallContainerTech uk-padding-large">
                            <p className="uk-text-center ">
                             We deliver excellence in technology education PLUS an awesome summer camp experience
                             </p>
                      </div>
                </div>
              </div>

            <div className="">
                  <div className="uk-grid-collapse" data-uk-grid>
                        <div className="uk-width-1-2@s lightBlueBg ">
                            <div className="uk-margin-large-left uk-padding uk-padding-large">
                             <h3 className="header3">CyberTeck Academy: a long history in creating <span className="greenBg" style={{color:'#fff'}}>great camp experiences</span> with a tech twist</h3>
                          
                             <p>Use your child’s school-free time for a great tech project shared with friends. All under the guidance of dedicated teachers. </p>
                               
                               <p className="uk-margin-small-top uk-margin-large-bottom"> Courses to develop critical thinking and boost creative side delivered by tech experts We guide your child in bringing ideas 
                                to life, designing their own projects and enhancing their confidence in the meantime. through tech.</p>
                            </div>
                        </div>

                        <div className="uk-width-1-2@s margin-bottom-large">
                            <div className="virtualTechDivBg uk-margin-large-right" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                                <div class="uk-flex  uk-flex-center@m uk-flex-right@l">
                                    <div class="green uk-margin-left uk-padding-small">
                                        <div className="counterVirtTech" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                        <p className="light uk-margin-remove-top uk-text-center counter">Over</p>
                                        <h1 className="uk-text-bold  light uk-margin-remove-top uk-margin-remove-bottom uk-text-center ">10</h1>
                                            
                                        <p className="light uk-margin-remove-top uk-text-center">Years of Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>  

       </section>



);


export default Second_Pane;