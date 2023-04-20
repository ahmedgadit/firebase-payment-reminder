import Router from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";

export default function MyBar() {
  const delay = 250;
  const [state, setState] = useState();
  useEffect(() => {
    let timer;
    let activeRequests = 0;
    function load() {
      if (state === "loading") {
        return;
      }

      setState("loading");

      timer = setTimeout(function () {
        NProgress.start();
      }, delay); // only show progress bar if it takes longer than the delay
    }

    function stop() {
      if (activeRequests > 0) {
        return;
      }
      setState("stop");

      clearTimeout(timer);
      NProgress.done();
    }

    Router.events.on("routeChangeStart", load);
    Router.events.on("routeChangeComplete", stop);
    Router.events.on("routeChangeError", stop);

    const originalFetch = window.fetch;
    window.fetch = async function (...args) {
      if (activeRequests === 0) {
        load();
      }

      activeRequests++;

      try {
        const response = await originalFetch(...args);
        return response;
      } catch (error) {
        return Promise.reject(error);
      } finally {
        activeRequests -= 1;
        if (activeRequests === 0) {
          stop();
        }
      }
    };
  });
  return null;
}
