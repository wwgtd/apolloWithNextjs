import { useRouter } from "next/router";
import { ReactNode, useCallback } from "react";
import React from "react";

import { Button } from "./index";

export const Link = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode | ((onClick: () => void) => ReactNode);
}) => {
  const router = useRouter();
  const onClick = useCallback(() => router.push(to), [to]);

  if (typeof children === "function") {
    return children(onClick);
  }

  return <Button onClick={onClick}>{children}</Button>;
};
