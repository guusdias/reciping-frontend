import axios, { AxiosResponse } from "axios";

interface Credentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    _id: string;
    user_name: string;
    email: string;
    user_img?: string;
  };
}

const makeAuth = async (credentials: Credentials): Promise<AuthResponse> => {
  const authUrl = "https://reciping-backend.onrender.com/auth/login";

  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(
      authUrl,
      credentials
    );
    const { token, user } = response.data;

    if (token) {
      sessionStorage.setItem("authToken", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    return {
      token,
      user,
    };
  } catch (error: any) {
    console.error(
      "Erro de autenticação:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export { makeAuth };
