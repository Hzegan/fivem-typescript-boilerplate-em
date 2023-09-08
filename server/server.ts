import { init } from "./init"; // import another ts file

//wait ms
const Delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

RegisterCommand(
  "init",
  async (source: number, args: string[], rawCommand: string) => {
    Delay(100);
    console.log(init);
    console.log("asdadasd");
  },
  false
);
