import { z } from 'zod';

const TaskSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(5).max(150).optional(),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  dueDate: z.date().optional(),
})

export default TaskSchema;