import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import Button, { ButtonKind } from 'gg-ukit/components/Button';
import GroupControl from 'gg-ukit/components/GroupControl';
import Search from 'gg-ukit/components/Icon/Search';
import Input, { InputKind } from 'gg-ukit/components/Input';
import Colors from 'gg-ukit/modules/colors';

import { RootStore } from 'models/reducers';

const SearchInput: FC = () => {
    const query = useSelector((state: RootStore) => state.searchCriteria.query);
    const [value, setValue] = useState<string>(query);
    return (
        <>
            <GroupControl rounded>
                <Input
                    kind={InputKind.Minor}
                    name="query"
                    placeholder="Найти гайд, обзор или игру..."
                    value={value}
                    autoComplete="off"
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    rounded
                />
                <Button
                    kind={ButtonKind.Promo}
                    icon={<Search color={Colors.Secondary} />}
                    aria-label="Поиск по сайту"
                    rounded
                />
            </GroupControl>
        </>
    );
};

export default SearchInput;
