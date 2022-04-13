interface Param { [key: string]: string; }
interface Result { [key: string]: string[]; }

export const groupByOwner = (data: Param): Result => {
    let result: Result = {};
    
    Object.entries(data).forEach(([fileName, name]) => {
        if (!result[name]) {
            result[name] = [];
        }
        result[name].push(fileName);
    })

    return result;
}