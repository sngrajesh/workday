import "./cardOverlay.css";

const CardOverlay = ({ overlay, setOverlay }) => {
  return (
    <div
      className={`card-overlay ${
        overlay?.visible ? "card-overlay-visible" : ""
      }`}
      onClick={
        overlay?.visible
          ? (e) => {
              if (e.target.className === "card-overlay card-overlay-visible") {
                setOverlay({
                  visible: false,
                  jobDetailsFromCompany: "",
                });
              }
            }
          : null
      }
    >
      <div className="card-overlay-content">
        <h2>Job Description</h2>
        <h3>About Role</h3>
        <p>
            {overlay?.jobDetailsFromCompany}
        </p>
      </div>
    </div>
  );
};

export default CardOverlay;
