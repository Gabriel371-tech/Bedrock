// src/services/userService.ts

export interface User {
  id: number;
  nome: string;
  email: string;
  role?: string;
}

const API_URL = "http://localhost:4000/api/auth";

// 🔹 Buscar usuário logado (sem token)
export async function getMe(): Promise<User> {
  try {
    const res = await fetch(`${API_URL}/me`);
    if (!res.ok) throw new Error("Erro ao buscar usuário");

    const data = await res.json();
    return data as User;
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
    // Para teste, retorna um usuário fictício
    return {
      id: 1,
      nome: "Usuário Teste",
      email: "teste@teste.com",
    };
  }
}

// 🔹 Completar perfil (sem token)
export async function completeProfile(role: string): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/complete-profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    });

    if (!res.ok) {
      throw new Error("Erro ao atualizar perfil");
    }
  } catch (err) {
    console.error("Erro ao completar perfil:", err);
  }
}