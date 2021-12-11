import querystring from "querystring";

const callAPI = async (URL, body = null) => {
 console.log("CALL API courses: ", URL,);
  return fetch(getEndpoint(URL), body)
    .then((response) => response.json())
    .then((response) => {

      
      if (!response.meta.statusCode.toString().startsWith("2")) {
        throw new Error(response.meta.message);
      }
      // console.log('this is the data am looking for',response)
      console.log("this is data", response)
      return response;
    });
};


const scallAPI = async (URL, body = null) => {
  console.log("CALL API Schools: ", URL,);
   return fetch(getSchoolEndpoint(URL), body)
     .then((response) => response.json())
     .then((response) => {
 
       
       if (!response.meta.statusCode.toString().startsWith("2")) {
         throw new Error(response.meta.message);
       }
       // console.log('this is the data am looking for',response)
       console.log("this is data", response)
       return response;
     });
 };

const bcallAPI = async (URL, body = null) => {
  console.log("CALL API: ", URL,);
   return fetch(getBlogEndpoint(URL), body)
     .then((response) => response.json())
     .then((response) => {
 
       
       if (!response.meta.statusCode.toString().startsWith("2")) {
         throw new Error(response.meta.message);
       }
       // console.log('this is the data am looking for',response)
       console.log("this is data", response)
       return response;
     });
 };


 const authcallAPI = async (URL, body = null) => {
  console.log("CALL API: ", URL,);
   return fetch(getauthEndpoint(URL), body)
     .then((response) => response.json())
     .then((response) => {
 
       
       if (!response.meta.statusCode.toString().startsWith("2")) {
         throw new Error(response.meta.message);
       }
       // console.log('this is the data am looking for',response)
       console.log("this is data", response)
       return response;
     });
 };

export const appConfig = {
bhost: "https://api.cyberteckacademy.com",
authhost: "https://api.cyberteckacademy.com",
 //host: "localhost:27019/course-api",
 //host:"http://localhost:27019",
 host:"https://cybat.herokuapp.com",
 shost: "https://api.cyberteckacademy.com",
};

const Api = {

  Payment: {
    PaypalOrderCreate: () => {
      return `${getEndpoint("/course-api/create-order/paypal")}`;
    },
  },
  Support: {
    contactUs: (data) => {
      return callAPI(`/user-api/contactUs`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
  },
  Auth: {
    login: (data) => {
      return authcallAPI(`/user-api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    registration: (data) => {
      return authcallAPI(`/user-api/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    profileFetch: (userId) => {
      return scallAPI(`/user-api/profile/${userId}`, {
        // return callAPILocal(`http://192.168.0.107:5006/profile/${userId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    profileUpdate: (data) => {
      return scallAPI(`/user-api/profile`, {
        // return callAPILocal(`http://192.168.0.107:5006/profile`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
  },

  Media: {
    post: () => {
      return `${getEndpoint("https://api.cloudinary.com/v1_1/uhembe/image/upload")}`;
    },
    getImage: (code) => {
      console.log("this is code", code)
     
      return (
        code && `${getSchoolEndpoint(`/course-api/media/${code.split(".")[0]}/og`)}`
      );
    },
    getThumb: (code) => {
      if (!code) return false;
      return (
        code &&
        `${getSchoolEndpoint(`/course-api/media/${code.split(".")[0]}/thumb`)}`
      );
    },
  },

  Course: {
    create: (data) => {
      return callAPI(`/course-api/course`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    update: (data) => {
      return callAPI(`/course-api/course/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },

    deleteCourse: (data) => {
      return callAPI(`/course-api/course/${data.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },

    load: (courseId) => {
      return callAPI(`/course-api/course/${courseId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    loadAll: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return callAPI(`/course-api/course${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },
     // load all course with category coding
    loadAllCodingCourse: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return callAPI(`/course-api/course/coding${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },

     // load all course with category coding
     loadAllTechCampCourse: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return callAPI(`/course-api/course/tech-camp${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },

     // load all course type with viture one on one
     loadAllVirtualcourses: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return callAPI(`/course-api/course/virtualcourses${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },

      // load all course type with viture one on one
      loadAllVirtualTechCamp: (query) => {
        const qryString = query ? "?" + querystring.stringify(query) : "";
        return callAPI(`/course-api/course/virtual-tech-camp${qryString}`, {
          method: "GET",
          // headers: {
          //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
          // }
        });
      },

      

       // load all course type with Virtual Small Group
       loadAllVirtualSmallGroup: (query) => {
        const qryString = query ? "?" + querystring.stringify(query) : "";
        return callAPI(`/course-api/course/virtual-small-group${qryString}`, {
          method: "GET",
          // headers: {
          //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
          // }
        });
      },

    // load all course with category computer
    loadAllComputerCourse: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return callAPI(`/course-api/course/computer${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },
     // load all course with category game dev
     loadAllGameDevCourse: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return callAPI(`/course-api/course/game-dev${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },
     // load all course with category maths
     loadAllMathsCourse: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return callAPI(`/course-api/course/maths${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },
    fetchDetailList: (data) => {
      const id = data.userType === "TEACHER" ? 0 : parseInt(data.userId);
      return callAPI(`/course-api/course/participant/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
  },
  CourseSchedule: {
    create: (data) => {
      return callAPI(`/course-api/course/${data.courseId}/schedule`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    remove: (data) => {
      return callAPI(
        `/course-api/course/${data.courseId}/schedule/${data.scheduleId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8", // Indicates the content
          },
        }
      );
    },
    load: (courseId) => {
      return callAPI(`/course-api/course/${courseId}/schedule`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    book: (data) => {
      return callAPI(`/course-api/course/bookSlot`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
  },


  Blog: {
    create: (data) => {
      return bcallAPI(`/blog-api/blog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    update: (data) => {
      return bcallAPI(`/blog-api/blog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    load: (blogId) => {
      return bcallAPI(`/blog-api/blog/${blogId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    delete: (blogId) => {
      return bcallAPI(`/blog-api/blog/${blogId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    loadAll: (query) => {
      const qryString = query ? "?" + query.toString() : "";
      return bcallAPI(`/blog-api/blog${qryString}`, {
        method: "GET",
      });
    },
  },

  School: {
    searchSchoolCourses: (data, pageSize=0) => {
      console.log("SEARCH SCHOOL: ", data, pageSize);
      return getSchoolEndpoint(`/course-api/schools/courses/search?schoolName=${data.schoolFilter}&courseName=${data.courseFilter}&grade=${data.gradeFilter}&limit=${pageSize}`)
    },
    create: (data) => {
      return scallAPI(`/course-api/schools`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    update: (data) => {
      return scallAPI(`/course-api/schools/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(data),
      });
    },
    load: (schoolId) => {
      return scallAPI(`/course-api/schools/${schoolId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    loadAll: (query) => {
      const qryString = query ? "?" + querystring.stringify(query) : "";
      return scallAPI(`/course-api/schools${qryString}`, {
        method: "GET",
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        // }
      });
    },
    loadAllSchoolUrl: () => {
      return getSchoolEndpoint(`/course-api/schools`);
    },
    loadAtSchoolCourses: () => {
      console.log("LOADED ALL COURSES: ");
      // return getEndpoint(`/course-api/course?courseType=AT_SCHOOL_LOCATION`);
       return getEndpoint(`/course-api/course/school-location`);

    },

    loadAtSchoolCodingCourses: () => {
      console.log("LOADED ALL COURSES: ");
      // return getEndpoint(`/course-api/course?courseType=AT_SCHOOL_LOCATION`);
       return getEndpoint(`/course-api/course/school-location-coding`);

    },
    loadAtSchoolGameDevCourses: () => {
      console.log("LOADED ALL COURSES: ");
      // return getEndpoint(`/course-api/course?courseType=AT_SCHOOL_LOCATION`);
       return getEndpoint(`/course-api/course/school-location-game-dev`);

    },
    fetchDetailList: (data) => {
      const id = data.userType === "TEACHER" ? 0 : parseInt(data.userId);
      return scallAPI(`/course-api/course/participant/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
  },
  SchoolCourse: {
    loadAllEnrolledSchoolCourses: (data) => {
      const id = data.userType === "REPRESENTATIVE"  ? 0 : parseInt(data.userId);
      const url = `/course-api/schools/courses/participants/${id}`;
      console.log("URL", url);
      return scallAPI(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    load: (schoolId) => {
      return scallAPI(`/course-api/schools/${schoolId}/courses`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
    },
    create: (data) => {
        return scallAPI(`/course-api/schools/${data.schoolId}/courses`, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8", // Indicates the content
          },
          body: JSON.stringify(data),
        });
      },
      update: (data) => {
        return scallAPI(`/course-api/schools/${data.schoolId}/courses/${data.id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8", // Indicates the content
          },
          body: JSON.stringify(data),
        });
      },
      // SCHOOL COURSE BOOK
      book: (data) => {
        return scallAPI(`/course-api/schools/${data.schoolId}/courses/${data.courseId}/book-slot`, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8", // Indicates the content
          },
          body: JSON.stringify(data),
        });
      },
  },
};
export default Api;

const getEndpoint = (url, prod = true) => {
  if (prod) {
    return `${appConfig.host}${url}`;
  }
  let tempUrl = url.split("/");
  let service = tempUrl[1];
  let uri = tempUrl.slice(2).join("/");
 // console.log("URI: ", uri, "URL: ", url, "service: ", service);
  switch (service) {
    case "course-api":
     return `http://localhost:27019/course-api/course/${uri}`;
    // return `http://192.168.0.107:5002/${uri}`;
    //return `https://cybat.herokuapp.com/${uri}`;
    // case "user-api":
    //   return `http://192.168.0.107:5006/${uri}`;
    // case "blog-api":
    //   return `http://192.168.0.107:5003/${uri}`;
  }
};

const getSchoolEndpoint = (url, prod = true) => {
  if (prod) {
    return `${appConfig.shost}${url}`;
  }
  let tempUrl = url.split("/");
  let service = tempUrl[1];
  let uri = tempUrl.slice(2).join("/");
 // console.log("URI: ", uri, "URL: ", url, "service: ", service);
  switch (service) {
    case "course-api":
       return `https://api.cyberteckacademy.com/${uri}`;
  }
};


const getBlogEndpoint = (url, prod = true) => {
  if (prod) {
    return `${appConfig.bhost}${url}`;
  }
  let tempUrl = url.split("/");
  let service = tempUrl[1];
  let uri = tempUrl.slice(2).join("/");
 // console.log("URI: ", uri, "URL: ", url, "service: ", service);
  switch (service) {
    case "blog-api":
      return `http://192.168.0.107:5003/${uri}`;
  }
};


const getauthEndpoint = (url, prod = true) => {
  if (prod) {
    return `${appConfig.authhost}${url}`;
  }
  let tempUrl = url.split("/");
  let service = tempUrl[1];
  let uri = tempUrl.slice(2).join("/");
 // console.log("URI: ", uri, "URL: ", url, "service: ", service);
  switch (service) {
      case "user-api":
      return `http://192.168.0.107:5006/${uri}`;
  }
};
