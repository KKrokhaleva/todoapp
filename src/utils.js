
export const stringifyHistory = (historyItem) => {
    const { field, action, prevValue, currentValue, appliedAt } = historyItem;
    switch (action) {
        case "create" :{
            return `Created task with title “${currentValue}”`;
        }
        case "edit" :{
            return `Changed task description from “${prevValue}” to “${currentValue}”`;
        }
    }
    return "Unknown action";
}

