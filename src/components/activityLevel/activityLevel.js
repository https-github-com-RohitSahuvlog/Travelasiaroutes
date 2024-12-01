import React, { useEffect } from "react";
import "./activity.css";

function ActivityLevels() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="complete-page">
      <div className="container-box">
        <div className="container-text-title">
          <h2>Activity Levels</h2>
        </div>
        <hr />
        <div className="container-text">
          MidAsiaRoutes rates their tours on an activity level ranging from 1 (easy) to 5 (challenging). Since not everyone has the same desire or capabilities for physical challenges, we have created the activity level scale below. Please review the details of each level to determine which levels suite your tastes for any given trip. This is a guideline only of what to expect on our tours. This is not to say that we don't stop and enjoy the views, it is simply a guideline of what physical condition you should be in to fully enjoy your adventure.
        </div>
      </div>
      <div className="subcontainer">
        <div className="l-sub">
          <div className="container-text-subtitle">
            <h3>Easygoing – Level 0-1</h3>
          </div>
          <hr />
          <div className="container-text">
            You must be able to hike up to 1 or 2 hours, often walking through archeological sites, towns/cities and/or rainforests with varying levels of rugged terrain. You must be able to walk at least 1 mile (1.6 km) with various slope grades that can be slippery, depending on conditions..
          </div>

        </div>
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
            You must be able to hike up to 3 hours, often walking through archeological sites, towns/cities and/ or rainforests with varying levels of rugged terrain. You must be able to walk at least 2 miles (approx. 3 km) with various slope grades that can be slippery, depending on conditions
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
            You must be able to hike up to 4 hours, often walking through archeological sites, towns/cities and/or rainforests with varying levels of rugged terrain. You must be able to walk at least 3 miles (approx. 5 km) with various slope grades that can be slippery, depending on conditions.
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
            You must be able to hike up to 5 hours, often walking through archeological sites, towns/cities and/or rainforests with varying levels of rugged terrain. You must be able to walk at least 4 miles (approx 6 km) with various slope grades that can be slippery, depending on conditions.
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
            You must be able to hike 5 OR MORE hours, often walking through archeological sites, towns/cities and/or rainforests with varying levels of rugged terrain. You must be able to walk at least 5 miles (approx. 8 km) with various slope grades that can be slippery, depending on conditions.
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
