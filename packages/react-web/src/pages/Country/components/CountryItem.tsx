import { CountryType } from "@/App";
import styles from "@/styles/common";
import React from "react";

type CountryItemPropsType = {
  countryitem: CountryType;
};

const CountryItem = (props: CountryItemPropsType) => {
  let item = props.countryitem;
  return (
    <li
      key={item.no}
      style={styles.listItemStyle}
      className={item.visited ? "list-group-item active" : "list-group-item"}
    >
      {item.country}
    </li>
  );
};

export default CountryItem;
