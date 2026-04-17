const { mockTasks } = require("../data/mock-tasks");

async function getTasksByUserId(userId) {
  return mockTasks.filter((task) => task.userId === userId);
}

module.exports = {
  getTasksByUserId
};