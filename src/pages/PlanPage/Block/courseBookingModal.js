import { Dialog, DialogContent } from "@material-ui/core";
import { profileFetch, profileUpdate } from "./../../../DataStore/AuthReducer";
import { bookSchoolCourse } from "./../../../DataStore/SchoolCoursesReducer";
import { useUserInfo } from "../../../features/Authentication/Authorize";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  Stepper,
  StepLabel,
  Step,
  Snackbar,
  Backdrop,
  CircularProgress,
  DialogTitle,
} from "@material-ui/core";
import {
  HeaderBox,
  HeaderTitle,
  PageBlock,
  PrimaryButton,
  PrimaryText,
  SecondaryText,
  TextInputBox,
} from "./../../../features/Atoms";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaypalIntregration from "./../../CourseBookingPage/PaypalIntregrationButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {AsynCallLoading} from './../../../features/Atoms';
import axios from "axios";
import { Autocomplete } from "formik-material-ui-lab";

export default (props) => {
  const profileData = useSelector((state) => state?.auth?.profileFetch?.data);
  const bookSchoolCourseStatus = useSelector((state) => state?.schoolCourses?.bookSchoolCourse?.status);
  const profileUpdateStatus = useSelector(
    (state) => state?.auth?.profileUpdate?.status
  );
  const userInfo = useUserInfo();
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [studentDetails, setStudentDetails] = useState({});
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart ] = useState(false)
  useEffect(() => {
    dispatch(profileFetch(userInfo.userId));
  }, [mounted]);

  useEffect(() => {
    setStudentDetails(profileData);
  }, [profileData]);

  useEffect(() => {
    if(bookSchoolCourseStatus === 'FULFILLED'){
      setLoading(false);
      props?.handleClose();
      history.push("/dashboard")
    }
    if(bookSchoolCourseStatus === 'PENDING'){
      setLoading(true);
    }
    if(bookSchoolCourseStatus === 'REJECTED'){
      setLoading(false);
    }


   

  }, [bookSchoolCourseStatus]);

  const getSteps = () => {
    return ["Student Details", "Parent Details", "Make Payment"];
  };
  const steps = getSteps();
  const handleNext = (formData, action, type) => {
    if (type === "STUDENT") {
      setStudentDetails({ ...studentDetails, ...formData });
    } else if (type === "PARENT") {
      setStudentDetails({ ...studentDetails, ...formData });
      dispatch(profileUpdate({ ...formData, userId: userInfo.userId }));
    }else if (type === "PAYMENT") {
      setStudentDetails({ ...studentDetails, ...formData });
      dispatch(profileUpdate({ ...formData, userId: userInfo.userId }));
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handlePaypalPayment = (token) => {
    const data = {
      ...studentDetails,
      tokenData: token,
      userId: userInfo && userInfo.userId,
      paymentMethod: "PAYPAL",
      courseId: props?.courseInfo?.id,
      schoolId: props?.schoolId,
    };
    // console.log("data: ", data);
    dispatch(bookSchoolCourse(data));
    
  };

  const addToCart = () =>{
    setShowCart(true)
    const mydata = localStorage.getItem('data')



    const checkoutdata = {
      schoolId:props?.schoolId,
      parentEmail:studentDetails.parentEmail,
      firstName:studentDetails.firstName,
      lastName: studentDetails.lastName,
      userId:userInfo.userId,
      id:Math.random()
    }


    const existingEntries = JSON.parse(localStorage.getItem("allEntries"));
   
    console.log("this is my real vcoure", existingEntries)
    const getindexlength = [existingEntries].length - 1
    console.log("this is the length", getindexlength)

    existingEntries[getindexlength].price = 65
    existingEntries[getindexlength].firstName = studentDetails.firstName
    existingEntries[getindexlength].lastName = studentDetails.lastName
    existingEntries[getindexlength].id = Math.random()


    console.log("this it",existingEntries)




  }


  const handlePayment = () => {
     setLoading(true)
    const data = {
      "parentEmail":studentDetails.parentEmail,
      "firstName":studentDetails.firstName,
      "lastName": studentDetails.lastName,
      "userId":userInfo.userId,

      tokenData: {
        "cc": "5424000000000015",
        "cvc": "123",
        "exp": "2035-12",
        "name": "TEST"
      },
      paymentMethod: "AUTHORIZE"

    }

   // console.log("this is payment data", data)

    axios.post("https://test.cyberteckacademy.com/course-api/schools/4/courses/5/book-slot", data)
    .then(function (response){
      console.log("this is my response",response.data.meta)
      if(response.data.meta.statusCode == 200){
        setLoading(false)
        alert("Course Booked successfuly")
        props.handleClose()
      }

      if(response.data.meta.statusCode == 403){
        setLoading(false)
        alert("All seats have been taken")
        props.handleClose()
      }

    })

  }



  // console.log("info: ", props?.courseInfo)
  return (
    <>
    {loading && <AsynCallLoading open={loading}/>}
    {!loading && <Dialog
      onClose={props?.handleClose}
      aria-labelledby="simple-dialog-title"
      open={props?.isOpen}
    >
      {/* <DialogTitle style={{ textAlign: "center" }}>
        {props?.title?.title} - {`(${props?.courseInfo?.price} USD)`}
      </DialogTitle> */}
      <DialogContent>
        <Grid container justifyContent="center">
          <Grid item xs={12} style={{ marginBottom: 30 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12} md={9} component="form">
            {activeStep === 0 && profileData?.dataStatus ? (
              <StudentDetailsForm
                onSubmit={handleNext}
                initData={studentDetails}
              />
            ) : null}
            {activeStep === 1 && profileData?.dataStatus ? (
              <ParentDetailsForm
                onSubmit={handleNext}
                initData={studentDetails}
                onBack={handleBack}
              />
            ) : null}
            {activeStep === 2 && profileUpdateStatus === "FULFILLED" && (
              <Box style={{ textAlign: "center", marginTop: 10 }}>
                <Button onClick={handleBack} style={{ margin: "10px auto" }}>
                  Back
                </Button>
                {
                  showCart == true ? (
                    
                    <Button onClick={handleBack} style={{ margin: "10px auto" }}> Buy course for sibling </Button>
                    ):
                  (<Link >
                     <Button onClick={addToCart} style={{ margin: "10px auto" }}> Add to Cart </Button>
                     </Link>
                     )
                }
               

               

              
                {/* <PaypalIntregration
                  courseType="SCHOOL_COURSE"
                  handlePaypalPayment={handlePaypalPayment}
                  courseName={props?.courseInfo?.title}
                  amount={props?.courseInfo?.price}
                  courseId={props?.courseInfo?.id}
                /> */}
              </Box>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>}
    </>
  );
};

const ParentDetailsForm = (props) => {
  return props?.initData?.dataStatus ? (
    <Box>
      <Formik
        initialValues={{
          parentEmail: "",
          addressLine1: "",
          pincode: "",
          contactNo: "",
          ...props.initData,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.parentEmail) {
            errors.parentEmail = "Required";
          }
          if (!values.addressLine1) {
            errors.addressLine1 = "Required";
          }
          if (!values.pincode) {
            errors.pincode = "Required";
          }
          if (!values.contactNo) {
            errors.contactNo = "Required";
          }
          return errors;
        }}
        onSubmit={(value, action) => props.onSubmit(value, action, "PARENT")}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form>
            <TextInputBox
              type="email"
              name="parentEmail"
              label="Parent's Email"
              style={{ ...StyledTextInputBox }}
              required
            />
            <TextInputBox
              type="text"
              name="contactNo"
              label="Contact Number"
              style={{ ...StyledTextInputBox }}
              required
            />
            <TextInputBox
              type="text"
              name="addressLine1"
              label="Address Line 1"
              style={{ ...StyledTextInputBox }}
              required
            />
            <TextInputBox
              type="text"
              name="addressLine2"
              label="Address Line 2"
              style={{ ...StyledTextInputBox }}
            />
            <TextInputBox
              type="text"
              name="pincode"
              label="Zipcode"
              style={{ ...StyledTextInputBox }}
              required
            />
            <Box style={{ textAlign: "center", marginTop: 10 }}>
              <Button onClick={props.onBack}>Back</Button>
              <PrimaryButton
                onClick={handleSubmit}
                style={{
                  background: "#73d56e",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                Next
              </PrimaryButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  ) : null;
};

const StudentDetailsForm = (props) => {
  return props?.initData?.dataStatus ? (
    <Box>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          studentAge: "",
          grade: "",
          ...props.initData,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.grade) {
            errors.grade = "Required";
          }
          if (!values.studentAge) {
            errors.studentAge = "Required";
          }
          return errors;
        }}
        onSubmit={(value, action) => props.onSubmit(value, action, "STUDENT")}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form>
            <TextInputBox
              type="text"
              name="firstName"
              label="Student First Name"
              style={{ ...StyledTextInputBox }}
              required
            />
            <TextInputBox
              type="text"
              name="lastName"
              label="Student Last Name"
              style={{ ...StyledTextInputBox }}
              required
            />
            <TextInputBox
              type="number"
              name="grade"
              label="Student Grade"
              style={{ ...StyledTextInputBox }}
              required
            />
            <TextInputBox
              type="number"
              name="studentAge"
              label="Student Age"
              required
              style={{ ...StyledTextInputBox }}
            />
            <br />
            <Box style={{ textAlign: "center", marginTop: 10 }}>
              <PrimaryButton
                onClick={handleSubmit}
                style={{ background: "#73d56e", color: "white" }}
              >
                Next
              </PrimaryButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  ) : null;
};






const StyledTextInputBox = {
  width: "100%",
  margin: "10px 0",
};
