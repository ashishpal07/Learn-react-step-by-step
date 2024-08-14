import express = require("express");
const router = express.Router();
import taskController = require("../controllers/task");
import { authenticate, isAdmin } from "../auth/authMiddleware";

router.post("/", authenticate,  taskController.createTask);
router.get("/", authenticate, taskController.getTasks);
router.get("/:id", authenticate, isAdmin, taskController.getSingleTask);
router.put("/:id", authenticate, taskController.updateTask);
router.delete("/:id", authenticate, taskController.deleteTask);
router.get("/", authenticate, isAdmin, taskController.filterTasks);
router.get("/", authenticate, isAdmin, taskController.searchTasks);

export default router;