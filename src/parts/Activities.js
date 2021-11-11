import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Activities({ data }) {
  return (
    <section className="container">
      <h4 className="mb-3 font-weight-medium">Things to do</h4>
      <div className="container-grid">
        {data.map((activity, index) => {
          return (
            <div className="item column-3 row-1" key={`activity-${index}`}>
              <Fade bottom delay={300 * index}>
                <div className="card" style={{ border: 'none' }}>
                  {activity.isPopular && (
                    <div className="tag">
                      Popular
                      <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={
                        activity.imageUrl
                          ? `${process.env.REACT_APP_HOST}${activity.imageUrl}`
                          : ''
                      }
                      alt={activity.title}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <h5 className="h4">{activity.name}</h5>
                    <span className="text-gray-500">{activity.type}</span>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
