import React from 'react';

import useField from './useField';
import { Cell } from '../Cell';
import './field.scss';

interface Props {
    width: number;
    height: number;
}

const Field: React.FC<Props> = () => {
    const { cells } = useField({ width: 10, height: 10 });

    const getKey = (item: { x: number; y: number } | undefined) => {
        return `${item?.y} ${item?.x}`;
    };

    return (
        <div className="row">
            {cells.map((row, y) => (
                <div key={y}>
                    {row.map(({ isAlive, x, y }) => (
                        <Cell key={getKey({ x, y })} isAlive={isAlive} x={x} y={y} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Field;
