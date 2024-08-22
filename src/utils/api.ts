import { readdirSync } from "fs";
import routesProps, { routesMethods } from "../types/routes";
import { join } from "path";
import Fastify, { FastifyInstance } from "fastify";
const helmet = require("@fastify/helmet")
import fastify = require("fastify");
import * as color from "yoctocolors-cjs";
import routeProvider from "./routeProvider";

class customApi {
  private host: string;
  private port: number;
  private api: FastifyInstance = fastify();
  prefix: string = "";

  constructor({host, port, prefix} : {host: string, port: number, prefix?: string}) {
    this.host = host;
    this.port = port;
    this.prefix = prefix ? prefix : "";

  }

  async start() {
    console.clear();
    try {
      this.loadRoutes();
      this.loadPlugins();
      this.init()

    } catch (error) {
      console.log(`  -  ${color.bgRed("Error:")} [ ${error} ]`);
    }
  }

  private loadRoutes() {
    console.log(color.green("  Loading routes\n"));
    const provider = new routeProvider();
    try {
      if (this.prefix && !this.prefix.startsWith("/"))
        throw "Prefix need start with /"
      provider.load(this)
    } catch (error) {
      throw error;
    }
  }

  async registerRoute(route: routesProps) {
    const { method, path, run } = route;

    try { 
      (this.api as any)[method](`${this.prefix ? path != "/" ? this.prefix + path : this.prefix : path}`, {}, run);
    } catch (error) {
      throw error
    }
  }

  private loadPlugins = async () => {
    this.api.register(require("@fastify/helmet"), {
      global: true,
      contentSecurityPolicy: {
        useDefaults: false,
        directives: {
          styleSrc: ["'unsafe-inline'"],
          defaultSrc: ["'self'"],
          connectSrc: ["'self'", "http:", "https:"],
          scriptSrc: ["'self'", "http://127.0.0.1:3000", "'unsafe-inline'"],
        },
      }
    });
  }


  private init = () => {
    this.api.listen({ port: this.port, host: this.host }, (err, address) => {
      if (err) {
        this.api.log.error(err);
        process.exit(1);
      }
      console.log(`\nApi rodando em ${address}`);
    });
  }
}

export default customApi;
