import React, { FC } from 'react';

interface MainProp {
    title: string;
}

const Main: FC<MainProp> = ({ title }) => {
    return (
        <div>
            <div>{title}</div>
            <div>
                <a href="/counter">counter</a>
            </div>
            <div>
                <a href="/images">images</a>
            </div>
            <div>
                <a href="/tip">tip</a>
            </div>
        </div>
    );
};

export default Main;
