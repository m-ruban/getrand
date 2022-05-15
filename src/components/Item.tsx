import React, { FC } from 'react';

interface ItemProp {
    title: string;
}

const Item: FC<ItemProp> = ({ title }) => <div>{title}</div>;

export default Item;
