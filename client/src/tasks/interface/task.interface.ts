export default interface ITask {
    id:string,
    title:string,
    description:string,
    status:string,
    priority:string,
    dueDate:string,
    assignedTo:string[],
    userId:string,
    tags:string[],
    createdAt:string,
    updatedAt:string
}
