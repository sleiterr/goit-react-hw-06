// SearchBox.jsx

import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
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
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
