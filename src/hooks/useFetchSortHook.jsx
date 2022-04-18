import { useEffect, useState } from "react";

const useFetchWithUrlHandler = (url) => {
  const [state, setState] = useState({
    data: [],
    error: false,
    isPending: true,
    type: "bikesPreview/",
  });

  const urlHandler = (e) => {
    if (e.target.title !== state.type) {
      setState({
        data: [],
        error: false,
        isPending: true,
        type: e.target.title,
      });
    }
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

  const sorterFunction = (data, sortDirection) => {
    let sorted = [...data];

    switch (sortDirection) {
      case "A-Z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "1-9":
        sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "9-1":
        sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }
    return sorted;
  };

  const sortTypeHandler = (e) => {
    const sorted = sorterFunction(state.data, e.target.value);

    setState((prevState) => ({
      ...prevState,
      data: sorted,
    }));
  };

  return { state, urlHandler, sortTypeHandler };
};

export default useFetchWithUrlHandler;
