export const logger = (store: any) => (next: any) => (action: any) => {
    console.log("My logger is working...")
    console.log(action.type, action.payload);
    return next(action);
}