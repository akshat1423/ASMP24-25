import React from 'react';
import { mentorsListCore } from '../data/core';
import MentorCard from './MentorCard';

const Core = () => {
  return (
    <div className="bs-example" style={{ backgroundColor: 'transparent' }}>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="core">
          <div
            className="row"
            id="t05"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {mentorsListCore.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;