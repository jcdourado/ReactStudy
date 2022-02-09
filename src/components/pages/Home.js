import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import HeroImage from "assets/hero.jpg";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import AboutVideo from "assets/about.mp4";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import ServImage01 from "assets/serv-01.jpg";
import ServImage02 from "assets/serv-02.jpg";
import ServImage03 from "assets/serv-03.jpg";
import ServImage04 from "assets/serv-04.jpg";
import ServImage05 from "assets/serv-05.jpg";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

const products = [
  {
    id: 1,
    title: "1º Habilitação Carro e Moto",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage01,
  },
  {
    id: 2,
    title: "1º Habilitação Carro",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage02,
  },
  {
    id: 3,
    title: "1º Habilitação Moto",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage03,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage04,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage05,
  },
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
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
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nardini Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            ullam reprehenderit, inventore distinctio voluptates debitis, ipsa
            asperiores ea laudantium laboriosam, unde vel temporibus saepe dolor
            iure quis magnam velit fugit!
          </p>
          <Button color="primary">Saiba Mais</Button>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>

      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
          libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit
          quam.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
          libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit
          quam.
        </Accordion>
        <Accordion title="Fui mutado, e agora?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          aliquam neque corrupti. Ab corporis ipsa perferendis doloribus earum
          libero ex eos, quidem harum nemo soluta odio obcaecati expedita odit
          quam.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
