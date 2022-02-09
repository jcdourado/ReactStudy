import React from "react";
import Card, { CardBody, CardMedia } from "./Card";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import PlaceHolderImage from "stories/assets/card-placeholder.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Titulo</h6>
        </Heading>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceHolderImage} />
      <CardBody>
        <Heading>
          <h6>Titulo</h6>
        </Heading>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
