export const uniqueName = (...names: string[][]): string[] => {
    return [...new Set(names.flat())];
}
