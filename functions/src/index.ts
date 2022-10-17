import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const createCharacter = functions.https.onRequest(
  (request, response) => {
    if (request.method !== "POST") return;

    functions.logger.info("Create Character: ", request.body);

    console.log({ request: request.body });

    // functions.firestore.document()

    response.send("Created");
  }
);
