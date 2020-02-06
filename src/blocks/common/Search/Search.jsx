import React, { useState } from "react";
import { Input, WrapperSearch } from "./style";
// import styles from '../../../pages/Contact/Contact.module.css'

const Search = ({ setSearchFilter }) => {
  const [filterValue, setFilterValue] = useState("");

  const onFilterHandler = e => {
    setFilterValue(e.currentTarget.value.toLowerCase());
    setSearchFilter(filterValue);
  };

  return (
    <WrapperSearch>
      <Input
        // className={styles.input}
        type="text"
        placeholder="entry a name of products"
        value={filterValue}
        onChange={onFilterHandler}
      />
    </WrapperSearch>
  );
};

export default Search;
