import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const fetchTreesByArrodissement = async () => {
  try {
    const response = await api.get("/trees/arrondissements");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch tree data: " + error.message);
  }
};

export const fetchTreesByType = async () => {
  try {
    const response = await api.get("/trees/type");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch tree data: " + error.message);
  }
};
