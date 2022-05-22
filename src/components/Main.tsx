import React, { FC } from 'react';

interface MainProp {
    title: string;
}

const Main: FC<MainProp> = ({ title }) => {
    return (
        <div>
            <div>{title}</div>
            <div>
                <a href="/counter">Counter</a>
            </div>
        </div>
    );
};

export default Main;
