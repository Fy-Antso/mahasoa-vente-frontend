import axios from 'axios';

// Configuration de l'instance d'Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 10000, // Limite le temps d'attente à 10 secondes
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Intercepteur de réponses pour intercepter proprement les erreurs globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Erreur réseau ou serveur Django inaccessible (http://127.0.0.1:8000).');
    } else {
      console.error(`Erreur HTTP ${error.response.status}:`, error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;