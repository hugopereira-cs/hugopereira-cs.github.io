// Lê e valida a variável de ambiente API_URL (somente servidor).
// Lança erro em tempo de inicialização se não estiver definida.
const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error(
    "Variável de ambiente API_URL não definida. " +
      "Copie .env.example para .env.local e preencha o valor."
  );
}

export const ENV = {
  API_URL: apiUrl,
} as const;
