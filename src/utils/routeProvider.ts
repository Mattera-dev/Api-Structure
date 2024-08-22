import { readdirSync } from "fs";
import { join } from "path";
import routesProps from "src/types/routes";
import * as color from "yoctocolors-cjs";
import customApi from "./api";
import { printRoute } from "./functions";

class routeProvider {
  routes: routesProps[] | [] = [];

  load = (app: customApi) => {
    try {
      const path = join(__dirname, "../routes");
      const routes = readdirSync(path, "utf-8");
      if (routes.length == 0) throw "No routes found on dir " + path;
      return this.register(app, routes);
    } catch (err) {
      throw err;
    }
  };

  private register(app: customApi, routes: string[]) {
    routes.forEach((route) => {
      try {
        const file = join("../routes/", route);
        const props: routesProps = require(file).default;
        app.registerRoute(props);
        printRoute(props, app)
      } catch (error) {
        console.log(color.redBright(`\n   -  Err in ${"routes/" + route}\n`));
      }
    });
  }
}

export default routeProvider;
