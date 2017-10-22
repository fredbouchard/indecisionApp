import React from 'react';

export default props => (
    <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
);