import React from "react";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
      aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
      libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit quam.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
      aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
      libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit quam.
    </Accordion>
    <Accordion title="Fui mutado, e agora?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
      aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
      libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit quam.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
      aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
      libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit quam.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
      aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
      libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit quam.
    </Accordion>
    <Accordion title="Fui mutado, e agora?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
      aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
      libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit quam.
    </Accordion>
  </AccordionGroup>
);
