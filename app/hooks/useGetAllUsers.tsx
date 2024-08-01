'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { tableRow } from "../types/types";

export const useGetAllUsers = () => {
    const [tableData, setTableData] = useState<tableRow[]>([]);
    const getData = async () => {
      const { data } = (await axios.get('http://localhost:3000/api'));
      setTableData(data.tableData);
    };
  
    useEffect(() => {
      getData();
    }, []);

    return tableData;
}