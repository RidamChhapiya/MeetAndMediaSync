import { Storage } from "@google-cloud/storage";
import path from "path";

// const storage = new Storage({
//   keyFilename: path.join(__dirname, process.env.GCP_SERVICE_KEY_PATH ?? ""), 
//   projectId: process.env.GCP_PROJECT_ID,
// });
const storage = new Storage();
const bucketName = process.env.GCP_BUCKET_NAME ?? "cloudcapture-bucket";

export { storage, bucketName };
