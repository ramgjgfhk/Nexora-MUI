import { useQuery } from "@tanstack/react-query";
import client from "../Api/client";
import toast from "react-hot-toast";

export function usePosts({ user_id, pagination_details, search, filters }) {
  return useQuery({
    queryKey: ["posts", { user_id, pagination_details, search, filters }],
    queryFn: async () => {
      try {
        const res = await client.post("/api/qa/list", {
          params: {
            user_id,
            pagination_details,
            ...(search && { search }), // Only include 'search' if it's not empty
            ...(filters && { filters }),
          },
        });
        return res.data;
      } catch (error) {
        toast.error("Failed to load posts");
        throw error;
      }
    },
  });
}
