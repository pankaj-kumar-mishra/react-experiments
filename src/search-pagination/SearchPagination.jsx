import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import { useDebounce, useThrottle } from "./hooks";

// const URL = "https://api.punkapi.com/v2/beers?page=1&per_page=20&beer_name="king";
const BASE_URL = "https://api.punkapi.com/v2/beers";
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SearchPagination = () => {
  const abortControllerRef = useRef();
  const cancelTokenRef = useRef();

  const debounceCall = useDebounce();
  const throttleCall = useThrottle();

  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(pages[0]);
  const [search, setSearch] = useState("");

  const getBeers = useCallback(async (pageNo, beerName) => {
    try {
      const searchBeer = beerName ? `&beer_name=${beerName}` : "";
      const response = await fetch(
        `${BASE_URL}?page=${pageNo}&per_page=20${searchBeer}`
      );
      const data = await response.json();
      //   console.log("🚀 ~ file: SearchPagination.jsx:16 ~ data:", data);
      setBeers(data);
    } catch (error) {
      console.log("🚀 ~ file: SearchPagination.jsx:13 ~ error:", error);
    }
  }, []);

  // NOTE: Optimization using Abort Controller
  //   const getBeers = useCallback(async (pageNo, beerName) => {
  //     abortControllerRef.current?.abort();
  //     abortControllerRef.current = new AbortController();
  //     const signal = abortControllerRef.current.signal;

  //     try {
  //       const searchBeer = beerName ? `&beer_name=${beerName}` : "";
  //       const response = await fetch(
  //         `${BASE_URL}?page=${pageNo}&per_page=20${searchBeer}`,
  //         { signal }
  //       );
  //       const data = await response.json();
  //       //   console.log("🚀 ~ file: SearchPagination.jsx:16 ~ data:", data);
  //       setBeers(data);
  //     } catch (error) {
  //       if (error.name === "AbortError") {
  //         console.log("Fetch operation aborted");
  //       } else {
  //         console.log("🚀 ~ file: SearchPagination.jsx:13 ~ error:", error);
  //       }
  //     }
  //   }, []);

  // NOTE: Optimization using Axios CancelToken
  //   const getBeers = useCallback(async (pageNo, beerName) => {
  //     cancelTokenRef.current?.cancel("Operation cancelled by Axios CancelToken");
  //     cancelTokenRef.current = axios.CancelToken.source();
  //     const cancelToken = cancelTokenRef.current.token;

  //     const params = {
  //       page: pageNo,
  //       per_page: 20,
  //     };
  //     if (beerName) {
  //       params.beer_name = beerName;
  //     }

  //     try {
  //       const response = await axios.get(`${BASE_URL}`, {
  //         params,
  //         cancelToken,
  //       });
  //       //   console.log("🚀 ~ file: SearchPagination.jsx:64 ~ data:", response.data);
  //       setBeers(response.data);
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log("Axios operation cancelled");
  //       } else {
  //         console.log("🚀 ~ file: SearchPagination.jsx:13 ~ error:", error);
  //       }
  //     }
  //   }, []);

  //   useEffect(() => {
  //     getBeers(page, search);
  //   }, [getBeers, page, search]);

  // NOTE: Optimization using useDebounce
  //   useEffect(() => {
  //     debounceCall(() => getBeers(page, search));
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [getBeers, page, search]);

  // NOTE: Optimization using useThrottle
  useEffect(() => {
    throttleCall(() => getBeers(page, search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getBeers, page, search]);

  return (
    <div>
      <h2>SearchPagination</h2>
      <div>
        <label htmlFor="search">Search here</label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="type here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="page">Choose Page</label>
        <select
          name="page"
          id="page"
          onChange={(e) => setPage(e.target.value)}
          value={page}
        >
          {pages.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {beers.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          tagline={item.tagline}
          image_url={item.image_url}
        />
      ))}
    </div>
  );
};

export default SearchPagination;
