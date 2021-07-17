import React from 'react';
import { Cell } from '../types';

interface Props {
    isAlive: boolean;
    x: number;
    y: number;
}

const Cell: React.FC<Cell> = ({ isAlive, x, y }) => {
    return (<div>{isAlive ? 1 : 0}</div>);
}

export default Cell;