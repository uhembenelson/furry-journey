import  react from 'react';
import { Link } from 'react-router-dom'




const First_Pane = () => (

    
    <div className="HeroBgTechLoc">
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> Take your Camp experience at a Location near you</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">We partnered up with Schools and Parks & Rec Centers to bring you 
                          summer and spring break Tech Camps at a convenient location for you. Your child can now live the camp experience on your own terms.</p>
                      </div>

                      <div class="uk-flex withPadding ">
                         <Link to="/#"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Choose Location</div> </Link>
                         
                      </div>
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>
);


export default First_Pane