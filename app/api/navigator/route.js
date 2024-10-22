export async function GET() {
    const slides = [
        {
            id: 0,
            title: `Hey there, let me introduce myself`,
            description: `I'm <strong>Diego Merello</strong>, proud father, humble husband, passionate designer, wanna be musician, recidivist griller`,
            camera: {
                desktop: {
                    rotationX: -90,
                    rotationY: 0,
                    rotationZ: 0,
                    positionX: -15,
                    positionY: 60,
                    positionZ: -3
                },
                mobile: {
                    rotationX: -90,
                    rotationY: 0,
                    rotationZ: 0,
                    positionX: -5,
                    positionY: 80,
                    positionZ: 8
                }
            },
            color: 'yellow'
        },
        {
            id: 1,
            title: `Iconic design masters molded my vision`,
            description: `Design culture grew up in me at the <strong>Politecnico di Milano</strong>, during workshops with Giovanni Anceschi, Bob Noorda, Giovanni Baule, Sebastiano Bagnara. The one-year experience at the <strong>Escola Elisava</strong> in Barcelona triggered my interest in <strong>technology as creativity inspiration</strong>.`,
            camera: {
                desktop: {
                    rotationX: 0,
                    rotationY: 153,
                    rotationZ: 0,
                    positionX: 38,
                    positionY: 5,
                    positionZ: -18
                },
                mobile: {
                    rotationX: 5,
                    rotationY: 150,
                    rotationZ: -2,
                    positionX: 40,
                    positionY: 5,
                    positionZ: -35
                }
            },
            color: 'purple'
        },
        {
            id: 2,
            title: `Working in digital design since 2000`,
            description: `I started with my small personal company during Italy's digital communication boom. After 3 years, with Andrea, Michele and Nicola, we created <strong>WIP Italia</strong>, a <strong>digital design company</strong> that has been developing products for renowned Italian and international brands since 2003`,
            camera: {
                desktop: {
                    rotationX: -12,
                    rotationY: 5,
                    rotationZ: -2,
                    positionX: -1,
                    positionY: 14,
                    positionZ: 35
                },
                mobile: {
                    rotationX: -32,
                    rotationY: 5,
                    rotationZ: -2,
                    positionX: 5,
                    positionY: 20,
                    positionZ: 35
                }
            },
            color: 'orange'
        },
        {
            id: 3,
            title: `Music is just my little dream world`,
            description: `I love to create songs about people i'm fond of. I play <strong>bass</strong>, <strong>guitar</strong>, some choords in piano and I sing like a dog in the shower. My music generates a serious sense of embarrassment in those who listen to it.<strong>Listen to me on SoundCloud</strong>.`,
            camera: {
                desktop: {
                    rotationX: -26,
                    rotationY: 1,
                    rotationZ: -7,
                    positionX: -19,
                    positionY: 14,
                    positionZ: 22
                },
                mobile: {
                    rotationX: -26,
                    rotationY: 1,
                    rotationZ: -7,
                    positionX: -12,
                    positionY: 14,
                    positionZ: 22
                }
            },
            color: 'red'
        },
        {
            id: 4,
            title: `Barbecue is probably my life approach`,
            description: `People, noise, music, the aroma of grilled meat and <strong>charcoal</strong>, plenty of <strong>beer</strong>, and countless children surround the establishment that, by God's grace, my <strong>family</strong> regularly frequents.`,
            camera: {
                desktop: {
                    rotationX: -168,
                    rotationY: 15,
                    rotationZ: -184,
                    positionX: 10,
                    positionY: 11,
                    positionZ: -35
                },
                mobile: {
                    rotationX: -158,
                    rotationY: 15,
                    rotationZ: -184,
                    positionX: 6,
                    positionY: 12,
                    positionZ: -45
                }
            },
            color: 'blue'
        },
    ];

    return Response.json({ slides })
}