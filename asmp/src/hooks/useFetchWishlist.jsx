import { useState, useCallback } from "react";
import { json } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UseFetchWishlist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [mentors, setMentors] = useState([]);

  const fetchMentors = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const accessToken = "184b1568-7e1b-4a92-a811-02e91f496510";

      const response = await axios.get(`http://127.0.0.1:8000/api/registration/wishlist/`, {
        params: {
          accessToken: accessToken,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSuccess(true);
        setMentors(response.data);
      } else {
        setError("Error fetching wishlist");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchMentors, loading, error, success, mentors };
};

export default UseFetchWishlist;