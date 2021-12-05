import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../Api";

const saveCourse = createAsyncThunk(
  "course/save",
  async (data, thunkAPI) => {
    return data && data.id
      ? Api.Course.update(data)
      : Api.Course.create(data);
  }
);


const deleteCourse = createAsyncThunk(
  "course/delete",
  async (data, thunkAPI) => {
    return Api.Course.deleteCourse(data);
  }
);

const loadCourse = createAsyncThunk(
  "course/load",
  async (data, thunkAPI) => {
    return Api.Course.load(data);
  }
);

const loadAllCourse = createAsyncThunk(
  "course/loadAll",
  async (query, thunkAPI) => {
    return Api.Course.loadAll(query);
  }
);

const loadAllCodingCourse = createAsyncThunk(
  "course/loadAllCodingCourse",
  async (query, thunkAPI) => {
    return Api.Course.loadAllCodingCourse(query);
  }
);

const loadAllTechCampCourse = createAsyncThunk(
  "course/loadAllTechCampCourse",
  async (query, thunkAPI) => {
    return Api.Course.loadAllTechCampCourse(query);
  }
);

const loadAllComputerCourse = createAsyncThunk(
  "course/loadAllComputerCourse",
  async (query, thunkAPI) => {
    return Api.Course.loadAllComputerCourse(query);
  }
);


const loadAllVirtualcourses = createAsyncThunk(
  "course/loadAllVirtualcourses",
  async (query, thunkAPI) => {
    return Api.Course.loadAllVirtualcourses(query);
  }
);

const loadAllVirtualTechCamp = createAsyncThunk(
  "course/loadAllVirtualTechCamp",
  async (query, thunkAPI) => {
    return Api.Course.loadAllVirtualTechCamp(query);
  }
);

const loadAllGameDevCourse = createAsyncThunk(
  "course/loadAllGameDevCourse",
  async (query, thunkAPI) => {
    return Api.Course.loadAllGameDevCourse(query);
  }
);

const loadAllMathsCourse = createAsyncThunk(
  "course/loadAllMathsCourse",
  async (query, thunkAPI) => {
    return Api.Course.loadAllMathsCourse(query);
  }
);


const loadAllVirtualSmallGroup = createAsyncThunk(
  "course/loadAllVirtualSmallGroup",
  async (query, thunkAPI) => {
    return Api.Course.loadAllVirtualSmallGroup(query);
  }
);
const fetchDetailsList = createAsyncThunk(
  "course/fetchDetailsList",
  async (query, thunkAPI) => {
    return Api.Course.fetchDetailList(query);
  }
);



const CourseSlice = createSlice({
  name: "course",
  initialState: {
    saveCourse: {
      status: null,
      error: null,
      data: null
    },
    loadCourse: {
      status: null,
      error: null,
      data: null
    },
    deleteCourse: {
      status: null,
      error: null,
      data: null
    },
    loadAllCourse: {
      status: null,
      error: null,
      data: null
    },
    loadAllCodingCourse: {
      status: null,
      error: null,
      data: null
    },
    loadAllComputerCourse: {
      status: null,
      error: null,
      data: null
    },
    loadAllGameDevCourse: {
      status: null,
      error: null,
      data: null
    },
    loadAllVirtualcourses: {
      status: null,
      error: null,
      data: null
    },
    loadAllVirtualTechCamp: {
      status: null,
      error: null,
      data: null
    },
    loadAllMathsCourse: {
      status: null,
      error: null,
      data: null
    },
    loadAllTechCampCourse: {
      status: null,
      error: null,
      data: null
    },

    

    loadAllVirtualSmallGroup: {
      status: null,
      error: null,
      data: null
    },
    fetchDetailsList: {
      status: null,
      error: null,
      data: null
    },
  },
  reducers: {
    clearStoreState: (state) => {
      state.saveCourse.status = null;
      state.saveCourse.error = null;
      state.saveCourse.data = null;

      state.loadCourse.status = null;
      state.loadCourse.error = null;
      state.loadCourse.data = null;
    }
  },
  extraReducers: {


   

    [loadAllTechCampCourse.pending]: (state) => {
      state.loadAllTechCampCourse.status = "PENDING";
      state.loadAllTechCampCourse.error = null;
      state.loadAllTechCampCourse.data = null;
    },
    [loadAllTechCampCourse.fulfilled]: (state, action) => {
      state.loadAllTechCampCourse.status = "FULFILLED";
      state.loadAllTechCampCourse.error = null;
      state.loadAllTechCampCourse.data = action.payload.data;
    },
    [loadAllTechCampCourse.rejected]: (state, action) => {
      state.loadAllTechCampCourse.status = "REJECTED";
      state.loadAllTechCampCourse.error = action.error;
      state.loadAllTechCampCourse.data = null;
    },

    [loadCourse.pending]: (state) => {
      state.loadCourse.status = "PENDING";
      state.loadCourse.error = null;
      state.loadCourse.data = null;
    },
    [loadCourse.fulfilled]: (state, action) => {
      state.loadCourse.status = "FULFILLED";
      state.loadCourse.error = null;
      state.loadCourse.data = action.payload.data;
    },
    [loadCourse.rejected]: (state, action) => {
      state.loadCourse.status = "REJECTED";
      state.loadCourse.error = action.error;
      state.loadCourse.data = null;
    },

    [saveCourse.pending]: (state) => {
      state.saveCourse.status = "PENDING";
      state.saveCourse.data = null;
      state.saveCourse.error = null;
    },
    [saveCourse.fulfilled]: (state, action) => {
      state.saveCourse.status = "FULFILLED";
      state.saveCourse.data = action.payload.data;
      state.saveCourse.error = null;
    },
    [saveCourse.rejected]: (state, action) => {
      state.saveCourse.status = "REJECTED";
      state.saveCourse.data = null;
      state.saveCourse.error = action.error;
    },


     // pending state for load all courses with category coding
    [loadAllCodingCourse.pending]: (state) => {
      state.loadAllCodingCourse.status = "PENDING";
      state.loadAllCodingCourse.data = null;
      state.loadAllCodingCourse.error = null;
    },
    [loadAllCodingCourse.fulfilled]: (state, action) => {
      state.loadAllCodingCourse.status = "FULFILLED";
      state.loadAllCodingCourse.data = action.payload.data;
      state.loadAllCodingCourse.error = null;
    },
    [loadAllCodingCourse.rejected]: (state, action) => {
      state.loadAllCodingCourse.status = "REJECTED";
      state.loadAllCodingCourse.data = null;
      state.loadAllCodingCourse.error = action.error;
    },

     // pending state for load all courses with category coding
     [deleteCourse.pending]: (state) => {
      state.deleteCourse.status = "PENDING";
      state.deleteCourse.data = null;
      state.deleteCourse.error = null;
    },
    [deleteCourse.fulfilled]: (state, action) => {
      state.deleteCourse.status = "FULFILLED";
      state.deleteCourse.data = action.payload.data;
      state.deleteCourse.error = null;
    },
    [deleteCourse.rejected]: (state, action) => {
      state.deleteCourse.status = "REJECTED";
      state.deleteCourse.data = null;
      state.deleteCourse.error = action.error;
    },

     // pending state for load all courses with category coding
     [loadAllComputerCourse.pending]: (state) => {
      state.loadAllComputerCourse.status = "PENDING";
      state.loadAllComputerCourse.data = null;
      state.loadAllComputerCourse.error = null;
    },
    [loadAllComputerCourse.fulfilled]: (state, action) => {
      state.loadAllComputerCourse.status = "FULFILLED";
      state.loadAllComputerCourse.data = action.payload.data;
      state.loadAllComputerCourse.error = null;
    },
    [loadAllComputerCourse.rejected]: (state, action) => {
      state.loadAllComputerCourse.status = "REJECTED";
      state.loadAllComputerCourse.data = null;
      state.loadAllComputerCourse.error = action.error;
    },

     // pending state for load all courses with category game dev
     [loadAllGameDevCourse.pending]: (state) => {
      state.loadAllGameDevCourse.status = "PENDING";
      state.loadAllGameDevCourse.data = null;
      state.loadAllGameDevCourse.error = null;
    },
    [loadAllGameDevCourse.fulfilled]: (state, action) => {
      state.loadAllGameDevCourse.status = "FULFILLED";
      state.loadAllGameDevCourse.data = action.payload.data;
      state.loadAllGameDevCourse.error = null;
    },
    [loadAllGameDevCourse.rejected]: (state, action) => {
      state.loadAllGameDevCourse.status = "REJECTED";
      state.loadAllGameDevCourse.data = null;
      state.loadAllGameDevCourse.error = action.error;
    },

     // pending state for load all courses with category maths
     [loadAllMathsCourse.pending]: (state) => {
      state.loadAllMathsCourse.status = "PENDING";
      state.loadAllMathsCourse.data = null;
      state.loadAllMathsCourse.error = null;
    },
    [loadAllMathsCourse.fulfilled]: (state, action) => {
      state.loadAllMathsCourse.status = "FULFILLED";
      state.loadAllMathsCourse.data = action.payload.data;
      state.loadAllMathsCourse.error = null;
    },
    [loadAllMathsCourse.rejected]: (state, action) => {
      state.loadAllMathsCourse.status = "REJECTED";
      state.loadAllMathsCourse.data = null;
      state.loadAllMathsCourse.error = action.error;
    },

     // pending state for load all courses with coursetype viture one on one
     [loadAllVirtualcourses.pending]: (state) => {
      state.loadAllVirtualcourses.status = "PENDING";
      state.loadAllVirtualcourses.data = null;
      state.loadAllVirtualcourses.error = null;
    },
    [loadAllVirtualcourses.fulfilled]: (state, action) => {
      state.loadAllVirtualcourses.status = "FULFILLED";
      state.loadAllVirtualcourses.data = action.payload.data;
      state.loadAllVirtualcourses.error = null;
    },
    [loadAllVirtualcourses.rejected]: (state, action) => {
      state.loadAllVirtualcourses.status = "REJECTED";
      state.loadAllVirtualcourses.data = null;
      state.loadAllVirtualcourses.error = action.error;
    },

     // pending state for load all courses with coursetype viture tech camp
     [loadAllVirtualTechCamp.pending]: (state) => {
      state.loadAllVirtualTechCamp.status = "PENDING";
      state.loadAllVirtualTechCamp.data = null;
      state.loadAllVirtualTechCamp.error = null;
    },
    [loadAllVirtualTechCamp.fulfilled]: (state, action) => {
      state.loadAllVirtualTechCamp.status = "FULFILLED";
      state.loadAllVirtualTechCamp.data = action.payload.data;
      state.loadAllVirtualTechCamp.error = null;
    },
    [loadAllVirtualTechCamp.rejected]: (state, action) => {
      state.loadAllVirtualTechCamp.status = "REJECTED";
      state.loadAllVirtualTechCamp.data = null;
      state.loadAllVirtualTechCamp.error = action.error;
    },

   

     // pending state for load all courses with coursetype viture tech camp
     [loadAllVirtualSmallGroup.pending]: (state) => {
      state.loadAllVirtualSmallGroup.status = "PENDING";
      state.loadAllVirtualSmallGroup.data = null;
      state.loadAllVirtualSmallGroup.error = null;
    },
    [loadAllVirtualSmallGroup.fulfilled]: (state, action) => {
      state.loadAllVirtualSmallGroup.status = "FULFILLED";
      state.loadAllVirtualSmallGroup.data = action.payload.data;
      state.loadAllVirtualSmallGroup.error = null;
    },
    [loadAllVirtualSmallGroup.rejected]: (state, action) => {
      state.loadAllVirtualSmallGroup.status = "REJECTED";
      state.loadAllVirtualSmallGroup.data = null;
      state.loadAllVirtualSmallGroup.error = action.error;
    },

    


    [loadAllCourse.pending]: (state) => {
      state.loadAllCourse.status = "PENDING";
      state.loadAllCourse.data = null;
      state.loadAllCourse.error = null;
    },
    [loadAllCourse.fulfilled]: (state, action) => {
      state.loadAllCourse.status = "FULFILLED";
      state.loadAllCourse.data = action.payload.data;
      state.loadAllCourse.error = null;
    },
    [loadAllCourse.rejected]: (state, action) => {
      state.loadAllCourse.status = "REJECTED";
      state.loadAllCourse.data = null;
      state.loadAllCourse.error = action.error;
    },

    [fetchDetailsList.pending]: (state) => {
      state.fetchDetailsList.status = "PENDING";
      state.fetchDetailsList.data = null;
      state.fetchDetailsList.error = null;
    },
    [fetchDetailsList.fulfilled]: (state, action) => {
      state.fetchDetailsList.status = "FULFILLED";
      state.fetchDetailsList.data = action.payload.data;
      state.fetchDetailsList.error = null;
    },
    [fetchDetailsList.rejected]: (state, action) => {
      state.fetchDetailsList.status = "REJECTED";
      state.fetchDetailsList.data = null;
      state.fetchDetailsList.error = action.error;
    },
  },
});
const CourseReducer = CourseSlice.reducer;
export default CourseReducer;
const { clearStoreState } = CourseSlice.actions;
export { loadCourse,deleteCourse, loadAllVirtualTechCamp, loadAllTechCampCourse,loadAllVirtualSmallGroup, saveCourse, loadAllCourse, loadAllVirtualcourses, loadAllCodingCourse,loadAllComputerCourse, loadAllGameDevCourse, loadAllMathsCourse, fetchDetailsList, clearStoreState };

