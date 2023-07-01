"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Dashboard = () => {

  const session = useSession();
  const router = useRouter();

  console.log(session);

  if(session.status === "loading") return (
    <div>Loading...</div>
  )

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if(session.status === "authenticated") {
    return (
      <div>Dashboard</div>
    )
  }
}

export default Dashboard