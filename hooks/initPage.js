import { useEffect, useContext } from "react";
import NProgress from "nprogress";
import { FunctionalsContent } from "../context/content";
import AOS from "aos";
import "aos/dist/aos.css";

export const InitPage = (title) => {
  const { setTitleContent } = useContext(FunctionalsContent);
  return useEffect(() => {
    setTitleContent(title);
    AOS.init({ duration: 1000 });
    NProgress.start();
    NProgress.inc();
    setTimeout(() => {
      NProgress.done();
    }, 1000);
  }, []);
};
