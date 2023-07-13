import { useState } from "react";
import axios from "axios";

const usePostApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postApi = async (url, data) => {
    setLoading(true);
    setError(null);
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle the response as per your application's requirements
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { postApi, loading, error };
};

export default usePostApi;
