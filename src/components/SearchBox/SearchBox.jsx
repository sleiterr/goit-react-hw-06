// SearchBox.jsx

import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";
import { useState } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const [localFilter, setLocalFilter] = useState(filter);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalFilter(value);
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.SearchBox}>
      <label className={styles.LabelBox} htmlFor="search">
        Find contact by name
      </label>
      <input
        className={styles.BoxInput}
        type="text"
        name="search"
        value={localFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
