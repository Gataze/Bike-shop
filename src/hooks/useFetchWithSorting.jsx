import { useEffect, useState } from "react";

const useFetchWithSorting = (url) => {
  const [state, setState] = useState({
    data: [],
    error: false,
    isPending: true,
    type: "bikesPreview/",
  });

  const urlHandler = (e) => {
    setState((prevState) => ({ ...prevState, type: e.target.title }));
  };

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url + state.type, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          console.log("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          data,
          error: false,
          isPending: false,
        }));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        } else {
          setState((prevState) => ({
            ...prevState,
            data: null,
            error: err.message,
            isPending: false,
          }));
        }
      });

    return () => abortCont.abort();
  }, [url, state.type]);

  return { state, urlHandler };
};

export default useFetchWithSorting;
