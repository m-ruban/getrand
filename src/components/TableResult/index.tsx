import React, { FC } from 'react';

import Dislike from 'gg-ukit/components/Icon/Dislike';
import Like from 'gg-ukit/components/Icon/Like';

import Section from 'components/Section';

import 'components/TableResult/tableResult.less';

interface TableResultProps {
    pluses: string[];
    minuses: string[];
}

export const TableResult: FC<TableResultProps> = ({ pluses, minuses }) => {
    const lines = pluses.length > minuses.length ? pluses : minuses;
    return (
        <Section>
            <table className="table-result">
                <tr>
                    <th className="table-result-pluses">Плюсы</th>
                    <th className="table-result-minuses">Минусы</th>
                </tr>
                {lines.map((_, index) => {
                    const plus = pluses[index] || '';
                    const minus = minuses[index] || '';
                    return (
                        <tr key={plus + minus}>
                            <td>
                                {plus && (
                                    <div className="table-result-item">
                                        <Like color="#738697" />
                                        <span className="table-result-item-text">{plus}</span>
                                    </div>
                                )}
                            </td>
                            <td>
                                {minus && (
                                    <div className="table-result-item">
                                        <Dislike color="#738697" />
                                        <span className="table-result-item-text">{minus}</span>
                                    </div>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </table>
        </Section>
    );
};

export default TableResult;
