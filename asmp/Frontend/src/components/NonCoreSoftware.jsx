import React from 'react';
import { mentorsListSoftware } from '../data/noncore_software';
import MentorCard from './MentorCard';

const NonCoreSoftware = () => {
  return (
    <div className="bs-example" style={{ backgroundColor: 'transparent' }}>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="software">
           <div
            className="row"
            id="t05"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {mentorsListSoftware.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonCoreSoftware;