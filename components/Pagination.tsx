import React, { useCallback, useState } from "react";

import { Button } from "../kit";

export const Pagination = ({
  total,
  current,
  setCurrent,
}: {
  total: number;
  current: number;
  setCurrent: (page: number) => void;
}) => {
  return (
    <>
      <div className={"pagination"}>
        {new Array(total).fill(undefined).map((_, i) => (
          <Button
            key={i}
            bg={current === i + 1 ? "active" : "neutral"}
            onClick={useCallback(() => setCurrent(i + 1), [])}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <style jsx>
        {`
          .pagination {
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
};
