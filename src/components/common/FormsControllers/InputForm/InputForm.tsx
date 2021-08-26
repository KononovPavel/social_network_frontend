import React from 'react';
import styles from "../TextAreaForm/styles.module.css";
import l from "../../../Login/login.module.css";

const InputForm = (props:any) => {
    const hasError = props.meta.error && props.meta.touched
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')} >
            <input className={l.input} {...props.input} {...props}/>
            <div>
                {
                    hasError &&  <span>{props.meta.error}</span>
                }
            </div>
        </div>
    );
};

export default InputForm;
