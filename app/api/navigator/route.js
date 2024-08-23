export async function GET() {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'API-Key': process.env.DATA_API_KEY,
    //     },
    // })
    // const data = await res.json()

    const testContents = [];
    Array(5).fill().map((_, i) => {
        testContents.push({
            id: i,
            title: `title test ${i}`,
            description: `description lorem ipsum cum lode gaudio ${i}`
        });
    });

    const slides = testContents;

    return Response.json({ slides })
}