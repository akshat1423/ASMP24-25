import React from 'react';
import { mentorsListConsult } from '../data/noncore_consult';
import MentorCard from './MentorCard';

const NonCoreConsult = () => {
  return (
    <div className="bs-example" style={{ backgroundColor: 'transparent' }}>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="consult">
          <div
            className="row"
            id="t05"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {mentorsListConsult.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonCoreConsult;