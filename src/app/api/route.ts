import { NextResponse } from 'next/server';
import { tableRow } from '../../types/types';


const tableData: tableRow[] = [
    {id: '0123', userName: 'John Smith', commits: 34, joined: '12-2022', rating: 4.5, projects: 4, followers: 20, avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"},
    {id: '1123', userName: 'Emma Hudson', commits: 98, joined: '04-2021', rating: 4.8, projects: 7, followers: 49, avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"},
    {id: '2123', userName: 'Kathy Travis', commits: 12, joined: '01-2024', rating: 4.2, projects: 1, followers: 5, avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"},
    {id: '3123', userName: 'Steve Perry', commits: 235, joined: '10-2020', rating: 4.7, projects: 18, followers: 85, avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png"},
    {id: '4123', userName: 'Scott Thomas', commits: 4, joined: '05-2022', rating: 4, projects: 1, followers: 2, avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"},
  ];

export async function GET () {
  return NextResponse.json({tableData});
}