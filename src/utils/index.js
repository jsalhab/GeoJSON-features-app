export const generateKey = (pre, index) => {
    return `${pre}_${index}_${new Date().getTime()}`;
}