import React, { FC, ReactNode } from 'react';

const Test: FC<{ children: ReactNode }> = ({ children }) => {
    return <b>{children}</b>;
};

export default Test;
