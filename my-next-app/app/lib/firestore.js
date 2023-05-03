
import { initFirestore } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { client_email, private_key, project_id } from "../service_account";

export const firestore = initFirestore({
  credential: cert({
    projectId: project_id,
    clientEmail: client_email,
    privateKey: private_key,
  }),
});