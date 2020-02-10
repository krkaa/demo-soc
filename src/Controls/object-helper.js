
export let mapFilterObj = (itemObject, objectId, itemId, newObjectProps) => {
    itemObject.map(u => {
        if (u[itemId] === objectId) {
            return {...u, ...newObjectProps}
        }
        return u
    })
};