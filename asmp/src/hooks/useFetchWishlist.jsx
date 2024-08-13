import { useState, useCallback } from "react";
import { json } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UseFetchWishlist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [mentors, setMentors] = useState(null);

  const fetchMentors = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // const accessToken = localStorage.getItem("accessToken");
      const accessToken = "184b1568-7e1b-4a92-a811-02e91f496510";

      // You don't need to include CSRF token for GET requests
      const response = await axios.get(`http://127.0.0.1:8000/api/registration/wishlist/`,
        {
          params: {
            accessToken: accessToken,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        console.log(response.data);
        setMentors(response.data);
      } else if (response.status === 400) {
        console.log(response.data);
        const jsonData = await response.data;
        setError(jsonData);
      } else if (response.status === 404) {
        console.log(response.data);
        setError("404");
        console.log("404");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchMentors, setError, loading, error, success, mentors, setMentors };
};

export default UseFetchWishlist;