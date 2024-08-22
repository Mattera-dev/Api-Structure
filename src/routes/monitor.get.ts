import { readHtml } from "../utils/functions";
import routesProps from "../types/routes";
import routeBuilder from "../utils/routeBuilder";
import * as os from "os"
import { join } from "path";

const route: routesProps = new routeBuilder()
  .setPath("/monitor")
  .setMethod("get")
  .setExec( async (req, reply) => {

    const { infos } = req.query as { infos: boolean};
    
    const ram = (process.memoryUsage().rss/1000000)
    const ramTotal = (os.totalmem())/1024/1024/1000 > 1 ? (((os.totalmem())/1024/1024/1000).toFixed(2) + " GB") : (((os.totalmem())/1024/1024).toFixed(2) + " MB")  
    
    const ramPercent = (process.memoryUsage().rss*100)/os.totalmem();
    
    if(infos){
        return reply.code(201).send({ ram,ramTotal, ramPercent});
    }
    
    const html = await readHtml("teste.html")
    return reply.type("text/html").code(200).send(html);
  });


export default route;
