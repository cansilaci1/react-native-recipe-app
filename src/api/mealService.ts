import apiClient from './apiClient';
import { Meal } from '../entity/meal';

export const getRequest = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await apiClient.get<T>(endpoint);
    return response.data;
  } catch (error) {
    console.error(`GET isteği basarisiz: ${endpoint}`, error);
    throw error;
  }
};

export const fetchMeals = async (): Promise<Meal[]> => {
  return getRequest<{ meals: Meal[] }>('search.php?s=').then(data => data.meals || []);
};

