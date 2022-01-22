import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
    {
        name: 'Jan',
        BOOTSTRAP: 7,
        HTML5: 2,
        amt: 3,
        JAVASCRIPT: 2,
        REACT: 3,
    },
    {
        name: 'Feb',
        BOOTSTRAP: 3,
        HTML5: 1,
        amt: 2,
        JAVASCRIPT: 1,
        REACT: 2,
    },
    {
        name: 'Mar',
        BOOTSTRAP: 2,
        HTML5: 6,
        amt: 2,
        JAVASCRIPT: 2,
        REACT: 2,
    },
    {
        name: 'April',
        BOOTSTRAP: 2,
        HTML5: 3,
        amt: 4,
        JAVASCRIPT: 5,
        REACT: 6,
    },
    {
        name: 'May',
        BOOTSTRAP: 3,
        HTML5: 4,
        amt: 2,
        JAVASCRIPT: 7,
        REACT: 5,
    },
    {
        name: 'June',
        BOOTSTRAP: 6,
        HTML5: 3,
        amt: 5,
        JAVASCRIPT: 4,
        REACT: 7,
    },

];
const Bchart = () => {
    return (
        <div>
            <div width="50%" height="100%">
                <BarChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 2,
                        right: 3,
                        left: 2,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="HTML5" stackId="a" fill="rgba(255, 99, 132, 0.2)" />
                    <Bar dataKey="BOOTSTRAP" stackId="a" fill="rgba(255, 206, 86, 0.2)" />
                    <Bar dataKey="JAVASCRIPT" stackId="a" fill="rgba(54, 162, 235, 0.2)" />
                    <Bar dataKey="REACT" stackId="a" fill="rgba(153, 102, 255, 0.2)" />
                </BarChart>
            </div>
        </div>
    );
};

export default Bchart;