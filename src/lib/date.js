export function formatDate(value) {
    const date = value instanceof Date ? value : new Date(value);
    return isNaN(date) ? "N/A" : date.toLocaleDateString();
}