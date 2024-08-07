import { express, test } from "vitest";
import { request } from "supertest";
import app from "../app.js";

test("GET /api/health works",
    async ()=>{
        const response=await request(app).get("api/health works")
        console.log (response)
    }
);

