import customApi from "./utils/api";

const app = new customApi({
    host: "127.0.0.1",
    port: 3000
});

app.start();
