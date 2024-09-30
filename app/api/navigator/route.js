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
                positionX: -4,
                positionY: 28,
                positionZ: -2
            },
            color: 'yellow'
        },
        {
            id: 1,
            title: `Education`,
            description: `... i could have been a musician, but till now i play and write songs about friends, and stuff that happens`,
            camera: {
                rotationX: 16,
                rotationY: 146,
                rotationZ: -10,
                positionX: 19,
                positionY: 4,
                positionZ: -6
            },
            color: 'purple'
        },
        {
            id: 2,
            title: `work...`,
            description: `... i could have been a musician, but till now i play and write songs about friends, and stuff that happens`,
            camera: {
                rotationX: -9,
                rotationY: -13,
                rotationZ: -3.6,
                positionX: 2.2,
                positionY: 5.3,
                positionZ: 10.5
            },
            color: 'orange'
        },
        {
            id: 3,
            title: `music`,
            description: `I'm Diego Merello, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            camera: {
                rotationX: -22,
                rotationY: -1,
                rotationZ: -0,
                positionX: -5,
                positionY: 6,
                positionZ: 10
            },
            color: 'red'
        },
        {
            id: 4,
            title: `Family`,
            description: `I'm Diego Merello, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            camera: {
                rotationX: 19,
                rotationY: -194,
                rotationZ: -7,
                positionX: 8.2,
                positionY: 5.5,
                positionZ: -14.3
            },
            color: 'blue'
        },
    ];

    return Response.json({ slides })
}