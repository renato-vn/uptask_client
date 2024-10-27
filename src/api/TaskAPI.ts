import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Project, Task, TaskFormData, taskSchema } from "@/types/index";

type TaskAPI = {
  formData: TaskFormData;
  projectId: Project["_id"];
  taskId: Task["_id"];
  status: Task["status"];
};

export const createTask = async ({
  formData,
  projectId,
}: Pick<TaskAPI, "formData" | "projectId">) => {
  try {
    const url = `/projects/${projectId}/tasks`;
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getTaskById = async ({
  projectId,
  taskId,
}: Pick<TaskAPI, "projectId" | "taskId">) => {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}`;
    const { data } = await api(url);
    const response = taskSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const updateTask = async ({
  projectId,
  taskId,
  formData,
}: Pick<TaskAPI, "projectId" | "taskId" | "formData">) => {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}`;
    const { data } = await api.put<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const deleteTask = async ({
  projectId,
  taskId,
}: Pick<TaskAPI, "projectId" | "taskId">) => {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}`;
    const { data } = await api.delete<string>(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const updateTaskStatus = async ({
  projectId,
  taskId,
  status,
}: Pick<TaskAPI, "projectId" | "taskId" | "status">) => {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}/status`;
    const { data } = await api.post<string>(url, { status });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};
