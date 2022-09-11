import React, { useState } from "react";
import dayjs from "dayjs";
import { type } from "@testing-library/user-event/dist/type";
const IsItOpen = (business) => {
  let toDayIs = dayjs().day();
  let TodayString =
    toDayIs === 1
      ? "monday"
      : toDayIs === 2
      ? "tuesday"
      : toDayIs === 3
      ? "wednesday"
      : toDayIs === 4
      ? "thursday"
      : toDayIs === 5
      ? "friday"
      : toDayIs === 6
      ? "saturday"
      : toDayIs === 0
      ? "sunday"
      : "";
  let todayOpen = `${TodayString}Open`;
  let todayClose = `${TodayString}Close`;
  let so =
    dayjs(business.openingHours[todayOpen], "HH:mm") < dayjs() &&
    dayjs(business.openingHours[todayClose], "HH:mm") > dayjs()
      ? true
      : false;

  return so;
};

export default IsItOpen;
