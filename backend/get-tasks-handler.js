const { getTasksByUserId } = require("./services/task-service");

exports.handler = async (event) => {
  const userId = event?.queryStringParameters?.userId || "user-123";

  const userTasks = await getTasksByUserId(userId);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Tasks retrieved successfully",
      items: userTasks
    })
  };
};