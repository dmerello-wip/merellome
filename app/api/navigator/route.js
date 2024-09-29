export async function GET() {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'API-Key': process.env.DATA_API_KEY,
    //     },
    // })
    // const data = await res.json()

    // const testContents = [];
    // Array(5).fill().map((_, i) => {
    //     testContents.push({
    //         id: i,
    //         title: `my big title title ${i}`,
    //         description: `dasads lorem ipsum cum lode gaudio description lorem ipsum cum lode gaudio description lorem ipsum cum lode gaudio description lorem ipsum cum lode gaudio ${i}`
    //     });
    // });


    const slides = [
        {
            id: 0,
            title: `Hello, nice to meet you`,
            description: `I'm Diego Merello, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            cameraRotation: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 5, z: 22 },
            color: 'yellow'
        },
        {
            id: 1,
            title: `Maybe in another life...`,
            description: `... i could have been a musician, but till now i play and write songs about friends, and stuff that happens`,
            cameraRotation: { x: 0, y: -0.5, z: 0 },
            cameraPosition: { x: -1, y: 5, z: 22 },
            color: 'orange'
        },
        {
            id: 2,
            title: `Hello, nice to meet you`,
            description: `I'm Diego Merello, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            cameraRotation: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 5, z: 22 },
            color: 'red'
        },
        {
            id: 3,
            title: `Maybe in another life...`,
            description: `... i could have been a musician, but till now i play and write songs about friends, and stuff that happens`,
            cameraRotation: { x: 0, y: 0.5, z: 0 },
            cameraPosition: { x: 1, y: 5, z: 22 },
            color: 'purple'
        },
        {
            id: 4,
            title: `Hello, nice to meet you`,
            description: `I'm Diego Merello, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            cameraRotation: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 5, z: 22 },
            color: 'blue'
        },
    ];

    return Response.json({ slides })
}