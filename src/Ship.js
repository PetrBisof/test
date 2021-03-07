import React from 'react'
import { css, cx } from '@emotion/css'
import { useSelector } from "react-redux";


const Ships = (props) => {

    const data = useSelector((state) => state.data);
    console.log(data, "shi[[[[[");
  return (
    <>{
        data.map( item => {
    return <div><div className={css`
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
                color: green;
            }
            `}>{item.name}</div>
        <div>{item.details}</div></div>})}
    </>
  )
};

export default Ships;