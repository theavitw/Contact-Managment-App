import { useEffect, useState } from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import Map from './Map';

// fetch data from api 

function App() {
  
  
  const data = fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then((res) => res.json()).then((data) => {

   
    let arr = [];
    for (let i in data.cases) {
      arr.push({ date: i, cases: data.cases[i] });
    }
    
    return arr
  })
  const [data1, setData] = useState([]);
  useEffect(() => {
    data.then((data) => {
      setData(data);
    });
  }, []);

  

	return (
		<>
			<h1 className="text-heading" style = {{}}>
				Case Chart
			</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={data1} margin={{ right: 100 , left:100}}>
					<CartesianGrid />
					<XAxis dataKey="date"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					
					<Line dataKey="cases"
						stroke="black" activeDot={{ r: 8 }} />
					
					
				</LineChart>
			</ResponsiveContainer>
     
      <Map />
		</>
	);
}

export default App;
