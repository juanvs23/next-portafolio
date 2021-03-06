import { useContext, useEffect } from "react";
import LayoutPages from "../components/layouts/layoutPages";
import Image from "next/image";
import { FunctionalsContent } from "../context/content";
import AOS from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import SkillsContent from "../components/skillsContent";
import Experiencias from "../components/experiencias";
import PortfolioRow from "../components/portfolioRow";

function AboutPage(props) {
  const { setTitleContent, empresas, portfolio } = useContext(
    FunctionalsContent
  );
  useEffect(() => {
    setTitleContent("Mi Portafolio");
    AOS.init({ duration: 1000 });
    NProgress.start();
    NProgress.inc();
    setTimeout(() => {
      NProgress.done();
    }, 1000);
  }, []);

  return (
    <>
      <LayoutPages>
        <header className="row">
          <div className="col-12">
            <div className="card card-body bg-secondary">
              <div className="row">
                <div className="col-md-4">
                  <Image
                    src="/juan-carlos.jpg"
                    width={340}
                    height={340}
                    alt=""
                    className="fluid-img"
                  />
                </div>
                <div className="col-md-8">
                  <h1 className="text-info">Acerca de mi...</h1>
                  <h5
                    data-aos="fade-left"
                    dangerouslySetInnerHTML={{
                      __html: props.pageContent[0].title.rendered,
                    }}
                  ></h5>
                  <div
                    data-aos-delay="160"
                    dangerouslySetInnerHTML={{
                      __html: props.pageContent[0].content.rendered,
                    }}
                  ></div>
                  <ol>
                    {empresas.map((empresa, i) => {
                      return (
                        <li data-aos="fade-in" data-aos-duration="500" key={i}>
                          {empresa.nombre}
                        </li>
                      );
                    })}
                  </ol>

                  <a
                    className="btn btn-info"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    href="mailto:juanvs23@gmail.com"
                  >
                    Contratame
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col-12">
            <div className="mt-3 ">
              <div className="mt-3 " style={{ padding: ".75rem 1.25rem" }}>
                <h3 className="text-info">Skills:</h3>
              </div>
              <div className="">
                <SkillsContent />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="mt-3 card bg-secondary">
              <div className="card-header">
                <h3 className="text-info">Experiencia:</h3>
              </div>
              <div className="card-body">
                {empresas.map((empresa, i) => (
                  <Experiencias key={i} empresa={empresa} />
                ))}
              </div>
            </div>
            <div className="mt-3 card bg-primary">
              <div className="card-header bg-primary">
                <h3 className="text-white">Proyectos:</h3>
              </div>
              <div className="card-body">
                <PortfolioRow portfolio={portfolio} />
              </div>
            </div>
          </div>
        </div>
      </LayoutPages>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    'https://ideas-digitales.ml/portafoliocms/wp-json/wp/v2/pages/?_embed=true&slug="portafolio-desarrollador-wordpress-react-node"'
  );
  const pageContent = await data.json();

  return {
    props: {
      pageContent,
    },
  };
}
export default AboutPage;
