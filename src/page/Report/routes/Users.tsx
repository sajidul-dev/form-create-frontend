import { useUsers } from "../api/getUsers";
import { useColumnName } from "../../../hooks/useColumnName";
import { Table } from "../../../components/Elements/Table";

export const Users = () => {
  const usersQuery = useUsers();

  if (usersQuery.isLoading) return <p>Loading...</p>;
  if (usersQuery.error instanceof Error)
    return <p>Error: {usersQuery.error.message}</p>;
  const data: any = usersQuery.data || [];
  const columns = useColumnName(data[0]);
  return (
    <div className="flex justify-center items-center w-5/6 mx-auto">
      <div>
        {/* <p className="text-center my-4">Store Data: {data.length}</p> */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

Users.displayName = "Users";
