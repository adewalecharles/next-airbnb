'use client';
import Image from "next/image";
export default function Avatar() {
    return (
            <Image alt="Avatar" className="rounded-full" src="/images/placeholder.jpg" width="30" height="30"/>
    );
}