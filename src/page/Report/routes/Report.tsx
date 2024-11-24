import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "../../../components/Elements/Spinner/Spinner";
import { useColumnName } from "../../../hooks/useColumnName";
import { Table } from "../../../components/Elements/Table";

export const Report = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["test"],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json"
        )
        .then((res) => res.data),
  });

  if (isLoading) return <Spinner />;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  // const columns = Object.keys(data[0]).map((key) => ({
  //   key,
  //   label: key
  //     .replace(/_/g, " ")
  //     .replace(/\b\w/g, (char) => char.toUpperCase()),
  // }));

  // for (var index = 0; index < 3; index++) {
  //   setTimeout(function () {
  //     alert(index);
  //   }, 1000 + index);
  // }

  const columns = useColumnName(data[0]);
  console.log(data[0]);
  console.log(columns, "Columns ");
  return (
    <div>
      <p className="text-center my-4">Store Data: {data.length}</p>
      <div className="w-4/5 mx-auto">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

Report.displayName = "Report";
