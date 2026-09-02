import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifyCors from "@fastify/cors";
import ScalarApiReference from "@scalar/fastify-api-reference";

const app = fastify({ logger: true });

await app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
});

await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Software Costs Microsservice",
      description: "Microsserviço de gestão de projetos e controle de custos",
      version: "1.0.0",
    },
  },
});

await app.register(ScalarApiReference, {
  routePrefix: "/docs",
});

export { app };
