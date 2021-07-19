import React from 'react';

import { Field } from '../Field';
import './app.scss';

const App: React.FC = () => {
    return (
        <div className="container">
            <Field width={50} height={50} />
        </div>
    );
};

export default App;
