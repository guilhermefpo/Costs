import { app } from "./app.js";

app.listen({ port: 3000, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running on http://localhost:3000");
  console.log("Docs available at http://localhost:3000/docs");
});
