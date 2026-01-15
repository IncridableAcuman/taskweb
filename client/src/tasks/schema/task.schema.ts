import { z } from 'zod';

const TaskSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(5).max(150).optional(),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  dueDate: z.date().optional(),
  assignedTo: z.array(z.string()).min(1, "At least one user required").max(5,"Assigned To must be less than 5"),
  subtasks:  z.array(z.string()).min(1, "At least one subtasks required").max(5,"Subtasks must be less than 5"),
})

export default TaskSchema;