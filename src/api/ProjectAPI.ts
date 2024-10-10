import api from "@/lib/axios";
import { dashboardProjectSchema, ProjectFormData } from "@/types/index";
import { isAxiosError } from "axios";

export const createProject = async (formData: ProjectFormData) => {
  try {
    const { data } = await api.post("/projects", formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getProjects = async () => {
  try {
    const { data } = await api("/projects");
    const response = dashboardProjectSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};