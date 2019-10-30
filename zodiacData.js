
const zodiacData = [{
    id: 1,
    name: "Aquarius",
    element: "air",
    compat: "Leo, Sagittarius",
    img: "zodiac_icons/png/aquarius-astrological-sign-symbol.png",
    color: "#ffffff", 
    backgroundColor: "#c0c0c0", // silver 
    luckyNum: "4, 7, 11, 22, 19",
    description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.",
    dateRange: "January 20 - February 18",
}, {
    id: 2,
    name: "Pisces",
    element: "water",
    compat: "Virgo, Taurus",
    img: "zodiac_icons/png/pisces-astrological-sign.png",
    color: "#ffffff",
    backgroundColor: "#c8a2c8", // lilac
    luckyNum: "3, 9, 12, 15, 18, 24",
    description: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent. Neptune is connected to music, so Pisces reveal music preferences in the earliest stages of life. They are generous, compassionate and extremely faithful and caring.",
    dateRange: "February 19 - March 20",
}, {
    id: 3,
    name: "Aries",
    element: "fire",
    compat: "Libra, Leo",
    img: "zodiac_icons/png/aries-sign.png",
    color: "#ffffff",
    backgroundColor: "#c41e3a", // cardinal
    luckyNum: "1, 8, 17",
    description: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well.",
    dateRange: "March 21 - April 19",
}, {
    id: 4,
    name: "Taurus",
    element: "earth",
    compat: "Scorpio, Cancer",
    img: "zodiac_icons/png/taurus-astrological-sign-symbol-1.png",
    color: "#ffffff",
    backgroundColor: "#ffc0cb", // pink
    luckyNum: "2, 6, 9, 12, 24",
    description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.",
    dateRange: "April 20 - May 20",
}, {
    id: 5,
    name: "Gemini",
    element: "air",
    compat: "Sagittarius, Aquarius",
    img: "zodiac_icons/png/gemini-zodiac-sign-symbol.png",
    color: "#ffffff",
    backgroundColor: "#ffbf00", // amber
    luckyNum: "5, 7, 14, 23",
    description: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.",
    dateRange: "May 21 - June 20",
}, {
    id: 6,
    name: "Cancer",
    element: "water",
    compat: "Capricorn, Taurus",
    img: "zodiac_icons/png/cancer-zodiac-sign-symbol.png",
    color: "#ffffff",// white
    backgroundColor: "#808080", //gray
    luckyNum: "2, 3, 15, 20",
    description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering.",
    dateRange: "June 21 - July 22",
}, {
    id: 7,
    name: "Leo",
    element: "fire",
    compat: "Aquarius, Gemini",
    img: "zodiac_icons/png/leo-sign.png",
    color: "#ffffff",
    backgroundColor: "#ffa500", //orange
    luckyNum: "1, 3, 10, 19",
    description: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their 'king of the jungle' status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier",
    dateRange: "July 23 - August 22",
}, {
    id: 8,
    name: "Virgo",
    element: "earth",
    compat: "Pisces, Cancer",
    img: "zodiac_icons/png/virgo-astrological-symbol-sign-1.png",
    color: "#ffffff",
    backgroundColor: "#A67B5B", // french beige
    luckyNum: "5, 14, 15, 23, 32",
    description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.",
    dateRange: "August 23 – September 22",
}, {
    id: 9,
    name: "Libra",
    element: "air",
    compat: "Aries, Sagittarius",
    img: "zodiac_icons/png/libra-sign.png",
    color: "#ffffff",
    backgroundColor: "#50c878", //emerald
    luckyNum: "4, 6, 13, 15, 24",
    description: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible",
    dateRange: "September 23 - October 22",
}, {
    id: 10,
    name: "Scorpio",
    element: "water",
    compat: "Taurus, Cancer",
    img: "zodiac_icons/png/scorpion-astrological-sign.png",
    color: "#ffffff",
    backgroundColor: "#b7410e", //rust
    luckyNum: "8, 11, 18, 22",
    description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.",
    dateRange: "October 23 - November 21",
}, {
    id: 11,
    name: "Sagittarius",
    element: "fire",
    compat: "Gemini, Aries",
    img: "zodiac_icons/png/sagittarius-zodiac-symbol.png",
    color: "#ffffff",
    backgroundColor: "#800080", // purple
    luckyNum: "3, 7, 9, 12, 21",
    description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.",
    dateRange: "November 22 - December 21",
}, {
    id: 12,
    name: "Capricon",
    element: "earth",
    compat: "Taurus, Cancer",
    img: "zodiac_icons/png/capricorn-sign.png",
    color: "#ffffff",
    backgroundColor: "#414A4C", // outer space
    luckyNum: "4, 8, 13, 22",
    description: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise.",
    dateRange: " December 22 - January 19",
}];
