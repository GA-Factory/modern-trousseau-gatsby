import React from "react";
import { storiesOf } from "@storybook/react";
import PinkButton from "./Button";

storiesOf("Button", module)
  .add("Browse Now", () => (
    <PinkButton
      label="Browse Now"
      fontsize={`${"14px"}`}
      weight={`${"bold"}`}
      height={`${"22px"}`}
      padding={`${"5px 0"}`}
      width={`${"88px"}`}
      desktopwidth={`${"126px"}`}
      family={`${"'Sahitya'"}`}
      color={`${"#441F0E"}`}
    />
  ))

  .add("Book Now", () => (
    <PinkButton
      label="Book Now"
      fontsize={`${"14px"}`}
      weight={`${"bold"}`}
      height={`${"22px"}`}
      padding={`${"5px 0"}`}
      width={`${"88px"}`}
      desktopwidth={`${"126px"}`}
      family={`${"'Sahitya'"}`}
      color={`${"#441F0E"}`}
    />
  ))

  .add("Visit Us", () => (
    <PinkButton
      label="Visit Us"
      fontsize={`${"14px"}`}
      weight={`${"bold"}`}
      height={`${"22px"}`}
      padding={`${"5px 0"}`}
      width={`${"88px"}`}
      desktopwidth={`${"126px"}`}
      family={`${"'Sahitya'"}`}
    />
  ))

  .add("View Dress", () => (
    <PinkButton
      label="View Dress"
      fontsize={`${"14px"}`}
      weight={`${"bold"}`}
      height={`${"22px"}`}
      width={`${"88px"}`}
      padding={`${"5px 0"}`}
      shadow={`${"0px 4px 4px rgba(0, 0, 0, 0.25)"}`}
      desktopwidth={`${"83px"}`}
      desktoppadding={`${"5px"}`}
      desktopheight={`${"14px"}`}
      desktopfontsize={`${"12px"}`}
      desktopweight={`${"600"}`}
      desktopcolor={`${"#000000"}`}
      family={`${"'Sahitya'"}`}
      color={`${"#441F0E"}`}
    />
  ))

  .add("Submit", () => (
    <PinkButton
      label="SUBMIT"
      width={`${"63px"}`}
      fontsize={`${"12px"}`}
      height={`${"14px"}`}
      weight={`${"300"}`}
      padding={`${"5px 0"}`}
      shadow={`${"0px 4px 4px rgba(0, 0, 0, 0.25)"}`}
      color={`${"#000000"}`}
      desktopfontsize={`${"14px"}`}
      desktopheight={`${"16px"}`}
      desktopwidth={`${"79px"}`}
    />
  ));
