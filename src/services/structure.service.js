import { getUnauthRequest } from "../utils/api";

const BASE_URL =
  process.env.BASE_URL || 'https://marque-blanche-bo-backnd.vercel.app';

export const getStructures = async () => {
  try {
    const res = await getUnauthRequest(`${BASE_URL}/structure/`);
    return res;
  } catch (err) {
    return err;
  }
};

export const somethingElse = async () => {
    try {
        console.log("good")
    } catch (error) {
        console.error(error);
    }
}
