var quotes = [
    { phrase: "\"Don't be afraid to give up the good to go for the great.\"", person: "-- John D. Rockefeller" },
    { phrase: "\"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\"", person: "-- Roy T. Bennett" },
    { phrase: "\"Don't watch the clock; do what it does. Keep going.\"", person: "-- Sam Levenson" },
    { phrase: "\"I find that the harder I work, the more luck I seem to have.\"", person: "-- Thomas Jefferson" },
    { phrase: "\"It does not matter how slowly you go, as long as you do not stop.\"", person: "-- Confucius" },
    { phrase: "\"Leadership is not about being in charge. It is about taking care of those in your charge.\"", person: "-- Simon Sinek" },
    { phrase: "\"Leadership is not about being in control. It is about creating conditions for others to succeed.\"", person: "-- Greg Smith" },
    { phrase: "\"Leadership is the art of giving people a platform for spreading ideas that work.\"", person: "-- Seth Godin" },
    { phrase: "\"Leadership is the capacity to translate vision into reality.\"", person: "-- Warren Bennis" },
    { phrase: "\"Opportunities don't happen, you create them.\"", person: "-- Chris Grosser" },
    { phrase: "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"", person: "-- Winston Churchill" },
    { phrase: "\"Success is not how high you have climbed, but how you make a positive difference to the world.\"", person: "-- Roy T. Bennett" },
    { phrase: "\"Success is not in what you have, but who you are.\"", person: "-- Bo Bennett" },
    { phrase: "\"Success is not the absence of failure; it's the persistence through failure.\"", person: "-- Aisha Tyler" },
    { phrase: "\"Success is not the result of spontaneous combustion. You must set yourself on fire.\"", person: "-- Arnold H. Glasow" },
    { phrase: "\"Success is the sum of small efforts, repeated day in and day out.\"", person: "-- Robert Collier" },
    { phrase: "\"Success is walking from failure to failure with no loss of enthusiasm.\"", person: "-- Winston S. Churchill" },
    { phrase: "\"Success usually comes to those who are too busy to be looking for it.\"", person: "-- Henry David Thoreau" },
    { phrase: "\"The best revenge is massive success.\"", person: "-- Frank Sinatra" },
    { phrase: "\"The best time to plant a tree was 20 years ago. The second best time is now.\"", person: "-- Chinese Proverb" },
    { phrase: "\"The function of leadership is to produce more leaders, not more followers.\"", person: "-- Ralph Nader" },
    { phrase: "\"The future belongs to those who believe in the beauty of their dreams.\"", person: "-- Eleanor Roosevelt" },
    { phrase: "\"The greatest leader is not necessarily the one who does the greatest things.\"", person: "-- Ronald Reagan" },
    { phrase: "\"The only limit to our realization of tomorrow will be our doubts of today.\"", person: "-- Franklin D. Roosevelt" },
    { phrase: "\"The only limit to your impact is your imagination and commitment.\"", person: "-- Tony Robbins" },
    { phrase: "\"The only person you are destined to become is the person you decide to be.\"", person: "-- Ralph Waldo Emerson" },
    { phrase: "\"The only place where success comes before work is in the dictionary.\"", person: "-- Vidal Sassoon" },
    { phrase: "\"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.\"", person: "-- Jordan Belfort" },
    { phrase: "\"The only way to achieve the impossible is to believe it is possible.\"", person: "-- Charles Kingsleigh" },
    { phrase: "\"The only way to do great work is to love what you do.\"", person: "-- Steve Jobs" },
    { phrase: "\"The road to success and the road to failure are almost exactly the same.\"", person: "-- Colin R. Davis" },
    { phrase: "\"The secret of success is to do the common things uncommonly well.\"", person: "-- John D. Rockefeller Jr." },
    { phrase: "\"You are never too old to set another goal or to dream a new dream.\"", person: "-- C.S. Lewis" },
    { phrase: "\"You miss 100% of the shots you don't take.\"", person: "-- Wayne Gretzky" }
]

var phrase = document.getElementById("phrase")

var person = document.getElementById("person")

var noRepeat

function generate() {
    var randomNumber = Math.floor(Math.random() * quotes.length)
    if (randomNumber != noRepeat) {
        phrase.innerHTML = quotes[randomNumber].phrase
        person.innerHTML = quotes[randomNumber].person
    }
    else {
        generate()
    }
    noRepeat = randomNumber
    console.log(noRepeat); // optional for debug of no repeated numbers
}
