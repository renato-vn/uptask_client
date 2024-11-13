import { isAxiosError } from "axios";
import { Note, NoteFormData, Project, Task } from "@/types/index";
import api from "@/lib/axios";

type NoteApiType = {
  projectId: Project["_id"];
  taskId: Task["_id"];
  formData: NoteFormData;
  noteId: Note["_id"];
};

export const createNote = async ({
  projectId,
  taskId,
  formData,
}: Pick<NoteApiType, "projectId" | "taskId" | "formData">) => {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}/notes`;
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
};

export const deleteNote = async ({
  projectId,
  taskId,
  noteId,
}: Pick<NoteApiType, "projectId" | "taskId" | "noteId">) => {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}/notes/${noteId}`;
    const { data } = await api.delete<string>(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
};
