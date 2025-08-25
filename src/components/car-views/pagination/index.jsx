import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ totalPages = 1, page, onChange }) {
  return (
    <div className="flex justify-center py-8">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={onChange}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff",
              borderColor: "#aaa",
              backgroundColor: "#1e1e1e",
            },
            "& .Mui-selected": {
              backgroundColor: "#666",
              color: "#fff",
              borderColor: "#aaa",
            },
          }}
        />
      </Stack>
    </div>
  );
}
