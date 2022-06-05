import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { Company } from 'models/lastCompanies';

import dateFormat from 'modules/date-format';
import { companyLink, imgFullSrc } from 'modules/links';

import 'components/CompanySearchItem/companySearchItem.less';

const CompanySearchItem: FC<Company> = ({ main_img, created, seo: { name, descr, keyword } }) => {
    return (
        <div className="company-search-item">
            <Column l={3} m={3} s={6} xs={4}>
                <div className="company-search-item-image-wrapper">
                    <img className="company-search-item-image" src={imgFullSrc(keyword, main_img)} alt={name} />
                </div>
            </Column>
            <Column l={5} m={5} s={6} xs={4}>
                <div className="company-search-item-title">
                    <Link type={LinkType.Secondary} href={companyLink(keyword)}>
                        {name}
                    </Link>
                </div>
                <Paragraph>Дата основания: {dateFormat(new Date(created))}</Paragraph>
                <Paragraph>{descr}</Paragraph>
            </Column>
        </div>
    );
};

export default CompanySearchItem;
