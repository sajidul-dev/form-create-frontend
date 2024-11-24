import axios from "axios";
import { IUser } from "../types";
import { useQuery } from "@tanstack/react-query";
import { ExtractFnReturnType } from "../../../lib/react-query";

export const getUsers = async (): Promise<{}> => {
  const response = await axios.get(
    "http://localhost:5000/api/v1/users/get-users"
  );
  return response.data.data;
};

type QueryFnType = typeof getUsers;

export const useUsers = () => {
  return useQuery({
    queryFn: getUsers,
    queryKey: ["users"],
    staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes after it becomes inactive
  });
};
