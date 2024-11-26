import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { UpdateCurrentUserPasswordForm, UserProfileForm } from "@/types/index";

export const updateProfile = async (formData: UserProfileForm) => {
  try {
    const url = `/auth/profile`;
    const { data } = await api.put<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
};

export const changePassword = async (
  formData: UpdateCurrentUserPasswordForm
) => {
  try {
    const url = `/auth/update-password`;
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
};
