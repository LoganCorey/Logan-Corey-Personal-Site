import React from 'react';
import { IFilterModal } from './IFilterModal';
import { Option } from './Option/Option';
import classes from './FilterModal.module.scss';

export const FilterModal = (props: IFilterModal) => {
    return (
        <React.Fragment>
            {props.show === true ?
                <div className={classes.overlay}>
                    <div className={classes.modal + ' ' + classes.animateModal}>
                        <button className={classes.button} onClick={props.closeModal}>X</button>
                        <div className={classes.options}>
                            <Option name="python" filter="python" />
                            {props.filters.map((filter: string, index:number) => {
                                return <Option key={index} name={filter} filter={filter} />
                            })}
                        </div>
                    </div>
                </div> : null}
        </React.Fragment>
    );
};
