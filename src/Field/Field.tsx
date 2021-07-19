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
    const { cells } = useField({ width: 50, height: 50 });

    return (
        <div>
            {cells.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
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
