//wait ms
const Delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

RegisterCommand(
  "test",
  async (source: number, args: string[], rawCommand: string) => {
    const data: string = global.exports.data.testexp(); // sample call global exports
    console.log(data);
  },
  false
);
