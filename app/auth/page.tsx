'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    useEffect(() => {
        if (token !== null && token) {
            window.localStorage.setItem('token', token);
            router.push('/objects');
        }
        else{
            router.push('/login');
        }
    }, [])
    return (
        <div>
            
        </div>
    );
}