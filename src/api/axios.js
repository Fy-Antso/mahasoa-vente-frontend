import axios from 'axios';

// Configuration de l'instance d'Axios
const api = axios.create({
  baseURL: 'https://app-8e94868e-4b7c-41d3-a9bf-25b13a92f102.cleverapps.io/api/',
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
      console.error('Erreur réseau ou serveur Django inaccessible (https://app-8e94868e-4b7c-41d3-a9bf-25b13a92f102.cleverapps.io).');
    } else {
      console.error(`Erreur HTTP ${error.response.status}:`, error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;