import axios from "axios";

const API_BASE_URL = "http://crudapi.local";

// Criando uma instância do Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// POST: método de login de usuário
export const login = async (userData) => {
  try {
    const response = await api.post("/login", userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return null;
  }
}

// GET: buscar todos os usuários
export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return null;
  }
};

// GET: buscar um usuário pelo ID
export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};

// POST: criar um novo usuário
export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return null;
  }
};

// PUT: atualizar usuário
export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return null;
  }
};

// DELETE: remover usuário
export const deleteUser = async (id) => {
  try {
    await api.delete(`/users/${id}`);
    return true;
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    return false;
  }
};