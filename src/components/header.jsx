import React from 'react';

const Header = props => (
    <div className='header'>
        <div className='container'>
            <h1 className='header-title'>{props.title}</h1>
            {props.subTitle && <h2 className='header-subtitle'>{props.subTitle}</h2>}
        </div>
    </div>
);

export default Header;