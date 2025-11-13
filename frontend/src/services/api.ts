// src/services/api.ts
const API_URL = "http://localhost:4000/api/auth";

// Tipos para a resposta do backend
interface RegisterResponse {
  message: string;
  user?: {
    id: number;
    nome: string;
    email: string;
  };
}

export interface LoginResponse {
  message: string;
  user: {
    id: number;
    nome: string;
    email: string;
  };
}

interface ApiError {
  error: string;
}

// Função para cadastrar usuário
export async function registerUser(
  nome: string,
  email: string,
  senha: string
): Promise<RegisterResponse> {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  const data: RegisterResponse | ApiError = await res.json();

  if (!res.ok) {
    // Lança o erro do backend
    throw new Error((data as ApiError).error || "Erro ao cadastrar");
  }

  return data as RegisterResponse;
}



export async function loginUser(email: string, senha: string): Promise<LoginResponse> {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const data: LoginResponse | { error: string } = await res.json();

  if (!res.ok) throw new Error((data as { error: string }).error || "Erro ao entrar");

  return data as LoginResponse;
}