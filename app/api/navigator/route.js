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
            title: `Nice to meet you, let me introduce myself`,
            description: `I'm <strong>Diego Merello</strong>, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
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
            title: `Iconic design masters molded my vision`,
            description: `Design culture grew up in me at the <strong>Politecnico di Milano</strong>, during workshops with Giovanni Anceschi, Bob Noorda, Giovanni Baule, Sebastiano Bagnara. The one-year experience at the <strong>Escola Elisava</strong> in Barcelona triggered my interest in <strong>technology as creativity inspiration</strong>.`,
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
            title: `I'm working in digital design since 2000`,
            description: `I started with my small personal company during Italy's digital communication boom. After 3 years, with Andrea, Michele and Nicola, we created <strong>WIP Italia</strong>, a <strong>digital design company</strong> that has been developing products for renowned Italian and international brands since 2003`,
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
            title: `Music is just my little dream world`,
            description: `I love to create songs about people i'm fond of. I play <strong>bass</strong>, <strong>guitar</strong>, some choords in piano and I sing like a dog in the shower. My music generates a serious sense of embarrassment in those who listen to it.<strong>Listen to me on SoundCloud</strong>.`,
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
            title: `Barbecue is probably my life approach`,
            description: `People, noise, music, the aroma of grilled meat and <strong>charcoal</strong>, plenty of <strong>beer</strong>, and countless children surround the establishment that, by God's grace, my <strong>family</strong> regularly frequents.`,
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