import { CountryType } from "@/App";
import React from "react";
import CountryItem from "./components/CountryItem";

type CountryListPropsType = {
  countries: Array<CountryType>;
};

const CountryList = (props: CountryListPropsType) => {
  const list = props.countries;
  let countries = list.map((item, index) => {
    return <CountryItem key={item.no} countryitem={item} />;
  });
  return <ul className="list-group">{countries}</ul>;
};

export default CountryList;
