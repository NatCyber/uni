import './table.css';

type TableData = {
  head: Array<string>,
  body: Object
}

interface Props {
  tableData: TableData,
  headColor?: string,
  headBackground?: string,
  className?: string,
}

export default function Table({
  tableData,
  headColor,
  headBackground,
  className,
}: Props) {
  const tableIndex = tableData.head;
  const data: any = tableData.body;
  const keys = Object.keys(data[0]);

  return (
    <>
      <table className={className}>
        <thead>
          <tr style={{ color: headColor, backgroundColor: headBackground }}>
            {tableIndex.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d: any, i1: number) => (
            <tr key={i1}>
              {keys.map((k, i2) => (
                <td key={i2}>{d[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
