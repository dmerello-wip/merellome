export const splitTextByLetter = (str) => {
    const words = str.split(' ');
    return words.map((word, wordIndex) => (
        <span className="word" key={`word-${wordIndex}`}>
            {word.split('').map((letter, letterIndex) => (
                <span className="letter" key={`letter-${letterIndex}`}>
                    {letter}
                </span>
            ))}
            {' '}
        </span>
    ));
};