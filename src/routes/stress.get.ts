import routesProps from "../types/routes";
import routeBuilder from "../utils/routeBuilder";

const route: routesProps = new routeBuilder()
  .setPath("/stress")
  .setMethod("get")
  .setExec((req, reply) => {
    const stressTest = (sizeInMB: number, durationInSeconds: number) => {
        console.log(`Starting RAM stress test with ${sizeInMB} MB for ${durationInSeconds} seconds...`);
    
        const objectSizeInKB = 1;
        const array = [];
        const sizeInKB = sizeInMB * 1024;
        const numObjects = Math.floor(sizeInKB / objectSizeInKB);
    
        for (let i = 0; i < numObjects; i++) {
            array.push({ data: 'x'.repeat(1024) });
        }
    
        console.log(`Allocated ${sizeInMB} MB of RAM. Keeping iat allocated for ${durationInSeconds} seconds...`);
    
        setTimeout(() => {
            console.log('Test completed. Releasing memory...');
            array.length = 0; // Libera a memória
            console.log('Memory released.');
        }, durationInSeconds * 1000);
    };


    stressTest(2048, 15);
    return reply.code(200).send("SIM");
  });

export default route