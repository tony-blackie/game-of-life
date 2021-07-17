import React from 'react';

import useField from './useField';
import { Cell } from '../Cell';
import { getKey } from './utils';
import './field.scss';

interface Props {
    width: number;
    height: number;
}

const Field: React.FC<Props> = () => {
    const { cells } = useField({ width: 10, height: 10 });

    return (
        <div className="row">
            {cells.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell) => {
                        const { x, y, isAlive } = cell;

                        return <Cell key={getKey({ x, y })} isAlive={isAlive} x={x} y={y} />;
                    })}
                </div>
            ))}
        </div>
    );
};

export default Field;
