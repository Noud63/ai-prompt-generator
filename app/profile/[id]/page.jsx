"use client"
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Profile from '@components/Profile'

const UserProfile = ({params}) => {

    const searchParams = useSearchParams();
    const username = searchParams.get("name");
    
    const [ posts, setPosts ] = useState([])

    useEffect(() => {

        const GetProfile = async () => {
            const response = await fetch(
              `/api/users/${params?.id}/posts`
            );
                 const data = await response.json();
               setPosts(data)
              }

         if (params?.id) GetProfile();
        
    },[params.id])
   
  return (
    <div>
        <Profile
          name={username}
          desc="Welcome to your personalized page"
          data={posts}
        />
    </div>
  );
}

export default UserProfile
