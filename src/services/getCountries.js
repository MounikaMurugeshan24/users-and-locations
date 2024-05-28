import { API } from "../constants/api";

export async function getCountries() {
  try {
    const response = await fetch(API.COUNTRIES);
    const countryList = await response.json();
    return countryList;
  } catch (error) {
    console.error('Error fetching country names:', error);
    return [];
  }
}
