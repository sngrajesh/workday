import "./HomePage.css";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { Select } from "../../components/selectMenu/Select";
import { fetchJobs } from "../../utils/fetchJobs";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../../store/actions/jobAction";
import { useInView } from "react-intersection-observer";
import { SpinnerIcon } from "../../assets/Icons";
import CardSkeleton from "../../components/card/skeleton/cardSkeleton";
import { selectOptions } from "../../assets/Data";

const HomePage = () => {
  const jobDetails = useSelector((state) => state.JOBReducer);
  const dispatch = useDispatch();
  const [inViewVisible, setInViewVisible] = useState(true);
  const { ref, inView } = useInView();

  const getJobs = async (page = 0) => {
    try {
      const response = await fetchJobs(jobDetails.limit, page);
      dispatch(setJobs(response.jdList, response.totalCount));
    } catch (error) {
      console.error(error);
    }
    console.log(jobDetails);
  };

  useEffect(() => {
    if (inView) {
      setInViewVisible(true);
      getJobs(jobDetails.page + 1);
    }
  }, [inView]);

  useEffect(() => {
    getJobs(0);
  }, []);

  //Select
  const [minExp, setMinExp] = useState(0);
  const [remote, setRemote] = useState("");
  const [techStack, setTechStack] = useState("");
  const [role, setRole] = useState("");
  const [minBasePay, setMinBasePay] = useState("");
  //Input
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="home-page">
      <div className="fileter">
        <SelectSection />
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          className="fileter-input"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          className="fileter-input"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="home-page-content">
        {jobDetails.jobs.map((job, index) => {
          return (
            <Card
              key={index}
              companyName={job.companyName}
              jobRole={job.jobRole}
              location={job.location}
              minExp={job.minExp}
              maxExp={job.maxExp}
              minJdSalary={job.minJdSalary}
              maxJdSalary={job.maxJdSalary}
              salaryCurrencyCode={job.salaryCurrencyCode}
              logoUrl={job.logoUrl}
              jobDetailsFromCompany={job.jobDetailsFromCompany}
              jdLink={job.jdLink}
            />
          );
        })}
        {inViewVisible
          ? [1, 2, 3, 4].map((item, index) => <CardSkeleton key={index} />)
          : null}
      </div>

      <div className="loading-spinner" ref={ref}>
        {inViewVisible ? <SpinnerIcon /> : <span>That All</span>}
      </div>
    </div>
  );
};

const SelectSection = () => {
  return (
    <>
      {selectOptions.map((option, index) => {
        return (
          <Select
            key={index}
            id={option.id}
            title={option.title}
            placeholder={option.placeholder}
            options={
              option.nested //Return the all the valuse of each clusters into one array oflabel and value
                ? option.options.flatMap((option, index) => {
                    return option.clusters.map((cluster, index) => ({
                      label: cluster,
                      value: cluster,
                    }));
                  })
                : option.options.map((option, index) => ({
                    label: option,
                    value: option,
                  }))
            }
            multiple={option.multiple}
          />
        );
      })}
    </>
  );
};

export default HomePage;
