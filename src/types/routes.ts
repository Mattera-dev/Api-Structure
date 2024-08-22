import { FastifyReply, FastifyRequest } from "fastify";

type routesMethods =
  | "get"
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "options"
  | "head";

type routesProps = {
  method: routesMethods;
  path: string;
  run: (req: FastifyRequest, reply: FastifyReply) => void;
};

export { routesProps, routesMethods };
export default routesProps;
