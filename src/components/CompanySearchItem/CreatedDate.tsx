import React, { FC } from 'react';

import Calendar from 'gg-ukit/components/Icon/Calendar';

import dateFormat from 'modules/date-format';

import 'components/CompanySearchItem/createdDate.less';

const CreatedDate: FC<{ created_iso: string }> = ({ created_iso }) => {
    return (
        <div className="company-search-item-date">
            <Calendar color="#738697" />
            &nbsp;{dateFormat(new Date(created_iso))}
        </div>
    );
};

export default CreatedDate;
