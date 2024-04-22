import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// 名前を受け取って挨拶するエンドポイント
app.get("/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.text(`Hello ${name}!`);
});

export default app;
