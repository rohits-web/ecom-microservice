import fastify from "fastify";

const app = fastify({
    logger: {
        level: "debug",
        //prettyPrint: true
    }
});

app.get("/", async (request, reply) => {
    console.log("in the function");
    return { hello: "world 1" };
});

app.listen(3000, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
