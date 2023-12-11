import { useEffect } from "react";
import { useRef, useState } from "react";
import styles from "./autoSuggestion.module.css";
import { fetchSuggestions } from "./server";

const AutoSuggestion = () => {
  const inputRef = useRef();
  const suggestionDivRef = useRef();
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target);
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionDivRef.current
      ) {
        setShowSuggestions(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);

  const getSuggestions = async () => {
    try {
      const data = await fetchSuggestions();
      setSuggestions(data);
    } catch (error) {
      setSuggestions([]);
      alert(error);
    }
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    getSuggestions(); // making api call
    setSearch(value);
  };

  return (
    <section>
      <div className={styles.suggestionDiv}>
        <input
          ref={inputRef}
          type="text"
          id="search"
          name="search"
          placeholder="search here..."
          onFocus={() => setShowSuggestions(true)}
          //   onBlur={() => setShowSuggestions(false)}
          value={search}
          onChange={handleOnChange}
        />
        {showSuggestions && (
          <div ref={suggestionDivRef} className={styles.div}>
            <h3>Suggestions</h3>
            {suggestions.map((item) => (
              <button
                key={item.id}
                onClick={() => setSearch(item.name)}
                className={styles.suggestionItem}
              >
                <p>{item.name}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AutoSuggestion;
