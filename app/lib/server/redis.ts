import { createClient } from 'redis';

const redisUrl = 'rediss://default:AVNS_YtXq6QZF8ioMXCSgCgE@db-caching-fra1-66155-do-user-15864795-0.f.db.ondigitalocean.com:25061';

let redis = createClient({
  url: redisUrl,
});

let isConnected = false;
let isConnecting = false; // Ajout d'un indicateur de connexion en cours

redis.on('error', (err) => {
  console.error('Redis Client Error:', err);
  isConnected = false; // Si une erreur survient, marquer la connexion comme fermée
});

redis.on('connect', () => {
  console.log('Redis connected successfully');
  isConnected = true;
  isConnecting = false; // Marquer la connexion comme établie
});

redis.on('end', () => {
  console.log('Redis connection closed');
  isConnected = false; // Réinitialiser l'état de connexion lors de la fermeture
});

/**
 * Fonction pour connecter Redis de manière sécurisée
 * Elle évite les connexions multiples en cours et gère les erreurs.
 */
async function connectRedis() {
  if (isConnected) {
    console.log('Redis is already connected.');
    return; // Si le Redis est déjà connecté, on n'essaie pas de se reconnecter
  }

  if (isConnecting) {
    console.log('Redis connection is in progress.');
    return; // Si une connexion est déjà en cours, on évite les doublons
  }

  isConnecting = true; // Marquer qu'une tentative de connexion est en cours

  try {
    await redis.connect(); // Connexion à Redis
  } catch (error) {
    console.error('Failed to connect to Redis:', error);
    isConnecting = false; // Réinitialiser l'indicateur en cas d'échec
    throw error; // Lancer l'erreur pour permettre une gestion des exceptions
  }

  isConnecting = false; // Réinitialiser l'indicateur de connexion en cours
}

export { redis, connectRedis };
