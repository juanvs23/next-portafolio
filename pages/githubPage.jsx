import LayoutPages from "../components/layouts/layoutPages";
import { FunctionalsContent } from "../context/content";
import AOS from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import { useContext, useEffect } from "react";
const GithubPage = (props) => {
  const { user } = props;

  const { setTitleContent } = useContext(FunctionalsContent);
  useEffect(() => {
    setTitleContent("Github");
    AOS.init({ duration: 1000 });
    NProgress.start();
    NProgress.inc();
    setTimeout(() => {
      NProgress.done();
    }, 1000);
  }, []);
  return (
    <LayoutPages>
      <div className="row justify-content-center">
        <div className="my-3 col-md-6 col-lg-4">
          <div className="card bg-light" data-aos="fade-in">
            <img
              src={user.avatar_url}
              className="card-img-top"
              alt={user.name}
            />
            <div className="p-3 card-body">
              <h2 className="p-0 text-center card-title">{user.login}</h2>

              <p className="text-center card-text">{user.bio}</p>
              <div className="">
                <a
                  href={user.html_url}
                  className="btn btn-outline-secondary d-block"
                  target="_blank"
                >
                  {" "}
                  <div className="fab fa-github"></div> Visitar Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPages>
  );
};

export default GithubPage;

export async function getServerSideProps(context) {
  const dataUser = await fetch("https://api.github.com/users/juanvs23");

  const user = await dataUser.json();

  return {
    props: {
      user,
    },
  };
}
