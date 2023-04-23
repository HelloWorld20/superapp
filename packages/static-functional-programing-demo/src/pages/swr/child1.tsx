import React from "react";
import useSWR from "swr";
import fetcher from "./fetcher";

export default function SWR() {
  const { isValidating } = useSWR("/mongo/get", fetcher);

  return (
    <fieldset name="child1">
      <legend>loading state</legend>
      <h2>{isValidating.toString()}</h2>
    </fieldset>
  );
}
