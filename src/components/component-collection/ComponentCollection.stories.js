import React from 'react';
import { storiesOf } from '@storybook/react';

import ComponentCollection  from './ComponentCollection';

import imageFile1 from "./images/test-image-1.png";
import imageFile2 from "./images/test-image-2.png";
import imageFile3 from "./images/test-image-3.png";
import imageFile4 from "./images/test-image-4.png";

const images = [
imageFile1, imageFile2, imageFile3, imageFile4,
]

storiesOf("Component-Collection", module).add("Component-Collection", () => (
  <ComponentCollection images={images} title="Fall 2020 Collection"></ComponentCollection>
));