import routesProps from "src/types/routes";
import * as color from "yoctocolors-cjs"
import customApi from "./api";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const printRoute = (props: routesProps, app: customApi) => {
    const spaces = 12
    console.log(color.yellowBright(
        `   -  '${app.prefix ? props.path != "/" ? app.prefix + props.path  : app.prefix : props.path
        }'${spaces - props.path.length < 1 ? "" : " ".repeat(spaces - props.path.length)}  >  [${props.method.toUpperCase()}]`))
}

const readHtml = (file:string ) => {
    const filtro = readdirSync(join(__dirname, "../pages"), "utf-8").filter(hfile => hfile == file);
    if(filtro.length != 1) 
        return false;
    const html = readFileSync(join(__dirname, `../pages/${filtro[0]}`), "utf-8" )
    if (html.length != 0) 
        return html  
}

export {printRoute, readHtml}