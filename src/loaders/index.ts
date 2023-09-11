import express from "./express";
import mongo from "./database";
import Express from "express";

export default async ({ expressApp}: { expressApp: Express.Application }): Promise<void> => {
    await mongo();
    console.log("MongoDB Intialized");
    await express({ app: expressApp });
    console.log("Express App Intialized");

    console.log("All modules loaded!");
}