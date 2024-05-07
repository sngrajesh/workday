import { SET_JOBS } from "./../actionTypes";

const initialState = {
  jobs: [],
  total: 0,
  page: 0,
  limit: 10,
  totalPages: 1,
};
export const JOBReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload.jobs],
        total: action.payload.total,
        page: Math.ceil(state.jobs.length / state.limit),
        totalPages: Math.ceil(action.payload.total / state.limit),
      };
    default:
      return state;
  }
};
