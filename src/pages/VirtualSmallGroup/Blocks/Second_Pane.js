import react from 'react';
import groupImg from './../../../images/groupImg.png'






const Second_Pane =  () => (
     <div className="uk-container uk-margin-large-top">
          <div className="uk-grid" data-uk-grid>
                     <div className="uk-width-1-2@s">
                         <div className="uk-marg-small-top">
                              <img src={groupImg} />
                         </div>
                     </div>

                     <div className="uk-width-1-2@s">
                         <div className="uk-margin-large-top uk-padding">
                             <h3 className="uk-text-bold ">Why choose Small Group Computer Courses</h3>
                             <p>A chance for students to make friends and learn new tech skills. Sharing
                                  their designs with peers solidifies important social skills. Experimenting 
                                  in Minecraft or Roblox expands creativity.</p>
                                  <p className="uk-margin-small-top">Dedicated teachers lead the way
                                  for your child through fascinating computer courses that improve programming
                                  abilities and set imagination on fire.</p>
                         </div>
                     </div>
          </div>
     </div>
);



export default Second_Pane;