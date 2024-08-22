import routesProps from "../types/routes";
import routeBuilder from "../utils/routeBuilder";

const route: routesProps = new routeBuilder()
  .setPath("/")
  .setMethod("get")
  .setExec((req, reply) => {
    return reply.code(200).send("<h1>ola World!</h1>");
  });


export default route;
