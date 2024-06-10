import axios from "axios";

const makeAuth = async (credentials) => {
  const authUrl = "https://reciping-backend.onrender.com/auth/login";

  try {
    const response = await axios.post(authUrl, credentials);
    const token = response.data.token;
    console.log("Token de autenticação:", token);

    if (token) {
      sessionStorage.setItem("authToken", token);
    }

    return {
      token: token,
    };
  } catch (error) {
    console.error(
      "Erro de autenticação:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export { makeAuth };
