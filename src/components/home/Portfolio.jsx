import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from './migration';
import Row from "react-bootstrap/Row";
import PortfolioCard from "./PortfolioCard";

const Portfolio = ({ heading, list }) => {
    return (
        <Jumbotron fluid id="portfolio" className="bg-light m-0  target-section">
          <Container className="">
          
            <h2 className="display-4 pb-5 text-center">{heading}</h2>
           
            <PortfolioCategory products = {list} imgHeight="300" />
        </Container>
        </Jumbotron>);
};

const PortfolioCategory = ({ products, imgHeight }) => {
    return (
      <Container className="mb-2">
        <Row>
        {
            products.length &&
            products.map((app, index) =>  (
                <PortfolioCard
                key={`app-${index}`}
                id={`app-${index}`}
                imgHeight={imgHeight}
                value={app}
                />
            ))
        }
        </Row>
      </Container>
    );
  };
  
export default Portfolio;