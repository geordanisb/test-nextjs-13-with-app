import authOptions from "@/lib/authOptions"
import { getServerSession } from "next-auth"

export default async function About(){
    const s = await getServerSession(authOptions);
    
    return (
        <main>
            {
                s
                ?<p>You can see this content</p>
                :<p>You can not see this content</p>
            }
        </main>
    )
}