type Data = {
  titles: string[];
  values: {
    title: string;
    value: any;
    image?: boolean;
  }[][];
};

const Table = ({ titles, values }: Data) => {
  return (
    <table
      style={{ color: "white", width: "100%", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index} style={{ cursor: "pointer" }}>
            {titles.map((title) => {
              const rowValue = row.find((data) => data.title == title);
              return (
                <td key={title}>
                  {rowValue?.image ? (
                    <img
                      src={rowValue.value}
                      style={{ height: "75px", width: "75px" }}
                    />
                  ) : (
                    rowValue?.value
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
