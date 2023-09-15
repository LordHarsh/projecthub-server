import express from "./express";
import mongo from "./database";
import Express from "express";
import Logger from "./logger";

export default async ({ expressApp}: { expressApp: Express.Application }): Promise<void> => {
    await mongo();
    Logger.info("MongoDB Intialized");
    await express({ app: expressApp });
    Logger.info("Express App Intialized");

    Logger.info("All modules loaded!");
}