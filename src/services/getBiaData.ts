import axios from "axios";
import type { IBiaData } from "../types/bia";

export const getRomData = async ({
  encryptedData,
}: {
  encryptedData: string;
}): Promise<IBiaData[]> => {
  // BIA 수정해야함
  const { data } = await axios.get(`/members/${encryptedData}`);
  return data.data;
};