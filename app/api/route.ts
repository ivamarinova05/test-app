import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import { tableRow } from '../types/types';


const tableData: tableRow[] = [
    {id: '0123', userName: 'John Smith', commits: 34, joined: '12-2022'},
    {id: '1123', userName: 'Emma Hudson', commits: 98, joined: '04-2021'},
    {id: '2123', userName: 'Kathy Travis', commits: 12, joined: '01-2024'},
    {id: '3123', userName: 'Steve Perry', commits: 235, joined: '10-2020'},
    {id: '4123', userName: 'Scott Thomas', commits: 4, joined: '05-2022'},
  ];

export async function GET () {
  return NextResponse.json({tableData});
}