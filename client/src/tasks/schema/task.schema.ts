import {z} from 'zod';

const TaskSchema = z.object({
    title:z.string().min(3,"Title must be geater than 3 characters.")
    .max(50,"Title must be less than 50 characters."),
    description:z.string().min(5,"Description must be greater than 5 characters.")
    .max(150,"Description must be less than 150 characters."),
    status:z.string(),
    priority:z.string(),
    dueDate:z.string(),
    assignedTo:z.string().array(),
    tags:z.string().array(), 

});
export default TaskSchema;