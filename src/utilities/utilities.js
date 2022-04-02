export const generarId = () => {
    const a = Math.random().toString(36).substring(15);
    const b = Date.now().toString(36);
    return a+b; 
}