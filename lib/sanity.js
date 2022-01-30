import sanityClient from "@sanity/client";
export const client = sanityClient({
  projectId: "vec9behz",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skxD2rl7gmAlaHQLkBG1YGMYmU6ctgEfBavMObKom8hnWtv54mKKEtNTGm2OF1PUvfFE9KWitg2lWN2CEo5BQ48qKnDwxmmfqYg0qWsqQB56BwiEzmwZvwXCbKxOURDtqpDpUSnsFRxaHnGr3CMBrFO28WqBO6UB5vEcUDHmlGTw7xlqdssu",
  useCdn: false,
});
