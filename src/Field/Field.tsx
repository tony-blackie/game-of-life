import React from 'react';

import useField from './useField';

interface Props {
    width: number;
    height: number;
}

const Field: React.FC<Props> = () => {
    const {} = useField({ width: 50, height: 50 });

    return <div />;
};

export default Field;
