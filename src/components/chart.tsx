import { Line, LineChart, Tooltip, XAxis, YAxis, Legend } from "recharts";

type Data = {
  width: number;
  height: number;

  data: {
    [key: string]: {
      date: number;
      value: number;
    }[];
  };
};

const Chart = ({ height, width, data }: Data) => {
  const allDataPoints = Object.values(data).flat();

  return (
    <LineChart
      margin={{
        right: 12,
        left: 12,
      }}
      height={height}
      width={width}
      data={allDataPoints}
    >
      <YAxis
        dataKey="value"
        type="number"
        scale="auto"
        domain={["auto", "auto"]}
      />
      <XAxis
        dataKey="date"
        scale="time"
        domain={["auto", "auto"]}
        type="number"
        tickMargin={12}
        tickFormatter={(label) =>
          new Intl.DateTimeFormat(navigator.language, {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          }).format(new Date(label))
        }
      />
      <Tooltip
        content={({ payload }) => {
          if (payload?.length == 0 || !payload) return;

          return (
            <div
              style={{
                backgroundColor: "#1f1f1f",
                border: "2px solid rgb(191, 191, 191)",
                padding: "8px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>
                {new Date(payload[0].payload.date)
                  .toLocaleString()
                  .split(", ")
                  .map((data, index) => {
                    if (index == 0)
                      return new Intl.DateTimeFormat(navigator.language, {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                      }).format(new Date(payload[0].payload.date));
                    return data;
                  })
                  .join(", ")}
              </p>
              {payload.map((data) => {
                return (
                  <p>
                    {data.name}: {data.payload.value}
                  </p>
                );
              })}
            </div>
          );
        }}
      />
      <Legend />

      {Object.entries(data).map(([key, dataset]) => (
        <Line
          key={key}
          dataKey="value"
          data={dataset}
          type="stepAfter"
          dot={{ r: 2 }}
          activeDot={{ r: 3 }}
          strokeWidth={2}
          name={key}
          stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        />
      ))}
    </LineChart>
  );
};

export default Chart;
