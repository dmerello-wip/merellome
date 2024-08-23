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
            title: `Hi!`,
            description: `My name is Diego Merello, and i'm just trying to use some 3d technologies in relation to scroll animations techineques.`,
            color: `red`
        },
        {
            id: 1,
            title: `Design`,
            description: `My name is Diego Merello, and i'm just trying to use some 3d technologies in relation to scroll animations techineques.`,
            color: `green`
        },
        {
            id: 2,
            title: `Music`,
            description: `My name is Diego Merello, and i'm just trying to use some 3d technologies in relation to scroll animations techineques.`,
            color: `blue`
        },
        {
            id: 3,
            title: `Education`,
            description: `My name is Diego Merello, and i'm just trying to use some 3d technologies in relation to scroll animations techineques.`,
            color: `orange`
        },
        {
            id: 4,
            title: `Company`,
            description: `My name is Diego Merello, and i'm just trying to use some 3d technologies in relation to scroll animations techineques.`,
            color: `purple`
        },
    ];

    return Response.json({ slides })
}