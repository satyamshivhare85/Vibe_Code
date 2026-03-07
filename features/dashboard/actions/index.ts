"use server"

import { currentUser } from "@/features/auth/actions"
import { db } from "@/lib/db"
import { Templates } from "@prisma/client"
import { revalidatePath } from "next/cache"


// CREATE PLAYGROUND
export const createPlayground = async (data:{
    title:string,
    template:Templates,
    description?:string
}) => {

    const { title, template, description } = data;

    try {

        const user = await currentUser();

        if(!user?.id){
            throw new Error("User not authenticated")
        }

        const playground = await db.playground.create({
            data:{
                title,
                description: description ?? null,
                template,
                userId: user.id
            }
        });

        return playground;

    } catch(error){
        console.error("Error creating playground:", error);
        return null;
    }
}


// GET ALL PLAYGROUNDS

export const getAllPlaygrounds = async () => {

    const user = await currentUser();

    if(!user?.id){
        throw new Error("User not authenticated")
    }

    try {

        const playgrounds = await db.playground.findMany({
            where:{
                userId: user.id
            },
            include:{
                user: true,
                Starmark:{
                    where:{
                        userId: user.id
                    },
                    select:{
                        isMarked:true
                    }
                }
            }
        });

        return playgrounds;

    } catch(error){
        console.error("Error fetching playgrounds:", error);
        return null;
    }
}


// DELETE PLAYGROUND
export const deleteProjectById = async (id:string) => {

    try {

        await db.playground.delete({
            where:{ id }
        });

        revalidatePath("/dashboard");

    } catch(error){
        console.error("Error deleting playground:", error);
    }
}


// EDIT PLAYGROUND
export const editProjectById = async (
    id:string,
    data:{title:string, description:string}
) => {

    try {

        await db.playground.update({
            where:{ id },
            data
        });

        revalidatePath("/dashboard");

    } catch(error){
        console.error("Error updating playground:", error);
    }
}


// DUPLICATE PLAYGROUND
export const duplicateProjectById = async (id:string) => {

    try {

        const originalPlayground = await db.playground.findUnique({
            where:{ id }
        });

        if(!originalPlayground){
            throw new Error("Playground not found");
        }

        await db.playground.create({
            data:{
                title: `${originalPlayground.title} (Copy)`,
                description: originalPlayground.description,
                template: originalPlayground.template,
                userId: originalPlayground.userId
            }
        });

        revalidatePath("/dashboard");

    } catch(error){
        console.error("Error duplicating playground:", error);
    }
}