import { Todo } from "../store/todoSlice"

const mockTodoList: Todo[] = [{
    id: '1',
    title: 'Study DSA for 2 hours',
    desc: 'Study properly for 2 hours without using phone. Solve at least 10 questions per each session.',
    completed: false, 
    createdTime: Date.now().toString()
},
{
    id: '2',
    title: 'Study System design for 2 hours',
    desc: 'Study properly for 2 hours without using phone. Solve at least 10 questions per each session.',
    completed: false, 
    createdTime: Date.now().toString()
},
{
    id: '3',
    title: 'Study Redux for 2 hours',
    desc: 'Study properly for 2 hours without using phone. Solve at least 10 questions per each session.',
    completed: false, 
    createdTime: Date.now().toString()
},
{
    id: '4',
    title: 'Study Javascript and Typescript for 2 hours',
    desc: 'Study properly for 2 hours without using phone. Solve at least 10 questions per each session.',
    completed: false, 
    createdTime: Date.now().toString()
}]

export const getTakeTodoListFromWeb = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockTodoList);
        }, 500)
    })
}
