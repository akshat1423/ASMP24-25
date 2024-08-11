import { useState, useCallback } from 'react';
import axios from 'axios';

const UseFetchMentors = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [mentors, setMentors] = useState(null);

    const fetchMentors = useCallback(async (field) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        const userData = {
            // "accessToken": localStorage.getItem('accessToken'),
            'accessToken':"e073c139-6fa3-4c31-acd6-7c6d7c0cd33c",
        };

        try {
            // Get CSRF token from cookies
            const csrfTokenMatch = document.cookie.match(/csrftoken=([^;]+)/);
            const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : '';

            const response = await axios.post(`http://127.0.0.1:8000/api/mentors/${field}/`, userData, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
            });

            if (response.status === 200) {
                setSuccess(true);
                console.log(response.data);
                setMentors(response.data);
            } else {
                setError("Unexpected response status");
            }
        } catch (err) {
            // Handle different types of errors
            setError(err.response?.data?.error || err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { fetchMentors, setError, loading, error, success, mentors, setMentors };
};

export default UseFetchMentors;
