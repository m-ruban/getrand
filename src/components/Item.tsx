import React, { FC } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from 'models/counter';
import { Store } from 'models/store';

interface ItemProp {
    title: string;
}

const Item: FC<ItemProp> = ({ title }) => {
    const count = useSelector((state: Store) => state.counter.value);
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
        </div>
    );
};

export default Item;
