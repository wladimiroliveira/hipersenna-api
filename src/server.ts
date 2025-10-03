import fastify from "fastify";
import routes from "./routes.js"
import fastifyCors from "@fastify/cors";

const app = fastify();

await app.register(import('@fastify/swagger'))

declare module "fastify"

app.register(fastifyCors, { origin: "*" })

app.register(routes);

app.listen({port: 3333, host: "0.0.0.0"}).then(() => {
    console.log('Server is running');
}) 

