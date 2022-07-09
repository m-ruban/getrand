import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import Calendar from 'gg-ukit/components/Icon/Calendar';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { Company } from 'models/lastCompanies';

import dateFormat from 'modules/date-format';
import { companyLink, imgFullSrc } from 'modules/links';

import 'components/CompanySearchItem/companySearchItem.less';

const CompanySearchItem: FC<Company> = ({ main_img, created_iso, seo: { name, descr, keyword } }) => {
    return (
        <Column l={8} m={8} s={6} xs={4}>
            <div className="company-search-item">
                <div className="company-search-item-info">
                    <div className="company-search-item-image-wrapper">
                        <img className="company-search-item-image" src={imgFullSrc(keyword, main_img)} alt={name} />
                    </div>
                    <div>
                        <div className="company-search-item-title">
                            <Link type={LinkType.Secondary} href={companyLink(keyword)}>
                                {name}
                            </Link>
                        </div>
                        <div className="company-search-item-date">
                            <Calendar color="#738697" />
                            &nbsp;{dateFormat(new Date(created_iso))}
                        </div>
                    </div>
                </div>
                <div className="company-search-item-description">{descr}</div>
            </div>
        </Column>
    );
};

export default CompanySearchItem;
