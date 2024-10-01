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
            camera: {
                rotationX: -90,
                rotationY: 0,
                rotationZ: 0,
                positionX: -15,
                positionY: 60,
                positionZ: -3
            },
            color: 'yellow'
        },
        {
            id: 1,
            title: `Education`,
            description: `... i could have been a musician, but till now i play and write songs about friends, and stuff that happens`,
            camera: {
                rotationX: 0,
                rotationY: 153,
                rotationZ: 0,
                positionX: 38,
                positionY: 5,
                positionZ: -18
            },
            color: 'purple'
        },
        {
            id: 2,
            title: `work...`,
            description: `... i could have been a musician, but till now i play and write songs about friends, and stuff that happens`,
            camera: {
                rotationX: -12,
                rotationY: 5,
                rotationZ: -2,
                positionX: -1,
                positionY: 14,
                positionZ: 35
            },
            color: 'orange'
        },
        {
            id: 3,
            title: `music`,
            description: `I'm Diego Merello, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            camera: {
                rotationX: -26,
                rotationY: 1,
                rotationZ: -7,
                positionX: -19,
                positionY: 14,
                positionZ: 22
            },
            color: 'red'
        },
        {
            id: 4,
            title: `Family`,
            description: `I'm Diego Merello, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            camera: {
                rotationX: -168,
                rotationY: 15,
                rotationZ: -184,
                positionX: 10,
                positionY: 11,
                positionZ: -35
            },
            color: 'blue'
        },
    ];

    return Response.json({ slides })
}