import React from 'react'
import '../styles/counter.css'

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
export default function Counter() {
  return (
    <div>
        <div className="counterflex">
            <div className="cnt1">
            <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
        {({ isVisible }) => (
          <div  >
            {isVisible ? <CountUp end={1000} /> : 1000}+
          </div>
        )}
      </VisibilitySensor>
      <div className="visits">
        total no of visits
      </div>
            </div>
            <div className="cnt2">
            <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
        {({ isVisible }) => (
          <div  >
            {isVisible ? <CountUp end={30} /> : 1000}+
          </div>
        )}
      </VisibilitySensor>
      <div className="visits">
        visits per month
      </div>
            </div>
            <div className="cnt3">
            <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
        {({ isVisible }) => (
          <div  >
            {isVisible ? <CountUp end={20} /> : 1000}+
          </div>
        )}
      </VisibilitySensor>
      <div className="visits">
        total months
      </div>
            </div>
        </div>
    </div>
  )
}
