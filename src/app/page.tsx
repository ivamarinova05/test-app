
'use client'
import {useGetAllUsers} from "../hooks/useGetAllUsers"
import { UsersTable } from "./components/UsersTable/UsersTable";

export default function Home() {
  const tableData = useGetAllUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UsersTable tableData={tableData} />
    </main>
  );
}
