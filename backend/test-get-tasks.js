const { handler } = require("./get-tasks-handler");

const mockEvent = {
  queryStringParameters: {
    userId: "user-123"
  }
};

async function runTest() {
  const response = await handler(mockEvent);

  console.log("Status Code:", response.statusCode);
  console.log("Headers:", response.headers);
  console.log("Body:");
  console.log(JSON.stringify(JSON.parse(response.body), null, 2));
}

runTest();