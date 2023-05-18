import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

 const authOptions:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "admin" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              
             if(credentials?.username=="admin" && credentials.password=="123"){
                return { id: "1", name: "Admin",username:credentials.username, email: "admin@admin.com" };
             }
              return null
            }
          })
    ],
  }
export default authOptions;