import { useQuery } from "@tanstack/react-query";
import client from "../Api/client";
import toast from "react-hot-toast";

export function usePosts({
  user_id = "219",
  limit,
  sort,
  offset,
  search = "",
  filters = {},
}) {
  return useQuery({
    queryKey: ["posts", { user_id, limit, offset, sort, search, filters }],
    queryFn: async () => {
      try {
       const res = await client.post("/api/qa/list", {
          user_id,
          pagination_detail: { limit, offset },
          sort,
          ...(search && { search }),
          ...(filters && { filters }),
        });
        return {
          rows: res.data.data,
          total: res.data.total_count || 0,
        };
      } catch (error) {
        toast.error("Failed to load posts");
        throw error;
      }
    },
  });
}
