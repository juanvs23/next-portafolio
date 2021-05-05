import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const ProyectContent = styled.div`
  h4.portfolio-title {
    min-height: 61px;
  }
`;

const Proyect = ({ proyect }) => {
  const { title, url, foto } = proyect;

  return (
    <ProyectContent className="pb-4 col-md-4">
      <div className="p-0 card ">
        <Image
          src={foto}
          width=""
          height=""
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h4 className="mb-2 text-center card-title portfolio-title">
            {title}
          </h4>

          <a href={url} className="btn btn-primary d-block">
            Visitar el sitio
          </a>
        </div>
      </div>
    </ProyectContent>
  );
};
const PortfolioRow = ({ portfolio }) => {
  return (
    <div className="row">
      {portfolio.map((proyect, i) => (
        <Proyect key={i} proyect={proyect} />
      ))}
    </div>
  );
};

export default PortfolioRow;
