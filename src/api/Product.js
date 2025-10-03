import food2 from "../assets/food2.jpg";
import food6 from "../assets/food6.jpg";
import food9 from "../assets/food9.jpg";
import food10 from "../assets/food10.jpg";
import food7 from "../assets/food7.jpg";
import food5 from "../assets/food5.jpg";
import axios from "axios";

const restaurantApi = axios.create({
  baseURL: "https://tca-cohort-6-first-fullstack-projec.vercel.app/restaurants",
});

const foodApi = axios.create({
  baseURL: "https://tca-cohort-6-first-fullstack-projec.vercel.app",
});

export const fetchRestaurants = async () => {
  try {
    const response = await restaurantApi.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const fetchRestaurantById = async (id) => {
  try {
    const response = await restaurantApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant by ID:", error);
    throw error;
  }
};

export const fetchProductsByRestaurantId = async (id) => {
  try {
    const response = await foodApi.get(`/food/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products for restaurant:", error);
    throw error;
  }
};
export const restaurants = ["So-Fresh", "Chop-Box", "Nosh N Nibble"];

export const Carousel = [
  { id: 2, image: food2 },
  { id: 6, image: food6 },
  { id: 9, image: food9 },
  { id: 10, image: food10 },
];
