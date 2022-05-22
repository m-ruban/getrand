import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'gg-ukit/components/Button';

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
                <Button onClick={() => dispatch(increment())}>Click</Button>
                <span>{count}</span>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </div>
            <div>
                <a href="/">Main</a>
            </div>
        </div>
    );
};

export default Item;
