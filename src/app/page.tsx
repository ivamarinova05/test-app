

import axios from "axios";
import { UsersTable } from "./components/UsersTable/UsersTable";

export default async function Home() {
  const { data }  = await axios.get('http://localhost:3000/api');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UsersTable tableData={data.tableData} />
    </main>
  );
}
