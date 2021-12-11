import Layout from "../Layout";
import "./checkout.css"
import {
    CourseBlock,
    HeaderBox, HeaderDescription, HeaderTitle, PageBlock, PrimaryText, SecondaryText
} from "./../../features/Atoms"
import { Grid, Box, Checkbox, FormControlLabel, Slider, Hidden, CircularProgress } from "@material-ui/core";
import coverImg from "./../../images/course_header.jpg";
import { useDispatch, useSelector } from 'react-redux'
import { loadAllMathsCourse } from "./../../DataStore/CourseReducer"
import { useEffect, useState } from "react";
import Data from "../../Data";
import course1 from "./../../images/course1.JPG"
import Api from "../../Api";
import myicon from "../../images/online-learning.png"
import deleteicon from "../../images/delete.png";

export default function VcheckOut(props) {
    const [filterQuery, setFilterQuery] = useState({});
    const courseListStatus = useSelector(state => state.course.loadAllMathsCourse && state.course.loadAllMathsCourse)
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false)
    const [data, setData] = useState([])
    const [subtotal, setSubtotal] = useState()
    const [discount, setDiscount] = useState()
    const [total, setTotal] = useState()

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [exp, setExp] = useState('')
    const [scode, setScode] = useState('')
    const [noresult, setNoresult] = useState()
    const [discountlastname, setDiscountlastname] = useState()
    const [ singlediscount, setSinglediscount ] = useState()
    const [id , setId] = useState('')
    



    const makepayment = ()=> {
       return(
           window.location.replace(`https://test.cyberteckacademy.com/auth/?amount=${total}`)
       )
    }
   

   const removeitem = () => {
     
    const index = data.findIndex(key => key.id === `${id}`);
console.log(index)
data.splice(index,1);
console.log(data);
localStorage.setItem("allCourseEntries", JSON.stringify(data));
window.location.reload(false);

   
   }

    

    useEffect(() => {
        const mydata = localStorage.getItem('allCourseEntries')
        console.log("this is my data ", mydata)
       

        if(mydata === null || mydata === `[]` ){
            setNoresult(true)
        }else{
            const ldata = JSON.parse([mydata])
            setData(ldata)
            console.log(ldata.length)
            if(ldata.length === 1 ){
                
                const ids = ldata.map((item) => item.price );
                                    const  sum = ids.reduce((a, b) => a + b, 0);
                                    setSubtotal(sum)
                                    const newt = subtotal
                                    setTotal(sum)


            }else{
                const ldata = JSON.parse([mydata])
                                    const mylastname = ldata[0].lastName
                                    const lastnames = ldata[1].lastName

                                    if(mylastname === lastnames){
                                                                const ids = ldata.map((item) => item.price );
                                                                const  sum = ids.reduce((a, b) => a + b, 0);
                                                                const adddiscount = ids.splice(1)
                                                                const sumdiscount = adddiscount.reduce((a,b) => a + b, 0);
                                                                 const maindiscount = sumdiscount 
                                                                // setDiscount(maindiscount)
                                                                 const percentage = maindiscount *5
                                                                 const medis = percentage/100
                                                                 setDiscount(medis)
                                                                 setSubtotal(sum)
                                                                 const mt = sum - medis
                                                                 setTotal(mt)


console.log("my discount", sumdiscount, sum)
                                                                 
                                                
                                                               
                                                               
                                                              
                                                               
                                                               
                                                
                                                                
                                                
                                                
                                                                 
                                                             }else{
                                                                
                                                                const ldata = JSON.parse([mydata])
                                                                setData(ldata)
                                                                const ids = ldata.map((item) => item.price );
                                                                const  sum = ids.reduce((a, b) => a + b, 0);
                                                                setSubtotal(sum)
                                                                const newt = subtotal
                                                                setTotal(sum)

                                                             }
                                      
                
            }



        }






//        if(mydata === null){
//            setNoresult(true)
           
//        }else{
//         const ldata = JSON.parse([mydata])
    

//        setData(ldata)
          
       
//           const initallastname = ldata.map((item) => item.lastName );
//           const mainlastname = initallastname[0]
//           setDiscountlastname(mainlastname)
        
        


//          // setting subtoatl 

//                 if(ldata.length <= 1){

//                     const ids = ldata.map((item) => item.price );
//                     const  sum = ids.reduce((a, b) => a + b, 0);
//                     setSubtotal(sum)
//                     const newt = subtotal
//                     setDiscount()
//                     setTotal(newt)
//                     console.log("first side")
                   
                   

//                 }else{
//                     const ldata = JSON.parse([mydata])
//                     const mylastname = ldata[0].lastName
//                     const lastnames = ldata[2].lastName

//                     if(mylastname === lastnames){
//                         const ids = ldata.map((item) => item.price );
//                         const  sum = ids.reduce((a, b) => a + b, 0);
//                         const adddiscount = ids.splice(1)
//                         const sumdiscount = adddiscount.reduce((a,b) => a + b, 0);
//                          const maindiscount = sumdiscount - discount
//                          console.log("my discount", adddiscount, sumdiscount, maindiscount)
                         
        
//                         setSubtotal(sum)
//                         const percentage = sum *5
//                         const medis = percentage/100
//                         setDiscount(medis)
//                         const mt = subtotal - discount
        
//                         setTotal(mt)
        
        
                         
//                      }
//                 }

        
         
//         // const  getnewdata = () =>{
            
//         //      if(mylastname === lastnames){
//         //         const ids = ldata.map((item) => item.price );
//         //         const  sum = ids.reduce((a, b) => a + b, 0);
//         //         const adddiscount = ids.splice(1)
//         //         const sumdiscount = adddiscount.reduce((a,b) => a + b, 0);
//         //          const maindiscount = sumdiscount - discount
//         //          console.log("my discount", adddiscount, sumdiscount, maindiscount)
                 

//         //         setSubtotal(sum)
//         //         const percentage = sum *5
//         //         const medis = percentage/100
//         //         setDiscount(medis)
//         //         const mt = subtotal - discount

//         //         setTotal(mt)


                 
//         //      }else{
//         //          setDiscount()
//         //          setTotal(subtotal)



//         //      }
//         //  }
//         //  getnewdata()
         



//         // console.log("this are all my prices",ids.splice(1))
         

        

         

        
              
          

          





//          // setTotal(subtotal - discount)
         

//     //       setData(ldata)
//     //       const ifname = ldata.map((item) =>
//     //       item.lastName
//     //   );
     
// //       const size = 3
// //   const items = ifname.slice(2, size)
// //   //console.log("my item", items)
  
  
// //   const firstone = ifname.slice(1);
// //   const secondone = ifname.slice(2)
// //   console.log("first", firstone, "second", secondone)
// //   setTotal(subtotal - discount)
  
//        }
    
   


      
        
     

    }, [])

    

    const calculatediscount = (item) => {
    //   const discountprice = item.price - discount
    //   setSinglediscount(discountprice)
  }

    useEffect(() => {
        if (!mounted) {
            dispatch(loadAllMathsCourse());
            setMounted(true)
            // alert("this is working")
        }
    }, [])

    const handleFilterChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newFilterQuery = { ...filterQuery }

        const queryFieldValues = filterQuery[fieldName] || []
        const newQueryFieldValues = e.target.checked
            ? [...queryFieldValues, fieldValue]
            : queryFieldValues.filter(item => item !== fieldValue);
        newFilterQuery[fieldName] = newQueryFieldValues;
        setFilterQuery({
            ...newFilterQuery
        })
        dispatch(loadAllMathsCourse(newFilterQuery));
    }

    return (
        <Layout className="detailsBlock" fillHeader style={{ background: '#f6f7f7', paddingTop: "7%" }}>



            <div class="uk-container" >
           

               {
                   noresult === true?(
                      

<div class=" uk-margin-top uk-height-medium  uk-flex uk-flex-center uk-flex-middle">
    <h2>No items in your cart</h2>
    </div>
                   ):(
                    <div className="uk-grid uk-margin-large-top" data-uk-grid>
                 
                    
                    <div className="uk-width-3-4">
                    <h6>Order Summary</h6>



                        {
                            data.map(item => (
                                
                                <div>
                                   
                                     <div class="uk-card uk-card-default uk-card-body uk-card-small uk-margin-small-top uk-margin-small-bottom  " style={{ borderRadius: 10 }}>
                                     
                            <div className="uk-grid" data-uk-grid>
                                <div className=" uk-width-1-6 " >
                                    <div class="uk-text-left">
                                        <img src={myicon} />
                                    </div>
                                </div>

                                <div className=" uk-width-1-3 uk-margin-small-top " >
                                    <div class=" uk-text-left ">
                                        <div>

                                            <p style={{}}>{item.title}</p>
                                        </div>

                                        <div>
                                            <p>{item.duration}</p>
                                        </div>

                                        <div>
                                            <p>{item.firstName} {item.lastName} {id}</p>
                                        </div>


                                    </div>
                                </div>

                                <div className=" uk-width-1-6 uk-text-center uk-margin-small-top " >
                                    <p>${item.price}
                                    {
                                        discountlastname === item.lastName?(
                                            calculatediscount(item)
                                        
                                                
                                            
                                        ):(null)
                                    }
                                    
                                    
                                    </p>
                                </div>

                                <div className=" uk-width-1-6  uk-margin-small-top " >

                                    <p onClick={()=> removeitem(
                                       setId(item.id)
                                    ) } class="uk-text-right"> <img src={deleteicon}  width="25px"/></p>
                                </div>
                            </div>
                        </div>
                                 </div>
                                
                               
                            )

                            )
                        }
                    </div>

                    <div className="uk-width-1-4 ">
                        <h6>Payment Summary</h6>
                        <div className=" uk-card uk-card-default uk-card-body uk-card-small   uk-margin-large-bottom uk-margin-small-top " style={{ borderRadius: 10, }}>
                            <div className="uk-grid" data-uk-grid>
                                <div className="uk-width-1-2">
                                    <p className="uk-text-left">Sub Total</p>
                                </div>

                                <div className="uk-width-1-2">
                                    <p className="uk-text-right">${subtotal}</p>
                                </div>
                            </div>


                            <div className="uk-grid uk-margin-remove-top" data-uk-grid>
                                <div className="uk-width-1-2 ">
                                    <p className="uk-text-left">Discount</p>
                                </div>

                                <div className="uk-width-1-2">
                                    <strike> <p className="uk-text-right">${discount}</p></strike>
                                </div>
                            </div>

                            <hr />
                            <div className="uk-grid" data-uk-grid>
                                <div className="uk-width-1-2">
                                    <p className="uk-text-left">Total</p>
                                </div>

                                <div className="uk-width-1-2">
                                    <p className="uk-text-right">USD ${total}</p>
                                </div>


                            </div>

                            <div className="uk-flex uk-flex-center  uk-margin-small-top">

                                <div onClick={makepayment} class="btn-pay uk-text-center " type="button" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">Pay Now ${total}</div>


                            </div>
                        </div>

                        {/* <div class="uk-card-small uk-card-body uk-card-default" style={{borderRadius:'10px'}} >
                            <div className="uk-width-1-1">

                                <div> <h3 className="uk-text-left">Pay</h3> </div>






                                <div>
                                    <form class="uk-grid-small" data-uk-grid>

                                        <div class="uk-width-1-1">
                                            <p className="fieldTitle">Card Number</p>
                                            <input
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value)} class="uk-input customInput" type="text" placeholder="Card number" />
                                        </div>
                                        <div class="uk-width-1-1">
                                            <p className="fieldTitle"> Card Name</p>
                                            <input
                                                value={cardName}
                                                onChange={(e) => setCardName(e.target.value)} class="uk-input customInput" type="text" placeholder="Card name" />
                                        </div>





                                        <div class="uk-width-1-2@s">
                                            <p className="fieldTitle">Exp Date</p>
                                            <input
                                                value={exp}
                                                onChange={(e) => setExp(e.target.value)} class="uk-input customInput" type="text" placeholder="Exp date" />
                                        </div>
                                        <div class="uk-width-1-2@s">
                                            <p className="fieldTitle">Security Number</p>
                                            <input
                                                value={scode}
                                                onChange={(e) => setScode(e.target.value)} class="uk-input customInput" type="text" placeholder="CVV" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="uk-flex uk-flex-center uk-margin-small-top">
                                <div onClick={makepayment} style={{ fontSize: '14px' }} class="btn-pay uk-text-center " uk-scrollspy="cls: uk-animation-fade; repeat: true">
                                    Confirm Payment ${total}
                                </div>
                            </div>
                        </div> */}












                    </div>
                </div>
                   )
               }

            </div>






            <div id="modal-example" data-uk-modal>
                <div class="uk-modal-dialog uk-modal-body border-radius" style={{ borderRadius: 5 }}>

                    <div className="uk-width-1-1">

                        <div> <h3 className="uk-text-left">Pay</h3> </div>

                        <div className="dCard uk-margin-medium-bottom">

                            <div className="uk-padding">
                                <p className="uk-margin-large-top uk-text-small light">NUMBER</p>
                                <h3 className="uk-margin-remove-top cardNumber light">1234 5678 890  6789</h3>

                                <div className="uk-grid uk-margin-medium-top" data-uk-grid>
                                    <div className="uk-width-1-2">

                                        <p className=" uk-text-small light">NAME</p>
                                        <p className="uk-text-small light">{cardName}</p>
                                    </div>

                                    <div className="uk-width-1-2">

                                        <p className=" uk-text-small uk-text-right light">EXP DATE</p>
                                        <p className="uk-text-small uk-text-right light">09/24</p>
                                    </div>
                                </div>
                            </div>


                        </div>




                        <div>
                            <form class="uk-grid-small" data-uk-grid>
                                <div class="uk-width-1-1">
                                    <p className="fieldTitle"> Card Name</p>
                                    <input
                                        value={cardName}
                                        onChange={(e) => setCardName(e.target.value)} class="uk-input customInput" type="text" placeholder="Enter the name on your card" />
                                </div>

                                <div class="uk-width-1-1">
                                    <p className="fieldTitle">Card Number</p>
                                    <input
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)} class="uk-input customInput" type="text" placeholder="Enter the name on your card" />
                                </div>



                                <div class="uk-width-1-2@s">
                                    <p className="fieldTitle">Exp Date</p>
                                    <input
                                        value={exp}
                                        onChange={(e) => setExp(e.target.value)} class="uk-input customInput" type="text" placeholder="Enter the name on your card" />
                                </div>
                                <div class="uk-width-1-2@s">
                                    <p className="fieldTitle">Security Number</p>
                                    <input
                                        value={scode}
                                        onChange={(e) => setScode(e.target.value)} class="uk-input customInput" type="text" placeholder="Enter the name on your card" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="uk-flex uk-flex-center uk-margin-small-top">
                        <div class="btn-pay uk-text-center " uk-scrollspy="cls: uk-animation-fade; repeat: true">Confirm Payment ${total}</div>
                    </div>
                </div>
            </div>





        </Layout>
    );
}






//export default mathsTutoring ;