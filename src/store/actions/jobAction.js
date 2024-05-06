import { SET_JOBS, FILTER_CHANGE } from "./../actionTypes";

export const setJobs = (jobs = []) => ({
  type: SET_JOBS,
  payload: {
    jobs,
  },
});
