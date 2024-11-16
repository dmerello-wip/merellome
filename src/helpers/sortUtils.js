export const makeFirstSorting = function (itemsArr, selectedIndex) {
    return [
        itemsArr[selectedIndex],               // Put selected card first
        ...itemsArr.slice(0, selectedIndex),   // Add all itemsArr before selected
        ...itemsArr.slice(selectedIndex + 1)   // Add all itemsArr after selected
    ];
}