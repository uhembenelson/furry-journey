
import react from 'react';
import introImg1Tech from './../../../images/intro_img4.png';
import introImg2Tech from './../../../images/intro_img5.png';
import intro_img3 from './../../../images/intro_img3.png';



const Second_Pane = () => (


    <div className="uk-container uk-margin-xlarge-top">
    <div className="animationBg">

    <div class="uk-text-center " data-uk-grid>
           <div class="uk-width-1-2@s">
          
           <div class="introImg2Tech"><img src={introImg2Tech}  uk-scrollspy="cls: uk-animation-slide-left; repeat: true"/></div>
           
           </div>
           <div class="uk-width-1-2@s"> 
               < p className="uk-text-left uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; repeat: true">Your child can join a smart group 
               of friends and explore their passion for tech with game design, animation or obstacle building. Choose a convenient location near you, or recommend us to your School or Park & Rec Center.</p>

                    
         <div class="uk-flex  ">
           <div class="btn uk-text-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: true">See all Courses</div>
          
         </div>
           </div>
    </div>

    <div class="uk-text-center " data-uk-grid>
           <div class="uk-width-1-3@s">
          
           
           
           </div>
           <div class="uk-width-2-3@s uk-margin-small-top">
               <div class="introImg1Tech uk-margin-small-top"><img src={introImg1Tech} uk-scrollspy="cls: uk-animation-slide-right; repeat: true"/></div>
           </div>
    </div>

    </div>
</div>
);



export default Second_Pane;