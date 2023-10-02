import React from "react";
import "./activity.css";

function ActivityLevels() {
  return (
    <div className="complete-page">
      <div class="container-box">
        <div className="container-text-title">
          <h2>Activity Levels</h2>
        </div>
        <hr />
        <div className="container-text">
          Each one of our adventures has an activity level ranging from 1 to 5.
          Level 1 trips are the easiest, Level 3 trips are moderate, and Level 5
          trips are considered our most strenuous trips—our ultimate challenges.
          We recommend taking into account the activity level and reading the
          activity overview for your chosen itinerary to fully prepare for your
          adventure. Read more about each activity level below.
        </div>
      </div>
      <div className="subcontainer">
        <span className="l-sub">
          <div className="container-text-subtitle">
            <h3>Easygoing – Level 1</h3>
          </div>
          <hr />
          <div className="container-text">
            Our most relaxed style of travel. Come prepared with flexibility and
            a spirit of adventure. Activities may include game drives along
            dusty or bumpy roads, canoe rides or river floats, sailing, or walks
            of up to 30 minutes on flat terrain. Trail conditions may include
            cobblestones, pavement, gravel, or dirt paths. On some days you may
            be on your feet for much of the time.
          </div>
          <div>
            <button className="level-btn">
              <b>Level 1 Tour</b>
            </button>
          </div>
        </span>
        <span className="r-sub">
          <img
            src="https://mtsobek.imgix.net/2022/03/MTSobek-ActivityLevels-150.jpg?auto=format&fit=scale&h=1280&ixlib=php-3.3.1&w=2048&wpsize=2048x2048"
            alt=""
            srcset=""
            className="img"
          />
        </span>
      </div>
      <div className="subcontainer">
        <span className="r-sub">
          <img
            src="https://mtsobek.imgix.net/2022/02/MTSobek-ActivityLevels-100.jpg?auto=format&fit=scale&h=1280&ixlib=php-3.3.1&w=2048&wpsize=2048x2048"
            alt=""
            srcset=""
            className="img"
          />
        </span>
        <span className="l-sub">
          <div className="container-text-subtitle">
            <h3>Easy-to-Moderate – Level 2</h3>
          </div>
          <hr />
          <div className="container-text">
            Active trips are appropriate for most travelers. You don’t need any
            previous kayaking, hiking, or other experience, but should be in
            generally fit condition. Trips may include short hikes or walking of
            up to 3 hours at elevations below 6,000 feet, sea kayaking in
            protected waters, or river rafting on Class I-II rapids.
          </div>
          <div>
            <button className="level-btn">Level 2 Tour</button>
          </div>
        </span>
      </div>
      <div className="subcontainer">
        <span className="l-sub">
          <div className="container-text-subtitle">
            <h3>Moderate – Level 3</h3>
          </div>
          <hr />
          <div className="container-text">
            The majority of MT Sobek trips. These typically include 3 to 6 hours
            of physical activity per day, such as rafting or wilderness camping.
            Eight to ten-mile hikes can reach up to 10,000 feet and may include
            some steep ascents or descents. River rafting trips include Class
            III rapids and sea kayaking trips to visit protected waters.
          </div>
          <div>
            <button className="level-btn">Level 3 Tour</button>
          </div>
        </span>
        <span className="r-sub">
          <img
            src="https://mtsobek.imgix.net/2022/03/MTSobek-ActivityLevels-101.jpg?auto=format&fit=scale&h=1280&ixlib=php-3.3.1&w=2048&wpsize=2048x2048"
            alt=""
            srcset=""
            className="img"
          />
        </span>
      </div>
      <div className="subcontainer">
        <span className="r-sub">
          <img
            src="https://mtsobek.imgix.net/2022/03/MTSobek-ActivityLevels-151.jpg?auto=format&fit=scale&h=1280&ixlib=php-3.3.1&w=2048&wpsize=2048x2048"
            alt=""
            srcset=""
            className="img"
          />
        </span>
        <span className="l-sub">
          <div className="container-text-subtitle">
            <h3>Moderate-to-Challenging – Level 4</h3>
          </div>
          <hr />
          <div className="container-text">
            Trips for experienced travelers seeking full days of activity and a
            higher level of physical challenge. Hikes and treks of up to 14
            miles and 4,000 feet of elevation gains and losses per day cover
            steep, sometimes rugged terrain, potentially into areas of exposure
            and elevations exceeding 10,000 feet. River rafting trips include
            Class IV-V rapids; sea kayaking trips include 4 to 5 hours of
            paddling per day in areas of open water with waves and tides.
          </div>
          <div>
            <button className="level-btn">Level 4 Tour</button>
          </div>
        </span>
      </div>
      <div className="subcontainer">
        <span className="l-sub">
          <div className="container-text-subtitle">
            <h3>Ultimate Challenge – Level 5</h3>
          </div>
          <hr />
          <div className="container-text">
            Our most demanding trips for guests seeking a physical challenge.
            Trips include trekking without vehicle support over steep, often
            rugged terrain at elevations over 10,000 feet. Daily hikes of up to
            12 hours or more may include substantial altitude gains and losses
            into remote areas of wilderness. River rafting trips include Class
            IV-V rapids and areas where portaging is needed. Previous
            experience, as well as a completed physician’s certificate, is
            required.
          </div>
          <div>
            <button className="level-btn">Level 5 Tour</button>
          </div>
        </span>
        <span className="r-sub">
          <img
            src="https://mtsobek.imgix.net/2022/02/MTSobek-Hiking-Trekking-26.jpeg?auto=format&fit=scale&h=1280&ixlib=php-3.3.1&w=2048&wpsize=2048x2048"
            alt=""
            srcset=""
            className="img"
          />
        </span>
      </div>
    </div>
  );
}

export default ActivityLevels;
