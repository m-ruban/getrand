import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from 'models/counter';
import { RootStore } from 'models/reducers';

interface ItemProp {
    title: string;
}

const Item: FC<ItemProp> = ({ title }) => {
    const count = useSelector((state: RootStore) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{title}</div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
            <div>
                <a href="/">Main</a>
            </div>
        </div>
    );
};

export default Item;
