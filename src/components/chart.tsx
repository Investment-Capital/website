import { LineChart, YAxis } from "recharts";

type Data = {
  width: number;
  height: number;

  data: {
    date: number;
    value: number;
  }[];
};

const Chart = ({ height, width, data }: Data) => {
  return (
    <LineChart
      margin={{
        right: 12,
        left: 12,
      }}
      height={height}
      width={width}
      data={data}
    >
      <YAxis
        dataKey="value"
        type="number"
        scale="auto"
        domain={["auto", "auto"]}
      />
    </LineChart>
  );
};

export default Chart;
