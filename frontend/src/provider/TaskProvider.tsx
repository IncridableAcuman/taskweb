import axiosInstance from "@/api/axiosInstance";
import type TaskContextType from "@/interface/taskContextType.interface";
import type ITask from "@/tasks/interface/task.interface"
import React, { createContext, useContext, useEffect, useState } from "react"
import { toast } from "sonner";


const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const taskList = async () => {
        try {
            const { data } = await axiosInstance.get("/tasks");
            setTasks(data);
        } catch (error) {
            console.log(error);
            toast.error("Error retrieving tasks");
        }
    }

    useEffect(() => {
        const fetch = () => {
            taskList();
        }
        fetch();
    }, [])

    return (
        <>
            <TaskContext.Provider value={{ tasks, setTasks,taskList }}>
                {children}
            </TaskContext.Provider>
        </>
    )

}

export const UseTasks = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error("UseTasks must be used within a TaskProvider");
    }
    return context;
}

