// @ts-ignore

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      ENV: string;
      PORT: string;
      POKEDATA_SERVER_IP: string;
    }
  }
}
