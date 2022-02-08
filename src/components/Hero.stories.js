import React from "react";

import Hero from "./Hero";
import { text } from "@storybook/addon-knobs";

import BgRoadImage from "../stories/assets/bg-road.jpg";
import BgCarImage from "../stories/assets/bg-car.jpg";
import Heading from "./Heading";
import Button from "./Button";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgRoadImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
    <Button variant="outlined" color="primary">
      Matricule-se agora
    </Button>
  </Hero>
);
