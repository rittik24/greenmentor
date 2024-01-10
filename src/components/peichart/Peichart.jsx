import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const Peichart = () => {
  const [sheetdata, setSheetdata] = useState();
  console.log("///", sheetdata);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/20fu4zxf3bnf2');
        const data = await response.json();
        setSheetdata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const aggregatedData = sheetdata?.reduce((acc, entry) => {
    const supplier = entry["Supplier "];
    const emissions = parseFloat(entry['Emissions(in CO2e)']) || 0;

    if (!acc[supplier]) {
      acc[supplier] = emissions;
    } else {
      acc[supplier] += emissions;
    }

    return acc;
  }, {});

  const labels = Object.keys(aggregatedData || {});
  const datasetValues = Object.values(aggregatedData || {});

  return (
    <div>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              data: datasetValues,
              backgroundColor: ["blue", "green", "red", "yellow", "orange", "purple", "cyan", "pink", "brown", "grey"],
            },
          ],
        }}
        style={{ height: "20%", width: "10%" }}
      />
    </div>
  );
}

export default Peichart;
