import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions={
providers:[
    Credentials({
        name:"Credentails",
        credentials:{
        email:{label:"Email"},
        password:{label:"Password"}
    },
    authorize(credentials,req){
        console.log(credentials.email)
        if(credentials?.email==='admin@gmail.com' && credentials?.password==='admin'){
            return {
                id:"1",
                email:"admin@gmail.com"
            }
        }

        return null
    }
}),
GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
  
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })

],

pages:{
    signIn:"/user/login"
  }
}