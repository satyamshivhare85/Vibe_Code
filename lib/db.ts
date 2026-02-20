import {PrismaClient} from "@prisma/client"

const globalForPrisma= globalThis as unknown as {prisma:PrismaClient}

export const db= globalForPrisma.prisma || new PrismaClient()

if(process.env.NODE_ENV!=="production") globalForPrisma.prisma=db;


//prisma ka instance multiple time nhi bnega ye ek hi br bnega yar jb connect ya nyi chij judenge