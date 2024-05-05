import Card from "../../components/card/Card";
import "./HomePage.css";
const HomePage = () => {
  const JobData = {
    jdList: [
      {
        jdUid: "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 103,
        minJdSalary: 100,
        salaryCurrencyCode: "USD",
        location: "mumbai",
        minExp: null,
        maxExp: null,
        jobRole: "ios",
        companyName: "LG",
        logoUrl: "https://logo.clearbit.com/lg.com",
      },
      {
        jdUid: "cfff35d4-053c-11ef-83d3-06301d0a7178-92016",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 28,
        minJdSalary: 26,
        salaryCurrencyCode: "USD",
        location: "remote",
        minExp: 2,
        maxExp: 11,
        jobRole: "android",
        companyName: "Sony",
        logoUrl: "https://logo.clearbit.com/sony.com",
      },
      {
        jdUid: "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 45,
        minJdSalary: 35,
        salaryCurrencyCode: "USD",
        location: "chennai",
        minExp: 5,
        maxExp: 6,
        jobRole: "tech lead",
        companyName: "Adobe Systems",
        logoUrl: "https://logo.clearbit.com/adobe.com",
      },
      {
        jdUid: "cfff35ed-053c-11ef-83d3-06301d0a7178-92020",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 48,
        minJdSalary: 26,
        salaryCurrencyCode: "USD",
        location: "delhi ncr",
        minExp: 1,
        maxExp: 8,
        jobRole: "frontend",
        companyName: "HP",
        logoUrl: "https://logo.clearbit.com/hp.com",
      },
      {
        jdUid: "cfff35fb-053c-11ef-83d3-06301d0a7178-92022",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 19,
        minJdSalary: 15,
        salaryCurrencyCode: "USD",
        location: "mumbai",
        minExp: 8,
        maxExp: 9,
        jobRole: "ios",
        companyName: "eBay",
        logoUrl: "https://logo.clearbit.com/ebay.com",
      },
      {
        jdUid: "cfff3608-053c-11ef-83d3-06301d0a7178-92024",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 78,
        minJdSalary: 64,
        salaryCurrencyCode: "USD",
        location: "bangalore",
        minExp: 7,
        maxExp: 15,
        jobRole: "backend",
        companyName: "Tencent",
        logoUrl: "https://logo.clearbit.com/tencent.com",
      },
      {
        jdUid: "cfff3614-053c-11ef-83d3-06301d0a7178-92026",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 5,
        minJdSalary: 3,
        salaryCurrencyCode: "USD",
        location: "remote",
        minExp: 3,
        maxExp: 12,
        jobRole: "android",
        companyName: "Apple",
        logoUrl: "https://logo.clearbit.com/apple.com",
      },
      {
        jdUid: "cfff3621-053c-11ef-83d3-06301d0a7178-92028",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 33,
        minJdSalary: 23,
        salaryCurrencyCode: "USD",
        location: "chennai",
        minExp: 1,
        maxExp: 5,
        jobRole: "tech lead",
        companyName: "Asus",
        logoUrl: "https://logo.clearbit.com/asus.com",
      },
      {
        jdUid: "cfff362e-053c-11ef-83d3-06301d0a7178-92030",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 83,
        minJdSalary: 61,
        salaryCurrencyCode: "USD",
        location: "delhi ncr",
        minExp: 6,
        maxExp: 11,
        jobRole: "frontend",
        companyName: "Intel Corporation",
        logoUrl: "https://logo.clearbit.com/intel.com",
      },
      {
        jdUid: "cfff363b-053c-11ef-83d3-06301d0a7178-92032",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
          "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 103,
        minJdSalary: 86,
        salaryCurrencyCode: "USD",
        location: "mumbai",
        minExp: 10,
        maxExp: 15,
        jobRole: "ios",
        companyName: "Rakuten",
        logoUrl: "https://logo.clearbit.com/rakuten.com",
      },
    ],
    totalCount: 947,
  };

  return (
    <div className="home-page">
      <div className="home-page-content">
        {JobData.jdList.map((job, index) => {
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
      </div>
    </div>
  );
};

export default HomePage;
