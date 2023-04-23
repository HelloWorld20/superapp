/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-02-27 23:24:11
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
import useSWR from "swr";
import fetcher from "./fetcher";

export default function SWR() {
  const { data } = useSWR("/mongo/get", fetcher);

  return (
    <fieldset name="3">
      <legend>total</legend>
      <h2>一共有{data && data[0].total!}条记录</h2>
    </fieldset>
  );
}
