import react from 'react';
import { Link } from 'react-router-dom';







const First_Pane = () => (

      <section className="virtualTechCampBg">
                <div className="">
            
            <div className="uk-container" >
            <div className="uk-grid  " data-uk-grid>
                 <div className="uk-width-3-4@s">
                      <div className="uk-margin-xlarge-top " >
                          <h1 className="header1 light withPadding" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Bring the experience of Camp into your home</h1>
                          <p className="subTitleText" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                          Access your child's inner creativity and bring their ideas
                          to life to empower future tech savvys. Technology-focused
                          camp courses to share with a smart group of friends from
                          the comfort of your own home.</p>

                           
                          
                      </div>

                      <div class="uk-flex withPadding ">
                         <Link to="/courses"><div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Discovery Lesson </div> </Link>
                       
                      </div>
  
                 </div>

                 <div className="uk-width-1-4@s">
                     
                 </div>
            </div>
            </div>
        </div>
      </section>

)



export default First_Pane;