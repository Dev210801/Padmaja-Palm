import React from "react";
import "../styles/counter.css";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export default function Counter() {
  return (
    <div>
      <div className="counterflex">
        <div className="cnt2">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div>{isVisible ? <CountUp end={18} /> : 18}+</div>
            )}
          </VisibilitySensor>
          <div className="visits">Total area(in acres)</div>
        </div>
        <div className="cnt3">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div>{isVisible ? <CountUp end={50} /> : 50}+</div>
            )}
          </VisibilitySensor>
          <div className="visits">Total events</div>
        </div>
      <div className="cnt1">
        <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
          {({ isVisible }) => (
            <div>{isVisible ? <CountUp end={300} /> : 300}+</div>
            )}
        </VisibilitySensor>
        <div className="visits">total no of visits</div>
      </div>
            </div>
    </div>
  );
}
