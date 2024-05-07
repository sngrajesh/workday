import "./cardSkeleton.css";

const CardSkeleton = () => {
  return (
    <div className="skeleton-job-wrapper">
      <div className="skeleton-job-detail">
        <div className="skeleton-posted-date-applicants">
          <div className="skeleton-posted-date animate-skeleton"></div>
        </div>
        <div className="skeleton-job-company-detail">
          <div className="skeleton-company-logo animate-skeleton"> </div>
          <div className="skeleton-job-company-detail-innder-wrapper">
            <div className="skeleton-company-name animate-skeleton"></div>
            <div className="skeleton-job-role animate-skeleton"></div>
            <div className="skeleton-job-location animate-skeleton"></div>
          </div>
        </div>
        <div className="skeleton-job-salary animate-skeleton"></div>
        <div className="skeleton-companydetai-jobdetail">
          <div className="skeleton-job-detail-h3 animate-skeleton"></div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <p
              key={index}
              className="skeleton-job-detail-paragrahp animate-skeleton"
            ></p>
          ))}
        </div>
        <div className="skeleton-bottom-overlay-content">
          <button className="view-job-button">View Job</button>

          <div className="skeleton-experience-required">
            <div className="skeleton-experience-h4 animate-skeleton"></div>
            <div className="skeleton-experience-span animate-skeleton"></div>
          </div>
          <div className="skeleton-apply-links">
            <button className="skeleton-apply-links-button">
              ⚡ Easy Apply
            </button>

            <button className="skeleton-apply-links-button ask-for-referral-button">
              <img
                src="https://media.licdn.com/dms/image/C5103AQHVt2mE6FxV8Q/profile-displayphoto-shrink_800_800/0/1534593555331?e=1717632000&v=beta&t=4it3udzASl4VF4xaqVNLIeuov1xNZK5binLTShSqA1s"
                alt=""
              />
              <img
                src="https://media.licdn.com/dms/image/C4E03AQGYqFu0X9bi0g/profile-displayphoto-shrink_100_100/0/1639030271843?e=1720656000&v=beta&t=neogXo_o-h-10bavgc8jfRwHcGa2KRPbSupzkWoOPG0"
                alt=""
              />
              &nbsp; Unlock Referral Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
