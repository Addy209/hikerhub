import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions={
providers:[
    Credentials({
        name:"Credentails",
        credentials:{
        email:{label:"Email"},
        password:{label:"Password"}
    },
    authorize(credentials,req){
        if(credentials?.email==='admin@gmail.com' && credentials?.password==='admin'){
            return {
                id:"1",
                email:"admin@gmail.com"
            }
        }

        return null
    }
})
]
}