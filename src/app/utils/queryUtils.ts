import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export interface IMultiParams {
  [key: string]: string | boolean | number | undefined;
}

export const QueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const get = useCallback(
    (key: string) => searchParams.get(key),
    [searchParams]
  );
  const set = (key: string, value: string) => {
    setSearchParams({ [key]: value });
  };

  // const page = get("page") || "1";
  const offset = get("offset") || "0";
  const limit = get("limit") || "20";
  const search = get("search") || "";
  const all = searchParams.toString();

  return {
    get,
    set,
    offset,
    limit,
    search,
    all,
  };
};
