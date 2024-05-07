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
import CardOverlay from "../../components/cardOverlay/CardOverlay";
import { SelectSection } from "../../components/selectSection/SelectSection";

const HomePage = () => {
  const jobDetails = useSelector((state) => state.JOBReducer);
  const dispatch = useDispatch();
  const [inViewVisible, setInViewVisible] = useState(true);
  const { ref, inView } = useInView();
  const [allFilteredJobs, setAllFilteredJobs] = useState([]);

  const getJobs = async (page = 0) => {
    try {
      const response = await fetchJobs(jobDetails.limit, page);
      dispatch(setJobs(response.jdList, response.totalCount));
    } catch (error) {
      console.error(error);
    }
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
  const [minExp, setMinExp] = useState(undefined);
  const [remote, setRemote] = useState(undefined);
  const [techStack, setTechStack] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState(undefined);
  //Input
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  //Overlay
  const [overlay, setOverlay] = useState({
    visible: false,
    jobDetailsFromCompany: "",
  });

  let selectOptionsWithValueAndOnChange = selectOptions.map((option) => {
    switch (option.id) {
      case "role":
        return { ...option, value: role, onChange: setRole };
      case "techStack":
        return { ...option, value: techStack, onChange: setTechStack };
      case "experience":
        return { ...option, value: minExp, onChange: setMinExp };
      case "remoteOnSite":
        return { ...option, value: remote, onChange: setRemote };
      case "minBasePay":
        return { ...option, value: minBasePay, onChange: setMinBasePay };

      default:
        return option;
    }
  });

  const filterJobs = () => {
    let filteredJobs = jobDetails.jobs.filter((job) => {
      //Experience Filter
      if (minExp && job.minExp < parseInt(minExp.value)) return false;

      //Remote Filter
      if (remote && job.remote.toLowerCase() !== remote.toLowerCase())
        return false;

      //TechStack Filter if needed
      /*
      if (techStack.length > 0) {
        let techStackMatch = techStack.some((tech) =>
          job.techStack.includes(tech)
        );
        if (!techStackMatch) return false;
      }
      */

      //Role Filter if needed
      if (role.length > 0) {
        let roleMatch = role.some((role) =>
          job.jobRole.toLowerCase().includes(role.value.toLowerCase())
        );
        if (!roleMatch) return false;
      }

      //MinBasePay Filter
      if (
        minBasePay &&
        job.minJdSalary <
          parseInt(minBasePay.value.slice(0, minBasePay.value.length - 1))
      )
        return false;

      //Location Filter
      if (
        location &&
        !job.location.toLowerCase().includes(location.toLowerCase())
      )
        return false;

      //Company Name Filter
      if (
        companyName &&
        !job.companyName.toLowerCase().includes(companyName.toLowerCase())
      )
        return false;
      return true;
    });
    setAllFilteredJobs(filteredJobs);
  };

  useEffect(() => {
    filterJobs();
  }, [
    minExp,
    remote,
    techStack,
    role,
    minBasePay,
    location,
    companyName,
    jobDetails.jobs,
  ]);

  return (
    <div className="home-page">
      <div className="fileter">
        <SelectSection
          selectOptionsWithValueAndOnChange={selectOptionsWithValueAndOnChange}
        />
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
      <CardOverlay overlay={overlay} setOverlay={setOverlay} />

      <div className="home-page-content">
        {allFilteredJobs?.map((job, index) => {
          return (
            <Card
              //Data
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
              //Overlay Content
              setOverlay={setOverlay}
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
export default HomePage;
