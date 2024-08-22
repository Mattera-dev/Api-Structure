import { FastifyReply, FastifyRequest } from "fastify";
import routesProps, { routesMethods } from "src/types/routes";

class routeBuilder {
  private props: routesProps;

  constructor() {
    this.props = {
      path: "",
      method: "get",
      run: (req, reply) => {},
    };
  }

  setPath = (path: string) => {
    this.props.path = path;

    return {
      setMethod: this.setMethod,
    };
  };

  private setMethod = (method: routesMethods) => {
    this.props.method = method;

    return { setExec: this.setExec };
  };

  private setExec = (
    exec: (req: FastifyRequest, reply: FastifyReply) => {}
  ) => {
    this.props.run = exec;
    return this.props;
  };
}

export default routeBuilder;
