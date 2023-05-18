"use client"
import { signIn } from "next-auth/react"

export default async function About(){
    return (
        <main>
            <p><button onClick={() => signIn()}>Sign in</button></p>
        </main>
    )
}