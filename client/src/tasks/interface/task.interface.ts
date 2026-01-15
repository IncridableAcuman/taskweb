export default interface ITask {
    id:string,
    title:string,
    description:string,
    status:string,
    priority:string,
    dueDate:string,
    assignedTo:string[],
    userId:string,
    subtasks:string[],
    createdAt:string,
    updatedAt:string
}
