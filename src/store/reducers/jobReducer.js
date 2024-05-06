import { SET_JOBS, FILTER_CHANGE } from "./../actionTypes";

const initialState = {
  jobs: [],
  displayJobs: [],
  filters: {},
};
export const JOBReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    default:
      return state;
  }
};
