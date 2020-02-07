import React from "react";
import { storiesOf } from "@storybook/react";

import BrideReview from "./BrideReview";

import imageFile1 from "../../assets/images/bridal-review-1.png";
import imageFile2 from "../../assets/images/bridal-review-2.jpeg";
import imageFile3 from "../../assets/images/bridal-review-3.jpeg";

const images = [imageFile1, imageFile2, imageFile3];

storiesOf("BrideReview", module).add("BrideReview", () => (
  <BrideReview
  images = {images}
    title="Fall 2020 Collection"
  ></BrideReview>
));