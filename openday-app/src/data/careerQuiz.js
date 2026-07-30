export const careerProfiles = {
  software: {
    id: 'software',
    name: 'Software Engineering',
    icon: '⚙️',
    color: '#3b82f6',
    tagline: 'You enjoy turning complex problems into reliable, well-structured solutions.',
    description: 'Software engineers plan, build, test, and improve the systems behind the digital products people use every day.',
    strengths: ['Logical thinking', 'Problem solving', 'Patience', 'Building systems'],
    qualification: 'degree',
    qualificationLabel: 'Degree recommended',
    modules: ['PROG5121 Programming 1A', 'PROG6112 Programming 1B', 'INSY6112 Information Systems 1B']
  },
  web: {
    id: 'web',
    name: 'Web Development',
    icon: '🌐',
    color: '#8b5cf6',
    tagline: 'You like creating useful digital experiences that people can access anywhere.',
    description: 'Web developers combine code, design, and data to create websites and browser-based applications.',
    strengths: ['Creating things', 'Curiosity', 'Visual thinking', 'Continuous learning'],
    qualification: 'degree',
    qualificationLabel: 'Degree pathway',
    modules: ['PROG5121 Programming 1A', 'PROG6112 Programming 1B', 'INSY6112 Information Systems 1B']
  },
  mobile: {
    id: 'mobile',
    name: 'Mobile App Development',
    icon: '📱',
    color: '#10b981',
    tagline: 'You are excited by the idea of putting useful experiences into people’s hands.',
    description: 'Mobile developers design and build applications for phones and tablets using native or cross-platform tools.',
    strengths: ['Hands-on building', 'User empathy', 'Experimentation', 'Attention to detail'],
    qualification: 'degree',
    qualificationLabel: 'Degree pathway',
    modules: ['PROG5121 Programming 1A', 'PROG6112 Programming 1B', 'INSY6112 Information Systems 1B']
  },
  design: {
    id: 'design',
    name: 'UI/UX & Digital Design',
    icon: '🎨',
    color: '#ec4899',
    tagline: 'You notice how things look, feel, and work for the person using them.',
    description: 'UI/UX practitioners research users, shape interfaces, and make digital products clear, useful, and enjoyable.',
    strengths: ['Empathy', 'Creativity', 'Communication', 'Visual organisation'],
    qualification: 'degree',
    qualificationLabel: 'Degree pathway',
    modules: ['PROG5121 Programming 1A', 'INSY511 Information Systems 1A', 'ITPP5112 IT Professional Practice']
  },
  security: {
    id: 'security',
    name: 'Cybersecurity & Networks',
    icon: '🔒',
    color: '#ef4444',
    tagline: 'You are naturally curious about weaknesses, risks, and how systems stay safe.',
    description: 'Cybersecurity and network specialists protect devices, services, and information while keeping systems connected.',
    strengths: ['Investigating', 'Risk awareness', 'Persistence', 'Technical reasoning'],
    qualification: 'degree',
    qualificationLabel: 'Degree recommended',
    modules: ['CONE5111 Computer Networks 1A', 'CONE5112 Computer Networks 1B', 'PROG5121 Programming 1A']
  },
  data: {
    id: 'data',
    name: 'Data & Business Systems',
    icon: '📊',
    color: '#f59e0b',
    tagline: 'You enjoy spotting patterns and using information to make better decisions.',
    description: 'Data and business systems professionals organise information, analyse patterns, and improve how organisations work.',
    strengths: ['Analytical thinking', 'Organisation', 'Asking why', 'Explaining insights'],
    qualification: 'degree',
    qualificationLabel: 'Degree recommended',
    modules: ['INSY511 Information Systems 1A', 'INSY6112 Information Systems 1B', 'MAPC511 Mathematical Principles']
  }
}

export const careerQuizQuestions = [
  {
    prompt: 'A community group needs a new digital solution. Which part would you most enjoy?',
    options: [
      { icon: '🧩', label: 'Planning how the whole system should work', scores: { software: 3, data: 1 } },
      { icon: '✨', label: 'Designing a simple, welcoming experience', scores: { design: 3, web: 1 } },
      { icon: '📱', label: 'Building something people can use on their phones', scores: { mobile: 3, web: 1 } },
      { icon: '🛡️', label: 'Making sure their information stays protected', scores: { security: 3, software: 1 } }
    ]
  },
  {
    prompt: 'Which kind of puzzle sounds most satisfying?',
    options: [
      { icon: '🐛', label: 'Finding why a program is not behaving correctly', scores: { software: 3, mobile: 1 } },
      { icon: '📈', label: 'Finding the story hidden inside a set of numbers', scores: { data: 3, software: 1 } },
      { icon: '🕵️', label: 'Tracing how someone got into a protected system', scores: { security: 3, data: 1 } },
      { icon: '🧭', label: 'Making a confusing screen easier to navigate', scores: { design: 3, web: 1 } }
    ]
  },
  {
    prompt: 'What would you be most proud to show your friends?',
    options: [
      { icon: '🌐', label: 'A polished website I built from scratch', scores: { web: 3, design: 1 } },
      { icon: '📲', label: 'An app running on a real phone', scores: { mobile: 3, software: 1 } },
      { icon: '⚙️', label: 'A clever tool that automates a difficult task', scores: { software: 3, data: 1 } },
      { icon: '📊', label: 'A dashboard that makes complex information clear', scores: { data: 3, design: 1 } }
    ]
  },
  {
    prompt: 'In a group project, which role feels most natural to you?',
    options: [
      { icon: '🗺️', label: 'Breaking the challenge into logical steps', scores: { software: 2, data: 2 } },
      { icon: '🎨', label: 'Thinking about the audience and shaping the presentation', scores: { design: 3, web: 1 } },
      { icon: '🔧', label: 'Building and testing the working prototype', scores: { mobile: 2, web: 2 } },
      { icon: '🔍', label: 'Looking for risks and things the team may have missed', scores: { security: 3, software: 1 } }
    ]
  },
  {
    prompt: 'Which technology topic would make you click “watch next”?',
    options: [
      { icon: '🤖', label: 'How complex software is designed', scores: { software: 3, data: 1 } },
      { icon: '🧑‍🎨', label: 'Why some apps feel easier to use than others', scores: { design: 3, mobile: 1 } },
      { icon: '☁️', label: 'How websites work behind the scenes', scores: { web: 3, software: 1 } },
      { icon: '🔐', label: 'How ethical hackers find vulnerabilities', scores: { security: 3, web: 1 } }
    ]
  },
  {
    prompt: 'When solving a problem, what do you usually do first?',
    options: [
      { icon: '📝', label: 'Write down the facts and look for patterns', scores: { data: 3, security: 1 } },
      { icon: '🧪', label: 'Try a small version and learn by experimenting', scores: { mobile: 2, web: 2 } },
      { icon: '🧱', label: 'Split it into smaller pieces and solve them one by one', scores: { software: 3, data: 1 } },
      { icon: '👥', label: 'Ask who has the problem and what they really need', scores: { design: 3, mobile: 1 } }
    ]
  },
  {
    prompt: 'Which working environment sounds most appealing?',
    options: [
      { icon: '💻', label: 'Deep focus while building a large technical system', scores: { software: 3, security: 1 } },
      { icon: '🖼️', label: 'A creative studio testing ideas with users', scores: { design: 3, web: 1 } },
      { icon: '📡', label: 'Monitoring connected systems and responding to incidents', scores: { security: 3, data: 1 } },
      { icon: '📉', label: 'Helping a team make decisions using evidence', scores: { data: 3, software: 1 } }
    ]
  },
  {
    prompt: 'Choose the sentence that sounds most like you.',
    options: [
      { icon: '🚀', label: 'I want to build products people can use anywhere.', scores: { web: 2, mobile: 2 } },
      { icon: '🧠', label: 'I enjoy understanding how complicated things fit together.', scores: { software: 2, security: 2 } },
      { icon: '💡', label: 'I often think of ways an experience could be improved.', scores: { design: 3, mobile: 1 } },
      { icon: '📚', label: 'I like turning messy information into a clear answer.', scores: { data: 3, web: 1 } }
    ]
  }
]
