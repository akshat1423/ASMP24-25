import { useState, useCallback } from 'react';
import { json } from 'react-router-dom';
import Swal from 'sweetalert2';
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
            'accessToken':"82cf3f73-f995-4d72-92bb-7c158a38232a",
        };

        try {
            // Get CSRF token from cookies
            // const csrfTokenMatch = document.cookie.match(/csrftoken=([^;]+)/);
            // const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : '';
            const csrfToken = "35Znfr3R2fYtO0zbFhuj3Li6s68F9sx9"

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
            setError(err.response?.data?.error || err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { fetchMentors, setError, loading, error, success, mentors, setMentors };
};

export default UseFetchMentors;
