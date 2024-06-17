import "./findus.css";

const Findus = () => {
  return (
    <div className="findus_container">
      <div className="left">
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11835.526792547054!2d77.0935489118327!3d28.64505940346115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694064854083!5m2!1sen!2sin" loading="lazy" width="100%" height="320" rameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

        <h2>MidAsia Routes, INC.</h2>
        <p
          style={{
            marginBottom: "30px",
          }}>
          Delhi B/176-Greenfields,Delhi-NCR,121003
        </p>
        <div className="findus_office_details">
          <p>Office: +91-8750970676</p>
          <p>MidAsia Routes Expeditions Info: +1 (917) 993-7606</p>
        </div>

        <p>
          Email:
          <a href="mailto:sumit@midasiaroutes.com">sumit@midasiaroutes.com</a>
        </p>
      </div>
      <div className="right">
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11835.526792547054!2d77.0935489118327!3d28.64505940346115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694064854083!5m2!1sen!2sin" loading="lazy" width="100%" height="320" rameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

        <h2>Office Branch/DMC</h2>
        <p
          style={{
            marginBottom: "30px",
          }}>
          Bangkok Phaya thai Plaza,BTS Phaya Thai, Ratchathewi, Bangkok 10400, Thailand
        </p>
        <div className="findus_office_details">
          <p>Office: +91-8750970676</p>
          <p>Traveling Client Assistance: +1 (917) 993-7606</p>
        </div>
        <p>
          Email:
          <a href="mailto:sumit@midasiaroutes.com">sumit@midasiaroutes.com</a>
        </p>
      </div>
    </div>
  );
};

export default Findus;
