import React from "react";
import LayoutPages from "../components/layouts/layoutPages";
import { FunctionalsContent } from "../context/content";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";

export default function Custom404() {
  const { setTitleContent } = React.useContext(FunctionalsContent);
  React.useEffect(() => {
    setTitleContent("404");
    AOS.init({ duration: 1000 });
    NProgress.start();
    NProgress.inc();
    setTimeout(() => {
      NProgress.done();
    }, 1000);
  }, []);
  return (
    <LayoutPages>
      <div className="image-content">
        <Image src="/image-404.png" width="600px" height="400px" />
      </div>
    </LayoutPages>
  );
}
