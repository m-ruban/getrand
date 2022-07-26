import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import Link, { LinkType } from 'gg-ukit/components/Link';

import { Company } from 'models/lastCompanies';

import { companyLink, imgFullSrc } from 'modules/links';

import CreatedDate from 'components/CompanySearchItem/CreatedDate';

import 'components/CompanySearchItem/companySearchItem.less';

interface CompanySearchItemProps extends Company {
    loading?: 'eager' | 'lazy';
}

const CompanySearchItem: FC<CompanySearchItemProps> = ({
    main_img,
    loading = 'eager',
    created_iso,
    seo: { name, descr, keyword },
}) => {
    return (
        <Column l={8} m={8} s={6} xs={4}>
            <div className="company-search-item">
                <div className="company-search-item-info">
                    <div className="company-search-item-image-wrapper">
                        <img
                            className="company-search-item-image"
                            src={imgFullSrc(keyword, main_img)}
                            alt={name}
                            loading={loading}
                        />
                    </div>
                    <div>
                        <div className="company-search-item-title">
                            <Link type={LinkType.Secondary} href={companyLink(keyword)}>
                                {name}
                            </Link>
                        </div>
                        <CreatedDate created_iso={created_iso} />
                    </div>
                </div>
                <div className="company-search-item-description">{descr}</div>
            </div>
        </Column>
    );
};

export default CompanySearchItem;
