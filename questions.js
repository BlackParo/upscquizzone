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
        question: "Which is the largest continent in the world?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "The Tropic of Cancer passes through how many Indian states?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "Which is the longest river in India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Godavari", correct: false },
            { text: "Ganga", correct: true },
            { text: "Brahmaputra", correct: false }
        ]
    },
    {
        question: "Which is the highest mountain peak in India?",
        answers: [
            { text: "Kanchenjunga", correct: true },
            { text: "Nanda Devi", correct: false },
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: false }
        ]
    },
    {
        question: "Which plateau is known as the Mineral Storehouse of India?",
        answers: [
            { text: "Malwa Plateau", correct: false },
            { text: "Deccan Plateau", correct: false },
            { text: "Chota Nagpur Plateau", correct: true },
            { text: "Shillong Plateau", correct: false }
        ]
    },
    {
        question: "Which river is known as the 'Dakshin Ganga'?",
        answers: [
            { text: "Krishna", correct: false },
            { text: "Godavari", correct: true },
            { text: "Kaveri", correct: false },
            { text: "Mahanadi", correct: false }
        ]
    },
    {
        question: "The Thar Desert is mainly located in which state?",
        answers: [
            { text: "Gujarat", correct: false },
            { text: "Punjab", correct: false },
            { text: "Rajasthan", correct: true },
            { text: "Haryana", correct: false }
        ]
    },
    {
        question: "Which is the deepest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which Indian state has the longest coastline?",
        answers: [
            { text: "Tamil Nadu", correct: false },
            { text: "Andhra Pradesh", correct: false },
            { text: "Gujarat", correct: true },
            { text: "Maharashtra", correct: false }
        ]
    },
    {
        question: "The Sundarbans Delta is formed by which rivers?",
        answers: [
            { text: "Godavari and Krishna", correct: false },
            { text: "Ganga and Brahmaputra", correct: true },
            { text: "Narmada and Tapi", correct: false },
            { text: "Mahanadi and Godavari", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent?",
        answers: [
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
            { text: "Antarctica", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        question: "Which river does NOT originate in India?",
        answers: [
            { text: "Godavari", correct: false },
            { text: "Krishna", correct: false },
            { text: "Brahmaputra", correct: true },
            { text: "Kaveri", correct: false }
        ]
    },
    {
        question: "The largest freshwater lake in India is:",
        answers: [
            { text: "Dal Lake", correct: false },
            { text: "Wular Lake", correct: true },
            { text: "Loktak Lake", correct: false },
            { text: "Chilika Lake", correct: false }
        ]
    },
    {
        question: "Which state is known as the 'Land of Rising Sun' in India?",
        answers: [
            { text: "Nagaland", correct: false },
            { text: "Assam", correct: false },
            { text: "Arunachal Pradesh", correct: true },
            { text: "Sikkim", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Thar Desert", correct: false },
            { text: "Sahara Desert", correct: false },
            { text: "Antarctic Desert", correct: true },
            { text: "Arabian Desert", correct: false }
        ]
    },
    {
        question: "The Palk Strait separates India from:",
        answers: [
            { text: "Bangladesh", correct: false },
            { text: "Sri Lanka", correct: true },
            { text: "Myanmar", correct: false },
            { text: "Maldives", correct: false }
        ]
    },
    {
        question: "Which is the highest waterfall in India?",
        answers: [
            { text: "Jog Falls", correct: false },
            { text: "Kunchikal Falls", correct: true },
            { text: "Athirappilly Falls", correct: false },
            { text: "Dudhsagar Falls", correct: false }
        ]
    },
    {
        question: "The Aravalli Range extends from Gujarat to:",
        answers: [
            { text: "Punjab", correct: false },
            { text: "Delhi", correct: true },
            { text: "Uttar Pradesh", correct: false },
            { text: "Madhya Pradesh", correct: false }
        ]
    },
    {
        question: "Which Indian state shares the longest international border?",
        answers: [
            { text: "Punjab", correct: false },
            { text: "West Bengal", correct: true },
            { text: "Rajasthan", correct: false },
            { text: "Assam", correct: false }
        ]
    },
    {
        question: "The Southernmost point of mainland India is:",
        answers: [
            { text: "Kanyakumari", correct: true },
            { text: "Indira Point", correct: false },
            { text: "Rameswaram", correct: false },
            { text: "Cape Comorin", correct: false }
        ]
    }
],
    economy: [
    {
        question: "Which institution is known as the Central Bank of India?",
        answers: [
            { text: "SEBI", correct: false },
            { text: "RBI", correct: true },
            { text: "NABARD", correct: false },
            { text: "SBI", correct: false }
        ]
    },
    {
        question: "What does GDP stand for?",
        answers: [
            { text: "Gross Domestic Product", correct: true },
            { text: "General Domestic Product", correct: false },
            { text: "Gross Development Plan", correct: false },
            { text: "Global Domestic Production", correct: false }
        ]
    },
    {
        question: "Which tax replaced multiple indirect taxes in India in 2017?",
        answers: [
            { text: "Income Tax", correct: false },
            { text: "GST", correct: true },
            { text: "Service Tax", correct: false },
            { text: "VAT", correct: false }
        ]
    },
    {
        question: "Who presents the Union Budget in Parliament?",
        answers: [
            { text: "Prime Minister", correct: false },
            { text: "Finance Minister", correct: true },
            { text: "President", correct: false },
            { text: "Speaker of Lok Sabha", correct: false }
        ]
    },
    {
        question: "The headquarters of RBI is located in:",
        answers: [
            { text: "New Delhi", correct: false },
            { text: "Mumbai", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Inflation refers to:",
        answers: [
            { text: "Rise in general price level", correct: true },
            { text: "Increase in exports", correct: false },
            { text: "Decrease in taxes", correct: false },
            { text: "Increase in employment", correct: false }
        ]
    },
    {
        question: "Which Five-Year Plan focused on rapid industrialization?",
        answers: [
            { text: "First", correct: false },
            { text: "Second", correct: true },
            { text: "Third", correct: false },
            { text: "Fourth", correct: false }
        ]
    },
    {
        question: "Which organization regulates the securities market in India?",
        answers: [
            { text: "RBI", correct: false },
            { text: "SEBI", correct: true },
            { text: "IRDAI", correct: false },
            { text: "NITI Aayog", correct: false }
        ]
    },
    {
        question: "NITI Aayog was established in:",
        answers: [
            { text: "2012", correct: false },
            { text: "2015", correct: true },
            { text: "2017", correct: false },
            { text: "2020", correct: false }
        ]
    },
    {
        question: "The minimum support price (MSP) is announced for:",
        answers: [
            { text: "Industrial products", correct: false },
            { text: "Agricultural crops", correct: true },
            { text: "Gold", correct: false },
            { text: "Petroleum", correct: false }
        ]
    },
    {
        question: "Which is the largest sector contributing to India's GDP?",
        answers: [
            { text: "Agriculture", correct: false },
            { text: "Manufacturing", correct: false },
            { text: "Services", correct: true },
            { text: "Mining", correct: false }
        ]
    },
    {
        question: "Repo Rate is decided by:",
        answers: [
            { text: "Finance Ministry", correct: false },
            { text: "Reserve Bank of India", correct: true },
            { text: "Parliament", correct: false },
            { text: "SEBI", correct: false }
        ]
    },
    {
        question: "Which institution provides long-term credit for agriculture?",
        answers: [
            { text: "RBI", correct: false },
            { text: "NABARD", correct: true },
            { text: "SIDBI", correct: false },
            { text: "LIC", correct: false }
        ]
    },
    {
        question: "The Indian Rupee symbol (₹) was officially adopted in:",
        answers: [
            { text: "2008", correct: false },
            { text: "2010", correct: true },
            { text: "2012", correct: false },
            { text: "2015", correct: false }
        ]
    },
    {
        question: "Disinvestment means:",
        answers: [
            { text: "Buying private companies", correct: false },
            { text: "Selling government stake in PSUs", correct: true },
            { text: "Increasing taxes", correct: false },
            { text: "Reducing imports", correct: false }
        ]
    },
    {
        question: "Which committee recommends the Minimum Support Price (MSP)?",
        answers: [
            { text: "Finance Commission", correct: false },
            { text: "Commission for Agricultural Costs and Prices (CACP)", correct: true },
            { text: "NITI Aayog", correct: false },
            { text: "Planning Commission", correct: false }
        ]
    },
    {
        question: "Which type of unemployment is common in Indian agriculture?",
        answers: [
            { text: "Seasonal unemployment", correct: false },
            { text: "Disguised unemployment", correct: true },
            { text: "Structural unemployment", correct: false },
            { text: "Frictional unemployment", correct: false }
        ]
    },
    {
        question: "The Economic Survey is presented before:",
        answers: [
            { text: "Union Budget", correct: true },
            { text: "General Elections", correct: false },
            { text: "Finance Commission Report", correct: false },
            { text: "RBI Annual Report", correct: false }
        ]
    },
    {
        question: "Which is NOT a direct tax?",
        answers: [
            { text: "Income Tax", correct: false },
            { text: "Corporate Tax", correct: false },
            { text: "GST", correct: true },
            { text: "Capital Gains Tax", correct: false }
        ]
    },
    {
        question: "The headquarters of SEBI is located in:",
        answers: [
            { text: "New Delhi", correct: false },
            { text: "Mumbai", correct: true },
            { text: "Hyderabad", correct: false },
            { text: "Bengaluru", correct: false }
        ]
    }
],

    science: [
    {
        question: "The SI unit of Force is:",
        answers: [
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Watt", correct: false },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "The powerhouse of the cell is:",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Golgi Body", correct: false }
        ]
    },
    {
        question: "Which vitamin is produced in the human body on exposure to sunlight?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true },
            { text: "Vitamin K", correct: false }
        ]
    },
    {
        question: "The chemical symbol of Gold is:",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Gd", correct: false },
            { text: "Go", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "Water boils at what temperature at standard atmospheric pressure?",
        answers: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "Which blood group is known as the universal donor?",
        answers: [
            { text: "AB+", correct: false },
            { text: "O-", correct: true },
            { text: "A+", correct: false },
            { text: "B-", correct: false }
        ]
    },
    {
        question: "The speed of light in vacuum is approximately:",
        answers: [
            { text: "3 × 10⁸ m/s", correct: true },
            { text: "3 × 10⁶ m/s", correct: false },
            { text: "3 × 10⁵ km/s", correct: false },
            { text: "3 × 10⁷ m/s", correct: false }
        ]
    },
    {
        question: "Which part of the plant conducts photosynthesis?",
        answers: [
            { text: "Root", correct: false },
            { text: "Leaf", correct: true },
            { text: "Stem", correct: false },
            { text: "Flower", correct: false }
        ]
    },
    {
        question: "The pH value of pure water is:",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which gas is essential for photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who discovered the electron?",
        answers: [
            { text: "Ernest Rutherford", correct: false },
            { text: "J.J. Thomson", correct: true },
            { text: "Niels Bohr", correct: false },
            { text: "James Chadwick", correct: false }
        ]
    },
    {
        question: "The largest organ in the human body is:",
        answers: [
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Heart", correct: false },
            { text: "Brain", correct: false }
        ]
    },
    {
        question: "Which metal is liquid at room temperature?",
        answers: [
            { text: "Lead", correct: false },
            { text: "Mercury", correct: true },
            { text: "Aluminium", correct: false },
            { text: "Copper", correct: false }
        ]
    },
    {
        question: "Which vitamin helps in blood clotting?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin D", correct: false },
            { text: "Vitamin K", correct: true },
            { text: "Vitamin C", correct: false }
        ]
    },
    {
        question: "Which is the hardest natural substance?",
        answers: [
            { text: "Quartz", correct: false },
            { text: "Diamond", correct: true },
            { text: "Graphite", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "The nearest star to Earth is:",
        answers: [
            { text: "Proxima Centauri", correct: false },
            { text: "Sun", correct: true },
            { text: "Sirius", correct: false },
            { text: "Alpha Centauri", correct: false }
        ]
    },
    {
        question: "DNA stands for:",
        answers: [
            { text: "Deoxyribonucleic Acid", correct: true },
            { text: "Deoxyribose Nucleic Acid", correct: false },
            { text: "Dynamic Nucleic Acid", correct: false },
            { text: "Double Nucleic Acid", correct: false }
        ]
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        answers: [
            { text: "Thermometer", correct: false },
            { text: "Barometer", correct: true },
            { text: "Hygrometer", correct: false },
            { text: "Altimeter", correct: false }
        ]
    }
],

   environment: [
    {
        question: "Which is the largest biosphere reserve in India?",
        answers: [
            { text: "Nilgiri", correct: false },
            { text: "Gulf of Mannar", correct: false },
            { text: "Kachchh", correct: true },
            { text: "Sundarbans", correct: false }
        ]
    },
    {
        question: "Project Tiger was launched in India in:",
        answers: [
            { text: "1972", correct: false },
            { text: "1973", correct: true },
            { text: "1975", correct: false },
            { text: "1980", correct: false }
        ]
    },
    {
        question: "Which greenhouse gas has the highest concentration in the atmosphere after water vapor?",
        answers: [
            { text: "Methane", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrous Oxide", correct: false },
            { text: "Ozone", correct: false }
        ]
    },
    {
        question: "The Chipko Movement started in which state?",
        answers: [
            { text: "Himachal Pradesh", correct: false },
            { text: "Uttarakhand", correct: true },
            { text: "Sikkim", correct: false },
            { text: "Assam", correct: false }
        ]
    },
    {
        question: "Which layer of the atmosphere contains the ozone layer?",
        answers: [
            { text: "Troposphere", correct: false },
            { text: "Stratosphere", correct: true },
            { text: "Mesosphere", correct: false },
            { text: "Thermosphere", correct: false }
        ]
    },
    {
        question: "Which is India's first National Park?",
        answers: [
            { text: "Kaziranga", correct: false },
            { text: "Jim Corbett", correct: true },
            { text: "Ranthambore", correct: false },
            { text: "Gir", correct: false }
        ]
    },
    {
        question: "Which organization releases the Red List of Threatened Species?",
        answers: [
            { text: "WWF", correct: false },
            { text: "IUCN", correct: true },
            { text: "UNEP", correct: false },
            { text: "UNESCO", correct: false }
        ]
    },
    {
        question: "The headquarters of UNEP is located in:",
        answers: [
            { text: "Geneva", correct: false },
            { text: "Paris", correct: false },
            { text: "Nairobi", correct: true },
            { text: "New York", correct: false }
        ]
    },
    {
        question: "Which gas is mainly responsible for ozone depletion?",
        answers: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Methane", correct: false },
            { text: "Chlorofluorocarbons (CFCs)", correct: true },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "Which is the largest mangrove forest in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Sundarbans", correct: true },
            { text: "Nilgiri", correct: false },
            { text: "Western Ghats", correct: false }
        ]
    },
    {
        question: "Earth Day is celebrated every year on:",
        answers: [
            { text: "5 June", correct: false },
            { text: "22 April", correct: true },
            { text: "16 September", correct: false },
            { text: "2 February", correct: false }
        ]
    },
    {
        question: "World Environment Day is observed on:",
        answers: [
            { text: "22 April", correct: false },
            { text: "5 June", correct: true },
            { text: "21 March", correct: false },
            { text: "16 September", correct: false }
        ]
    },
    {
        question: "Which international agreement aims to reduce greenhouse gas emissions?",
        answers: [
            { text: "Montreal Protocol", correct: false },
            { text: "Kyoto Protocol", correct: true },
            { text: "Ramsar Convention", correct: false },
            { text: "Basel Convention", correct: false }
        ]
    },
    {
        question: "The Ramsar Convention is related to:",
        answers: [
            { text: "Forests", correct: false },
            { text: "Wetlands", correct: true },
            { text: "Mountains", correct: false },
            { text: "Deserts", correct: false }
        ]
    },
    {
        question: "Which is the largest National Park in India?",
        answers: [
            { text: "Jim Corbett", correct: false },
            { text: "Hemis National Park", correct: true },
            { text: "Gir", correct: false },
            { text: "Kaziranga", correct: false }
        ]
    },
    {
        question: "The Silent Valley National Park is located in:",
        answers: [
            { text: "Tamil Nadu", correct: false },
            { text: "Kerala", correct: true },
            { text: "Karnataka", correct: false },
            { text: "Goa", correct: false }
        ]
    },
    {
        question: "Which one is a renewable source of energy?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Petroleum", correct: false },
            { text: "Solar Energy", correct: true },
            { text: "Natural Gas", correct: false }
        ]
    },
    {
        question: "Which animal is the mascot of Project Tiger?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Royal Bengal Tiger", correct: true },
            { text: "Leopard", correct: false },
            { text: "Elephant", correct: false }
        ]
    },
    {
        question: "Which Indian state has the maximum forest cover by area?",
        answers: [
            { text: "Madhya Pradesh", correct: true },
            { text: "Arunachal Pradesh", correct: false },
            { text: "Chhattisgarh", correct: false },
            { text: "Odisha", correct: false }
        ]
    },
    {
        question: "The Green India Mission is associated with:",
        answers: [
            { text: "Industrial Development", correct: false },
            { text: "Afforestation", correct: true },
            { text: "River Linking", correct: false },
            { text: "Urban Transport", correct: false }
        ]
    }
],

    current: [
    {
        question: "Which mission successfully achieved India's first soft landing near the Moon's south pole?",
        answers: [
            { text: "Chandrayaan-2", correct: false },
            { text: "Chandrayaan-3", correct: true },
            { text: "Aditya-L1", correct: false },
            { text: "Mangalyaan", correct: false }
        ]
    },
    {
        question: "India's first solar mission is:",
        answers: [
            { text: "AstroSat", correct: false },
            { text: "Aditya-L1", correct: true },
            { text: "RISAT-2", correct: false },
            { text: "Cartosat-3", correct: false }
        ]
    },
    {
        question: "Which Indian city hosted the G20 Leaders' Summit in 2023?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Bengaluru", correct: false },
            { text: "Hyderabad", correct: false }
        ]
    },
    {
        question: "Which country hosted the ICC Men's Cricket World Cup 2023?",
        answers: [
            { text: "Australia", correct: false },
            { text: "India", correct: true },
            { text: "England", correct: false },
            { text: "South Africa", correct: false }
        ]
    },
    {
        question: "Who is known as the Father of India's Space Programme?",
        answers: [
            { text: "A.P.J. Abdul Kalam", correct: false },
            { text: "Vikram Sarabhai", correct: true },
            { text: "Satish Dhawan", correct: false },
            { text: "Homi Bhabha", correct: false }
        ]
    },
    {
        question: "The headquarters of ISRO is located in:",
        answers: [
            { text: "Hyderabad", correct: false },
            { text: "Bengaluru", correct: true },
            { text: "Chennai", correct: false },
            { text: "New Delhi", correct: false }
        ]
    },
    {
        question: "Which organization conducts the Civil Services Examination in India?",
        answers: [
            { text: "SSC", correct: false },
            { text: "UPSC", correct: true },
            { text: "NTA", correct: false },
            { text: "State PSC", correct: false }
        ]
    },
    {
        question: "International Yoga Day is celebrated on:",
        answers: [
            { text: "21 June", correct: true },
            { text: "5 June", correct: false },
            { text: "22 April", correct: false },
            { text: "8 March", correct: false }
        ]
    },
    {
        question: "PM Gati Shakti is primarily related to:",
        answers: [
            { text: "Infrastructure Development", correct: true },
            { text: "Healthcare", correct: false },
            { text: "Education", correct: false },
            { text: "Sports", correct: false }
        ]
    },
    {
        question: "Which state became the first to implement the Uniform Civil Code (UCC)?",
        answers: [
            { text: "Uttarakhand", correct: true },
            { text: "Gujarat", correct: false },
            { text: "Goa", correct: false },
            { text: "Uttar Pradesh", correct: false }
        ]
    },
    {
        question: "Which organization releases the Global Hunger Index?",
        answers: [
            { text: "World Bank", correct: false },
            { text: "Concern Worldwide & Welthungerhilfe", correct: true },
            { text: "WHO", correct: false },
            { text: "UNESCO", correct: false }
        ]
    },
    {
        question: "Which country is India's largest trading partner in recent years?",
        answers: [
            { text: "United States", correct: true },
            { text: "China", correct: false },
            { text: "Japan", correct: false },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "India Semiconductor Mission aims to promote:",
        answers: [
            { text: "Semiconductor Manufacturing", correct: true },
            { text: "Textile Industry", correct: false },
            { text: "Agriculture", correct: false },
            { text: "Tourism", correct: false }
        ]
    },
    {
        question: "The International Solar Alliance was jointly launched by India and:",
        answers: [
            { text: "France", correct: true },
            { text: "Germany", correct: false },
            { text: "Japan", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "The National TB Elimination Programme aims to eliminate:",
        answers: [
            { text: "Malaria", correct: false },
            { text: "Tuberculosis", correct: true },
            { text: "Polio", correct: false },
            { text: "Dengue", correct: false }
        ]
    },
    {
        question: "Ladli Behna Yojana was launched by which state?",
        answers: [
            { text: "Madhya Pradesh", correct: true },
            { text: "Rajasthan", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Uttar Pradesh", correct: false }
        ]
    },
    {
        question: "Which airport became India's first fully solar-powered airport?",
        answers: [
            { text: "Cochin International Airport", correct: true },
            { text: "Delhi Airport", correct: false },
            { text: "Mumbai Airport", correct: false },
            { text: "Hyderabad Airport", correct: false }
        ]
    },
    {
        question: "Digital India campaign primarily promotes:",
        answers: [
            { text: "Digital Governance and Services", correct: true },
            { text: "Sports", correct: false },
            { text: "Agriculture", correct: false },
            { text: "Mining", correct: false }
        ]
    },
    {
        question: "PM Vishwakarma Scheme supports:",
        answers: [
            { text: "Traditional artisans and craftspeople", correct: true },
            { text: "Software Engineers", correct: false },
            { text: "Doctors", correct: false },
            { text: "Scientists", correct: false }
        ]
    },
    {
        question: "Which naval exercise is conducted jointly by India and the United States?",
        answers: [
            { text: "Varuna", correct: false },
            { text: "Malabar", correct: true },
            { text: "Indra", correct: false },
            { text: "Garuda", correct: false }
        ]
    }
]

};
