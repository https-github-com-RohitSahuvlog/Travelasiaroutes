import "./findus.css";

const Findus = () => {
  return (
    <div className="findus_container">
      <div className="left">
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11835.526792547054!2d77.0935489118327!3d28.64505940346115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694064854083!5m2!1sen!2sin" loading="lazy" width="100%" height="320" rameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          {/* <iframe class="border-none h-40 md:h-80" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0698512146114!2d-73.97284648459917!3d40.760488379326674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4d0cd0a3f%3A0xf9f710c2d4cc28e2!2sRemote%20Lands%20Inc!5e0!3m2!1sen!2s!4v1589518499270!5m2!1sen!2s&amp;" loading="lazy" width="100%" height="320" rameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        </div>

        <h2>REMOTE LANDS, INC.</h2>
        <p
          style={{
            marginBottom: "30px",
          }}>
          120 East 56th Street, Suite 1600 PH, New York, NY 10022 USA
        </p>
        <div className="findus_office_details">
          <p>Office: +1 (212) 518-1618</p>
          <p>Aman Jet Expeditions Info: +1 (212) 518-1801</p>
          <p>Fax: +1 877 848 2026</p>
        </div>

        <p>Office Hours: 09:00 – 18:00</p>
        <p>
          Email:
          <a href="mailto:info@remotelands.com">info@remotelands.com</a>
        </p>
      </div>
      <div className="right">
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11835.526792547054!2d77.0935489118327!3d28.64505940346115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694064854083!5m2!1sen!2sin" loading="lazy" width="100%" height="320" rameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

        <h2>REMOTE LANDS (THAILAND) CO., LTD</h2>
        <p
          style={{
            marginBottom: "30px",
          }}>
          9/F Mahatun Plaza, 888/74 Ploenchit Road, Lumpini, Pathumwan, Bangkok
          10330 Thailand
        </p>
        <div className="findus_office_details">
          <p>Office: +66 2651-5401</p>
          <p>Traveling Client Assistance: +66 63-2250282</p>
        </div>
        <p>Office Hours: 09:00 – 18:00</p>
        <p>
          Email:
          <a href="mailto:info@remotelands.com">info@remotelands.com</a>
        </p>
      </div>
    </div>
  );
};

export default Findus;
