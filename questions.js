const allQuestions = {

   polity: [
    {
        question: "Who is the Constitutional Head of India?",
        answers: [
            { text: "President", correct: true },
            { text: "Prime Minister", correct: false },
            { text: "Chief Justice of India", correct: false },
            { text: "Vice President", correct: false }
        ]
    },
    {
        question: "Which Article abolishes Untouchability?",
        answers: [
            { text: "Article 15", correct: false },
            { text: "Article 17", correct: true },
            { text: "Article 19", correct: false },
            { text: "Article 21", correct: false }
        ]
    },
    {
        question: "The Directive Principles of State Policy are borrowed from the Constitution of:",
        answers: [
            { text: "USA", correct: false },
            { text: "Ireland", correct: true },
            { text: "Canada", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Which Fundamental Right is available only to Indian citizens?",
        answers: [
            { text: "Right to Equality", correct: false },
            { text: "Freedom of Speech and Expression", correct: true },
            { text: "Freedom of Religion", correct: false },
            { text: "Right to Life", correct: false }
        ]
    },
    {
        question: "The minimum age required to become the President of India is:",
        answers: [
            { text: "30 years", correct: false },
            { text: "35 years", correct: true },
            { text: "40 years", correct: false },
            { text: "45 years", correct: false }
        ]
    },
    {
        question: "Which Article deals with Constitutional Amendment?",
        answers: [
            { text: "Article 352", correct: false },
            { text: "Article 356", correct: false },
            { text: "Article 368", correct: true },
            { text: "Article 370", correct: false }
        ]
    },
    {
        question: "Who appoints the Governor of a State?",
        answers: [
            { text: "Prime Minister", correct: false },
            { text: "President", correct: true },
            { text: "Chief Minister", correct: false },
            { text: "Supreme Court", correct: false }
        ]
    },
    {
        question: "Which Schedule contains the Anti-Defection Law?",
        answers: [
            { text: "8th Schedule", correct: false },
            { text: "9th Schedule", correct: false },
            { text: "10th Schedule", correct: true },
            { text: "11th Schedule", correct: false }
        ]
    },
    {
        question: "The Finance Commission is constituted every:",
        answers: [
            { text: "3 years", correct: false },
            { text: "4 years", correct: false },
            { text: "5 years", correct: true },
            { text: "6 years", correct: false }
        ]
    },
    {
        question: "Who presides over a Joint Sitting of Parliament?",
        answers: [
            { text: "President", correct: false },
            { text: "Vice President", correct: false },
            { text: "Speaker of Lok Sabha", correct: true },
            { text: "Chief Justice of India", correct: false }
        ]
    },
    {
        question: "Fundamental Duties were added by which Constitutional Amendment?",
        answers: [
            { text: "42nd Amendment", correct: true },
            { text: "44th Amendment", correct: false },
            { text: "52nd Amendment", correct: false },
            { text: "61st Amendment", correct: false }
        ]
    },
    {
        question: "Rajya Sabha is a:",
        answers: [
            { text: "Temporary House", correct: false },
            { text: "Permanent House", correct: true },
            { text: "Money House", correct: false },
            { text: "Legislative Council", correct: false }
        ]
    },
    {
        question: "Judicial Review in India is borrowed from:",
        answers: [
            { text: "United Kingdom", correct: false },
            { text: "United States", correct: true },
            { text: "Canada", correct: false },
            { text: "France", correct: false }
        ]
    },
    {
        question: "Which Article provides the Right to Constitutional Remedies?",
        answers: [
            { text: "Article 19", correct: false },
            { text: "Article 21", correct: false },
            { text: "Article 32", correct: true },
            { text: "Article 51", correct: false }
        ]
    },
    {
        question: "Who is called the Guardian of the Constitution?",
        answers: [
            { text: "President", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Supreme Court", correct: true },
            { text: "Parliament", correct: false }
        ]
    },
    {
        question: "Voting age was reduced from 21 to 18 years by:",
        answers: [
            { text: "42nd Amendment", correct: false },
            { text: "44th Amendment", correct: false },
            { text: "61st Amendment", correct: true },
            { text: "73rd Amendment", correct: false }
        ]
    },
    {
        question: "The Election Commission of India is mentioned under:",
        answers: [
            { text: "Article 280", correct: false },
            { text: "Article 324", correct: true },
            { text: "Article 356", correct: false },
            { text: "Article 368", correct: false }
        ]
    },
    {
        question: "National Emergency is declared under:",
        answers: [
            { text: "Article 352", correct: true },
            { text: "Article 356", correct: false },
            { text: "Article 360", correct: false },
            { text: "Article 370", correct: false }
        ]
    },
    {
        question: "Panchayati Raj Institutions got Constitutional Status through:",
        answers: [
            { text: "52nd Amendment", correct: false },
            { text: "61st Amendment", correct: false },
            { text: "73rd Amendment", correct: true },
            { text: "74th Amendment", correct: false }
        ]
    },
    {
        question: "The Attorney General of India is appointed by:",
        answers: [
            { text: "Prime Minister", correct: false },
            { text: "President", correct: true },
            { text: "Chief Justice of India", correct: false },
            { text: "Parliament", correct: false }
        ]
    }
],

   history: [
    {
        question: "Who founded the Maurya Empire?",
        answers: [
            { text: "Chandragupta Maurya", correct: true },
            { text: "Ashoka", correct: false },
            { text: "Harsha", correct: false },
            { text: "Samudragupta", correct: false }
        ]
    },
    {
        question: "Who was the founder of the Mughal Empire in India?",
        answers: [
            { text: "Akbar", correct: false },
            { text: "Babur", correct: true },
            { text: "Humayun", correct: false },
            { text: "Sher Shah Suri", correct: false }
        ]
    },
    {
        question: "The Battle of Plassey was fought in:",
        answers: [
            { text: "1757", correct: true },
            { text: "1761", correct: false },
            { text: "1764", correct: false },
            { text: "1857", correct: false }
        ]
    },
    {
        question: "Who gave the slogan 'Do or Die'?",
        answers: [
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "Who was known as the Iron Man of India?",
        answers: [
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: true },
            { text: "Bhagat Singh", correct: false },
            { text: "Jawaharlal Nehru", correct: false }
        ]
    },
    {
        question: "The First Battle of Panipat was fought in:",
        answers: [
            { text: "1526", correct: true },
            { text: "1556", correct: false },
            { text: "1761", correct: false },
            { text: "1857", correct: false }
        ]
    },
    {
        question: "Who built the Qutub Minar?",
        answers: [
            { text: "Iltutmish", correct: false },
            { text: "Qutb-ud-din Aibak", correct: true },
            { text: "Alauddin Khilji", correct: false },
            { text: "Balban", correct: false }
        ]
    },
    {
        question: "The Revolt of 1857 started from:",
        answers: [
            { text: "Delhi", correct: false },
            { text: "Kanpur", correct: false },
            { text: "Meerut", correct: true },
            { text: "Lucknow", correct: false }
        ]
    },
    {
        question: "Who wrote the book 'Arthashastra'?",
        answers: [
            { text: "Kalidasa", correct: false },
            { text: "Chanakya", correct: true },
            { text: "Banabhatta", correct: false },
            { text: "Panini", correct: false }
        ]
    },
    {
        question: "Ajanta Caves are located in:",
        answers: [
            { text: "Maharashtra", correct: true },
            { text: "Madhya Pradesh", correct: false },
            { text: "Odisha", correct: false },
            { text: "Karnataka", correct: false }
        ]
    },
    {
        question: "Who was the last Governor-General of independent India?",
        answers: [
            { text: "Lord Mountbatten", correct: false },
            { text: "C. Rajagopalachari", correct: true },
            { text: "Wavell", correct: false },
            { text: "Linlithgow", correct: false }
        ]
    },
    {
        question: "The Quit India Movement was launched in:",
        answers: [
            { text: "1930", correct: false },
            { text: "1942", correct: true },
            { text: "1947", correct: false },
            { text: "1920", correct: false }
        ]
    },
    {
        question: "Who founded the Gupta Empire?",
        answers: [
            { text: "Samudragupta", correct: false },
            { text: "Chandragupta I", correct: true },
            { text: "Skandagupta", correct: false },
            { text: "Kumaragupta", correct: false }
        ]
    },
    {
        question: "The famous Sun Temple is located at:",
        answers: [
            { text: "Khajuraho", correct: false },
            { text: "Konark", correct: true },
            { text: "Mahabalipuram", correct: false },
            { text: "Madurai", correct: false }
        ]
    },
    {
        question: "Who was the founder of the Sikh religion?",
        answers: [
            { text: "Guru Gobind Singh", correct: false },
            { text: "Guru Nanak", correct: true },
            { text: "Guru Arjan Dev", correct: false },
            { text: "Guru Tegh Bahadur", correct: false }
        ]
    },
    {
        question: "The Indian National Congress was founded in:",
        answers: [
            { text: "1885", correct: true },
            { text: "1905", correct: false },
            { text: "1919", correct: false },
            { text: "1942", correct: false }
        ]
    },
    {
        question: "Who presided over the first session of the Indian National Congress?",
        answers: [
            { text: "A.O. Hume", correct: false },
            { text: "W.C. Bonnerjee", correct: true },
            { text: "Dadabhai Naoroji", correct: false },
            { text: "B.G. Tilak", correct: false }
        ]
    },
    {
        question: "The capital of the Vijayanagara Empire was:",
        answers: [
            { text: "Hampi", correct: true },
            { text: "Madurai", correct: false },
            { text: "Warangal", correct: false },
            { text: "Mysore", correct: false }
        ]
    },
    {
        question: "Who gave the slogan 'Jai Hind'?",
        answers: [
            { text: "Bhagat Singh", correct: false },
            { text: "Subhas Chandra Bose", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: false }
        ]
    },
    {
        question: "The Indus Valley Civilization was discovered in:",
        answers: [
            { text: "1921", correct: true },
            { text: "1911", correct: false },
            { text: "1935", correct: false },
            { text: "1947", correct: false }
        ]
    }
],

    geography: [
        {
            question: "Which is the largest desert in India?",
            answers: [
                { text: "Thar Desert", correct: true },
                { text: "Sahara Desert", correct: false },
                { text: "Gobi Desert", correct: false },
                { text: "Kalahari Desert", correct: false }
            ]
        }
    ],

    economy: [
        {
            question: "RBI stands for?",
            answers: [
                { text: "Reserve Bank of India", correct: true },
                { text: "Rural Bank of India", correct: false },
                { text: "Revenue Bank of India", correct: false },
                { text: "Reserve Board of India", correct: false }
            ]
        }
    ],

    science: [
        {
            question: "Water boils at?",
            answers: [
                { text: "100°C", correct: true },
                { text: "90°C", correct: false },
                { text: "80°C", correct: false },
                { text: "120°C", correct: false }
            ]
        }
    ],

    environment: [
        {
            question: "Which gas causes global warming the most?",
            answers: [
                { text: "Carbon Dioxide", correct: true },
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false }
            ]
        }
    ],

    current: [
        {
            question: "What is India's capital city?",
            answers: [
                { text: "New Delhi", correct: true },
                { text: "Mumbai", correct: false },
                { text: "Kolkata", correct: false },
                { text: "Chennai", correct: false }
            ]
        }
    ]

};
