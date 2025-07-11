-- MongoDB doesn't use SQL, but here are the equivalent MongoDB commands
-- Run these in MongoDB shell or MongoDB Compass

-- Create database
use my-workspace;

-- Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.notes.createIndex({ "userId": 1, "updatedAt": -1 });
db.tasks.createIndex({ "userId": 1, "createdAt": -1 });
db.tasks.createIndex({ "userId": 1, "completed": 1 });

-- Optional: Create sample data for testing
db.users.insertOne({
  name: "Test User",
  email: "test@example.com",
  password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uIf6", // "password123"
  createdAt: new Date(),
  updatedAt: new Date()
});
