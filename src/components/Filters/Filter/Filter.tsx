import React, { useState } from "react";
import { IFilter } from "./IFilter";
import { FilterModal } from "./FilterModal/FilterModal";
import classes from "./Filter.module.scss";

export const Filter = (props: IFilter) => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <React.Fragment>
      <div className={classes.filter} onClick={() => setMenu(true)}>
        <h3 className={classes.button}> {props.name}</h3>
      </div>
      <FilterModal show={menu} closeModal={closeMenu} filters={props.filters} />
    </React.Fragment>
  );
};
