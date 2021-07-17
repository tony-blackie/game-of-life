import React from 'react';

import useField from './useField';
import { Cell } from '../Cell';
import './field.scss';

interface Props {
    width: number;
    height: number;
}

const Field: React.FC<Props> = () => {
    const { cells } = useField({ width: 50, height: 50 });

    return (
        <div className="row">
            {cells.map((row) => (
                <div>
                    {row.map(({ isAlive, x, y }) => (
                        <Cell key={x + y} isAlive={isAlive} x={x} y={y} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Field;
