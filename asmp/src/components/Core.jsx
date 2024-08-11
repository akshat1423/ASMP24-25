import React, { useEffect } from 'react';
import UseFetchMentors from "../hooks/useFetchMentors";
import MentorCard from './MentorCard';
import Swal from "sweetalert2";

const Core = () => {
  const FIELDS = [
    ['core_engineering', 'Core engineering'],
    ['civil_services', 'Civil Services/Govt. of India'],
    ['design', 'Design'],
    ['finance', 'Finance'],
    ['it', 'IT'],
    ['management', 'Management'],
    ['management_consulting', 'Management consulting'],
    ['marketing', 'Marketing'],
    ['product_management', 'Product Management'],
    ['research', 'Research'],
    ['strategy_consulting', 'Strategy consulting'],
    ['entrepreneurship', 'Entrepreneurship'],
    ['other', 'Other'],
  ];

  const [currField, setCurrField] = React.useState(FIELDS[0][0]);

  const { fetchMentors, loading, error, mentors } = UseFetchMentors();

  useEffect(() => {
    fetchMentors(currField);
  }, [currField, fetchMentors]);

  const handleFieldChange = (field) => {
    setCurrField(field);
  };

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
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && mentors && mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
