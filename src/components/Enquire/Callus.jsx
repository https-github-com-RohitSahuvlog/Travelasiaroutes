import "./callus.css";

const Callus = ({ setComponent }) => {
  return (
    <div className="callus_container">
      <div className="left">
        <p>
          Call and leave a message, send us an{" "}
          <span
            onClick={() => setComponent("enquire")}
            style={{
              textDecoration: "underline",
              color: "#A39060",
              cursor: "pointer",
            }}>
            online enquiry,
          </span>{" "}
          or speak to your travel advisor. We will call you back the next
          business day.
        </p>
        <h2>LEAVE A MESSAGE</h2>
        <h2
          style={{
            fontWeight: "bold",
          }}>
          +1 (212) 518-1618
        </h2>
      </div>
      <div className="right">
        <p>In our New York City office it’s now 6:22 am.</p>
        <h2>OFFICE IS CLOSED</h2>
        <h2>NEW YORK OFFICE HOURS (EDT)</h2>
        <h3>
          <span>09:00 – 18:00</span>
          <span>Monday – Friday</span>
        </h3>
      </div>
    </div>
  );
};

export default Callus;
