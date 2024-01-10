import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
const Barchart = () => {
    const [sheetdata, setSheetdata] = useState();
    console.log("///", sheetdata);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sheetdb.io/api/v1/20fu4zxf3bnf2');
                const data = await response.json();
                setSheetdata(data);
                // console.log("sheetdata", data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Bar
                data={
                    {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: "Emmension 2023",
                                data: sheetdata?.map(monthData => monthData['Emissions(in CO2e)']),
                                backgroundColor: "blue",
                            },
                            {
                                label: "Emmension 2022",
                                data: sheetdata?.map(monthData => monthData['Emissions(in CO2e)']),
                                backgroundColor: 'green',
                            }
                        ]
                    }
                }
                width={400} 
                height={100} 
            />
        </div>
    )
}

export default Barchart