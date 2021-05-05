import React from "react";
import { useRouter } from "next/router";
import LayoutPages from "../../components/layouts/layoutPages";

import { FunctionalsContent } from "../../context/content";
import AOS from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import { Breadcrumbs } from "../../components/breadcumbs";
import Error from "../_error";
import Custom404 from "../404";

const BlogSingle = ({ singlePost, error }) => {
  if (error) return <Error error={error} />;
  if (singlePost[0] === undefined) return <Custom404 />;

  const title = singlePost[0].title.rendered
    ? singlePost[0].title.rendered
    : "Error";
  const router = useRouter();
  console.log(error);
  const { setTitleContent } = React.useContext(FunctionalsContent);
  React.useEffect(() => {
    try {
      setTitleContent(title);
    } catch (error) {
      setTitleContent("single");
      console.log(error);
    }
    AOS.init({ duration: 1000 });
    NProgress.start();
    NProgress.inc();
    setTimeout(() => {
      NProgress.done();
    }, 1000);
  }, [singlePost]);
  const image =
    singlePost[0]._embedded["wp:featuredmedia"][0].media_details.sizes.full
      .source_url;
  const content = singlePost[0].content.rendered;
  const breadcrumbs = Breadcrumbs();

  return (
    <LayoutPages>
      <div className="row">
        <div className="col-12">
          <div className="text-white" data-aos="fade-in">
            {breadcrumbs}
          </div>
          <div className="p-0 card bg-secondary" data-aos="fade-in">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
              <h2 className="display-6"> {title} </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPages>
  );
};

export default BlogSingle;

export async function getServerSideProps(context) {
  let post = context.query.blogSingle;
  const data = await fetch(
    `http://ideas-digitales.tk/portafoliocms/wp-json/wp/v2/posts/?_embed=true&slug="${post}"`
  );
  const singlePost = await data.json();
  let error = false;
  console.log(data);
  if (data.status !== 200) {
    error = {
      errorStatus: data.status,
    };
  }
  return {
    props: {
      singlePost,
      error,
    },
  };
}
