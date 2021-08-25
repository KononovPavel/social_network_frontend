import React from 'react';
import styles from './styles.module.css'
const TextArea = (props:any) => {

    const hasError = props.meta.error && props.meta.touched


    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')} >
            <textarea {...props.input} {...props}/>
            <div>
                {
                    hasError &&  <span>{props.meta.error}</span>
                }

            </div>
        </div>
    );
};

export default TextArea;
