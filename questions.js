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
                { text: "Akbar", correct: false },
                { text: "Harsha", correct: false }
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
