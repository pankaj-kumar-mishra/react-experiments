import React, { useState, useEffect, useRef } from "react";
import styles from "./scrollIndicator.module.css";
import { ProgressBar } from "../progress-bar";

const url = "https://dummyjson.com/products?limit-100";

const ScrollIndicator = () => {
  const bottomRef = useRef(null);
  const sectionsRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [blurLevel, setBlurLevel] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      if (data?.products?.length > 0) {
        setData(data.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    // console.log("Body ScrollTop", document.body.scrollTop);
    // console.log(
    //   "Document Element: ScrollTop",
    //   document.documentElement.scrollTop
    // );
    // console.log(
    //   "Document Element: ScrollHeight",
    //   document.documentElement.scrollHeight
    // );
    // console.log(
    //   "Document Element: ClientHeight",
    //   document.documentElement.clientHeight
    // );
    // console.log("<<<<<<<<<END>>>>>>>>>");
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const heightLeft =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentCovered = (scrolled / heightLeft) * 100;
    // console.log("Percent covered:", percentCovered);
    setScrollPercentage(percentCovered);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = () => {
    // Way 1 - using scrollIntoView
    // sectionsRef.current?.[5].scrollIntoView({ behavior: "smooth" });
    // Way 2 - using getBoundingClientRect
    const sectionPosition =
      sectionsRef.current?.[5].getBoundingClientRect().top;
    window.scrollTo({ top: sectionPosition, left: 0, behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    // Way 1 - Manual div with reference required
    // bottomRef.current.scrollIntoView({ behavior: "smooth" });
    // Way 2 - scrollHeight required
    const bottomPosition = document.documentElement.scrollHeight;
    window.scrollTo({ top: bottomPosition, left: 0, behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleBlurLevelChange = (e) => {
    setBlurLevel(e.target.value);
  };

  return (
    <>
      <ProgressBar percent={scrollPercentage} text="" />
      <div className={styles.container}>
        <h3>Scroll Indicator</h3>
        <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
        <button onClick={handleScrollToSection}>
          Scroll To Section (index as 5)
        </button>
        <input
          type="range"
          min={0}
          max={10}
          value={blurLevel}
          onChange={handleBlurLevelChange}
        />
        <div className={styles.content}>
          {data?.length > 0 ? (
            <>
              {data.map((item, index) => (
                <div
                  ref={(ref) => (sectionsRef.current[index] = ref)}
                  key={item.id}
                  className={styles.item}
                >
                  <h4>{item.title}</h4>
                  <h6>{item.description}</h6>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    style={{ filter: `blur(${blurLevel}px)` }}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              <h6>
                {loading ? "Fetching data, Please wait..." : "No record found!"}
              </h6>
            </>
          )}
        </div>
        <button onClick={handleScrollToTop}>Scroll To Top</button>
        <div ref={bottomRef} />
      </div>
    </>
  );
};

export default ScrollIndicator;
