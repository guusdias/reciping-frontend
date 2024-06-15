import axios from "axios";

const makeAuth = async (credentials) => {
  const authUrl = "https://reciping-backend.onrender.com/auth/login";

  try {
    const response = await axios.post(authUrl, credentials);
    const { token, user } = response.data;
    console.log("Token de autenticação:", token);
    console.log("Dados do usuário:", user);

    if (token) {
      sessionStorage.setItem("authToken", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    return {
      token: token,
      user: user,
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
