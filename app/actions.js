'use server'

import { revalidateTag } from 'next/cache'

export async function revalidateNavigator() {
    revalidateTag('navigator')
}

// export async function makeFirstSorting(itemsArr, selectedIndex) {
//     const newitemsArr = [
//         itemsArr[selectedIndex],               // Put selected card first
//         ...itemsArr.slice(0, selectedIndex),   // Add all itemsArr before selected
//         ...itemsArr.slice(selectedIndex + 1)   // Add all itemsArr after selected
//     ];
//     return newitemsArr
// }