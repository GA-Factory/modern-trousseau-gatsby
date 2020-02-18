import React from "react";
import { storiesOf } from "@storybook/react";

import Store from "./Store";
import image from "../../assets/images/long-island-photo.png";

storiesOf("Store", module).add("Store", () => (
  <Store
    name="Modern Trousseau Long Island"
    city="Cold Spring Harbor"
    state="NY"
    zip="11724"
    phone="6313673231"
    email="moderntrousseauli@moderntrousseau.com"
    image={image}
    description="Modern Trousseau Long Island is Modern Trousseau’s newest Flagship Salon. The distinctive designs of Modern Trousseau are the romantic creations of Australian-born designer, Callie Tein. Each design evokes classic couture while expressing a vision of modern style and sophistication.The hallmark of Modern Trousseau is customization. Each bridal design may be modified to suit a bride’s individual style. We offer a range of custom selections to choose from, including color accents, trimmings, skirt shapes and strap selections, along with the ability to mix and match styles. These options, along with our couture fit, allow Modern Trousseau brides to feel confident and beautiful on their wedding day. Request an appointment today!"
    hours="By Appointment
	Wednesday – Sunday 11 AM – 5 PM
	Monday and Tuesday Closed"
    // twitter="none"
    instagram="none"
  />
));
