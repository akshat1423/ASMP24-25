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
            "accessToken": "17e74470-b9e9-48df-a39b-4df7f89204ae",
        }

        try {
            // Get CSRF token from cookies
            const csrfTokenMatch = document.cookie.match(/csrftoken=([^;]+)/);
            const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : 'DUMMY_CSRF_TOKEN';

            axios.post(`http://127.0.0.1:8000/api/mentors/${field}/`, userData , {
                headers: {
                    'Content-Type': 'application/json',
                    // Include CSRF token in headers
                    'X-CSRFToken': csrfToken,
                },
            }).then(async (response) => {
                if (response.status === 200) {
                    setSuccess(true);
                    console.log(response.data)
                    setMentors(response.data);
                }
                if (response.status === 400) {
                    const jsonData = await response.json();
                    setError(jsonData['error']);
                }
            })


            // const response = await fetch('/api/mentors/', {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // Include CSRF token in headers
            //         'X-CSRFToken': csrfToken,
            //     },
            //     body: JSON.stringify(userData),
            // });



        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { fetchMentors, setError, loading, error, success, mentors, setMentors };
};

export default UseFetchMentors;
