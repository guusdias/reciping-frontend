import Axios from "axios";


const credentials = {
  username: 'seuUsuario',
  password: 'suaSenha'
};

const authUrl = "https://reciping-backend.onrender.com/auth/login"


axios.post(authUrl, credentials)
  .then(response => {
    const token = response.data.token;
    console.log('Token de autenticação:', token);

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get('https://reciping-backend.onrender.com/auth/login', config)
      .then(protectedResponse => {
        console.log('Resposta da rota protegida:', protectedResponse.data);
      })
      .catch(error => {
        console.error('Erro ao acessar a rota protegida:', error);
      });
  })
  .catch(error => {
    console.error('Erro de autenticação:', error);
  });
