import "./Card.css";

const Card = ({
  companyName,
  jobRole,
  location,
  minExp,
  maxExp,
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode,
  logoUrl,
  jobDetailsFromCompany,
  jdLink,
}) => {
  return (
    <div className="job-wrapper">
      <div className="job-detail">
        <div className="posted-date-applicants">
          <div className="posted-date">Posted 2 days ago</div>
          <div className="applicants">10 Applicants</div>
        </div>
        <div className="job-company-detail">
          {logoUrl ? (
            <img className="company-logo" src={logoUrl} alt="company-logo" />
          ) : (
            <div className="company-logo">
              {companyName?.split(" ").map((word) => word[0].toUpperCase())}
            </div>
          )}
          <div className="job-company-detail-innder-wrapper">
            <div className="company-name">{companyName}</div>
            <div className="job-role">{jobRole}</div>
            <div className="job-location">{location}</div>
          </div>
        </div>
        <div className="job-salary">{`Estimated Salary:  ${salaryCurrencyCode} ${minJdSalary} - ${maxJdSalary} LPA`}</div>
        <div className="companydetai-jobdetail">
          <h3>About Company: </h3>
          <p className="job-detail-paragrahp">
            FalconX provides comprehensive access to the deepest digital asset
            liquidity across the globe. Through our prime brokerage platform,
            FalconX 360, investors unlock and scale returns faster and more
            efficiently than any other platform. Our 24/7, dedicated team
            enables investors to navigate dynamic markets around the clock by
            providing support for all account, operational and trading needs.
          </p>
          <h3>About Role: </h3>
          <p className="job-detail-paragrahp">{jobDetailsFromCompany}</p>
        </div>
        <div className="bottom-overlay-content">
          <button className="view-job-button">View Job</button>

          <div
            style={{
              opacity: minExp ? 1 : 0,
              userSelect: maxExp ? "auto" : "none",
            }}
            className="experience-required"
          >
            <h4>Minimum Experience</h4>
            <span>{`${minExp} years`}</span>
          </div>
          <div className="apply-links">
            {jdLink ? (
              <a
                href={jdLink}
                target="_blank"
                rel="noopener noreferrer"
                className="apply-links-button"
              >
                Easy Apply
              </a>
            ) : (
              <button className="apply-links-button">⚡ Easy Apply</button>
            )}
            <button className="apply-links-button ask-for-referral-button">
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

export default Card;
