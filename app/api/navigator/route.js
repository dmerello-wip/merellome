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
            title: ` 0!`,
            description: `description text`,
            color: `red`,
            rotation: 1.4
        },
        {
            id: 1,
            title: ` 1`,
            description: `description text`,
            color: `green`,
            rotation: 2.5
        },
        {
            id: 2,
            title: ` 2`,
            description: `description text`,
            color: `blue`,
            rotation: 3.8
        },
        {
            id: 3,
            title: ` 3`,
            description: `description text`,
            color: `orange`,
            rotation: 5.1
        },
        {
            id: 4,
            title: ` 4`,
            description: `description text`,
            color: `purple`,
            rotation: 5.1
        },
    ];

    return Response.json({ slides })
}