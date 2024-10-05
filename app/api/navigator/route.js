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
            title: `Nice to meet you, 5 things about myself`,
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
            title: `Learning from iconic Designers`,
            description: `Design culture grew up in me at the Politecnico di Milano, during workshops with Giovanni Anceschi, Bob Noorda, Giovanni Baule, Sebastiano Bagnara. The one-year experience at the Escola Elisava in Barcelona triggered my interest in technologies as creativity inspiration.`,
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
            title: `Working in digital design since 2000`,
            description: `I Started working with a small personal company, when digital communication had its starting spark for Italian companies. After 3 years, the friendship with Andrea, Michele and Nicola pushed me to look for more, and we decided to create a digital design company that has been designing and developing digital products for some of the most renowned Italian and international brands since 2003. `,
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
            title: `Music, just my little dream world`,
            description: `I love to create songs about people i'm fond of. I play bass, guitar, some choords in piano and I sing like a dog in the shower. Embarrassment is the prevailing feeling of those who listen to my music. Silence is the best reaction. If you love this kind of sensations you can listen to me on SoundCloud.`,
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
            title: `Family and barbecue, my life approach`,
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