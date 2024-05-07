import axios from "axios";

const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";

export const fetchJobs = async (limit = 10, offset = 0) => {
  try {
    const response = await axios.post(
      url,
      {
        limit: limit,
        offset: offset,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    console.log(
     
      ...response.data.jdList.map((jd) => jd.companyName)
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    return {
      error: true,
      message: "Error fetching data",
    };
  }
};
