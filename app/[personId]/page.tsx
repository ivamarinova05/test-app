
import { Avatar } from "@mui/material"
import { useGetAllUsers } from "../hooks/useGetAllUsers"
import { Metadata } from "next"

const person = {
    name: "John Smith",
    commites: "34",
    joined: "Who cares",
}

export async function generateStaticParams() {
    const users = useGetAllUsers();
    if (!users) {
      return []
    }
  
    return users.map((row) => ({
      personId: row.id
    }))
}

export async function generateMetadata({
    params
  }: {
    params: {id: string}
  }): Promise<Metadata | null> {
    const users = useGetAllUsers();
    const user = users.find((currUser) => currUser.id === params.id);

    if (!user) {
      return {}
    }
  
    return {
      title: user.userName,
      description: user.userName,
    }
  }

export default function Person () {
    return (
        <Avatar alt={person.name} />
    )
}