import { useState, useCallback } from "react";
import Swal from "sweetalert2";
// import UseRegisterMentors from '../mentorcards/mentorcards.jsx';


const UseRegisterMentors = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  // const handleTabClick = props.handleTabClick;

  const registerMentors = useCallback(async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Get CSRF token from cookies
      // const csrfTokenMatch = document.cookie.match(/csrftoken=([^;]+)/);
      // const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : "DUMMY_CSRF_TOKEN";
      const csrfToken = "35Znfr3R2fYtO0zbFhuj3Li6s68F9sx9"

      const response = await fetch(
        "http://127.0.0.1:8000/api/registration/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.status === 200) {
        setError("Registration Successful");
        Swal.fire({
          icon: "success",
          title: "Registration Successfull",
          showConfirmButton: false,
        });
        setError(null);
      }
      if (response.status === 400) {
        setError("You have already registered, You can't register again");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have already registered, You can't register again",
          showConfirmButton: false,
        });
        setError(null);
      }
      if (response.status === 406) {
        setError(response.data);
        const errorrr = await response.data;
        console.log(response.data);
        console.log("this is");
        Swal.fire({
          icon: "error",
          title: "Mentor Unavailable",
          text: "Please select another mentor",
          showConfirmButton: false,
        });
        setError(null);
      }
      if (response.status === 404) {
        Swal.fire({
          icon: "error",
          title: "Profile not found",
          text: "Please create a profile first",
          showConfirmButton: true,
        })
        setError("Profile not found, Please create a profile first");
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { registerMentors, loading, error, success };
};

export default UseRegisterMentors;
