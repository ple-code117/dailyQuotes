function getRandomQuote() {
    const quotes = [
        "There is no Perfect version of you, but you can be the Best version of you - P.Le",
        "Quality is not an Act. It is a Habit. - Aristotle",
        "You have the power over your mind, not outside events. Realize this, and you will find strength. - Marcus Aurelius",
        "The most beautiful experience we can have been the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science. - Albert Einstein",
        "Life can be understood backward. But it must be lived forward. - Soren Kierkegaard",
        "The Happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);

    //Use the day of the week to select a quote 
    const selectedQuote = quotes[randomIndex];

    return selectedQuote;
}

const dailyQuote = getRandomQuote(); 
console.log(`Daily Quote: ${dailyQuote}`);

