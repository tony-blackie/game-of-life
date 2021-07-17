import React from 'react';
import { CellProps } from '../types';

interface Props {
    isAlive: boolean;
    x: number;
    y: number;
}

const Cell: React.FC<CellProps> = ({ isAlive, x, y }) => {
    return <div>{isAlive ? 1 : 0}</div>;
};

export default Cell;
