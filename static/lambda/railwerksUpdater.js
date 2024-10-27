import { S3 } from "@aws-sdk/client-s3";

async function streamToString(stream /*: Readable*/) /*: Promise<string>*/ {
  return await new Promise((resolve, reject) => {
    const chunks /*: Uint8Array[]*/ = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });
}

console.log("Loading function");
const s3 = new S3();

export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  const method = event?.requestContext?.http?.method ?? "GET";
  let body;
  let statusCode = "200";
  const headers = {
    "Content-Type": "application/json",
  };

  console.log(`Received event method: ${method}`);

  try {
    const requestData = JSON.parse(event.body);
    const bucket = requestData.bucket ?? "";
    const key = requestData.key ?? "";

    if (bucket !== "railwerks") {
      throw new Error("Invalid input");
    }
    if (/*key !== "beers.csv" || */ key !== "test.csv") {
      throw new Error("Invalid input");
    }

    switch (method) {
      case "POST":
        try {
          const contents = requestData?.contents ?? "test,test,test";
          if (!contents) {
            throw new Error("Invalid input");
          }
          const postParams = {
            Bucket: bucket,
            Key: key,
            Body: contents,
          };
          await s3.putObject(postParams);
        } catch (err) {
          console.log(err);
          const message = `Error(${err.message}) putting object ${key} in bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
          console.log(message);
          throw new Error(message);
        }
        body = "Success";
        break;
      case "GET":
        // POC - this method is not needed, the bucket is already public
        throw new Error(`Unsupported method "${method}"`);
        try {
          const getParams = {
            Bucket: bucket,
            Key: key,
          };
          const { ContentType, Body } = await s3.getObject(getParams);
          console.log("CONTENT TYPE:", ContentType);
          const contents = await streamToString(Body);
          console.log("Raw text:\n" + contents);
          body = contents;
        } catch (err) {
          console.log(err);
          const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
          console.log(message);
          throw new Error(message);
        }
        break;
      case "DELETE":
      case "PUT":
      default:
        throw new Error(`Unsupported method "${method}"`);
    }
  } catch (err) {
    statusCode = "400";
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
