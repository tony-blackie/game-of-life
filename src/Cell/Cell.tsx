import React from 'react';
import cn from 'classnames';

import './cell.scss';

interface Props {
    isAlive: boolean;
    x: number;
    y: number;
}

const CellComponent: React.FC<Props> = ({ isAlive }) => {
    return (
        <div
            className={cn('cell', {
                'is-active': isAlive,
            })}
        />
    );
};

export default CellComponent;
