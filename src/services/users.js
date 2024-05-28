import { API } from "../constants/api";

export async function getUsers() {
  try {
    const response = await fetch(API.USERS);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching Users:', error);
    return [];
  }
}

export async function postUsers(userData) {
  try {
    const response = await fetch(API.USERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Failed to post data');
    }
    return response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}


