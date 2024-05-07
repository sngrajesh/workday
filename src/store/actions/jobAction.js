import { SET_JOBS, FILTER_CHANGE } from "./../actionTypes";

export const setJobs = (jobs = [], total) => ({
  type: SET_JOBS,
  payload: {
    jobs,
    total,
  },
});
