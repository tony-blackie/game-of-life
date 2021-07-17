import React from 'react';

interface Props {
    isAlive: boolean;
    x: number;
    y: number;
}

const CellComponent: React.FC<Props> = ({ isAlive, x, y }) => {
    return <div>{isAlive ? 1 : 0}</div>;
};

export default CellComponent;
