import React from "react";
import useSWR from "swr";
import fetcher from "./fetcher";

export default function SWR() {
  const { data } = useSWR("/mongo/get", fetcher);

  return (
    <fieldset name="child2">
      <legend>table body</legend>
      <h2> {data && data[0].timestame!}</h2>
    </fieldset>
  );
}
