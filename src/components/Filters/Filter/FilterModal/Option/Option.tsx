import React, { useState, SyntheticEvent } from "react";
import { IOption } from "./IOption";
import { connect } from "react-redux";
import {
  ADD_FILTER,
  REMOVE_FILTER
} from "../../../../../actions/ProjectReducerActions";
import classes from "./Option.module.scss";

const OptionComponent = (props: IOption) => {
  const [selected, setSelected] = useState(false);

  const changeHandler = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    e.stopPropagation();

    selected === false
      ? props.addFilter(props.filter)
      : props.removeFilter(props.filter);

    setSelected(!selected);
  };
  return (
    <div className={classes.option}>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        value={props.filter}
        checked={selected}
        onChange={(e: SyntheticEvent<HTMLInputElement, Event>) =>
          changeHandler(e)
        }
      />
      <label>{props.name}</label>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addFilter: (filter: string) => {
      dispatch({ type: ADD_FILTER, filter: filter });
    },
    removeFilter: (filter: string) => {
      dispatch({ type: REMOVE_FILTER, filter: filter });
    }
  };
};

export const Option = connect(null, mapDispatchToProps)(OptionComponent);
