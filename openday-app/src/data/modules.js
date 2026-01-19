export const modules = {
  semester1: [
    {
      id: 'MAPC511',
      code: 'MAPC511',
      name: 'Mathematical Principles for Computer Sciences',
      semester: 1,
      description: 'Foundational knowledge of the basic mathematical principles and logical skills to solve Application Development and networking problems.',
      topics: [
        'Mathematical Principles',
        'Logical Problem Solving',
        'Application Development Mathematics',
        'Networking Mathematics'
      ],
      careerRelevance: {
        'Software Engineering': 'high',
        'App Development': 'high',
        'Cybersecurity': 'medium'
      },
      icon: '📐'
    },
    {
      id: 'CONE5111',
      code: 'CONE5111',
      name: 'Computer Networks 1A',
      semester: 1,
      description: 'Basic theoretical concepts of network architecture which include topologies, protocols, media and network standards and models. Students gain practical experience in configuration and troubleshooting basic networks.',
      topics: [
        'Network Architecture',
        'Topologies & Protocols',
        'Network Media & Standards',
        'Network Configuration',
        'Troubleshooting'
      ],
      careerRelevance: {
        'Software Engineering': 'medium',
        'App Development': 'medium',
        'Cybersecurity': 'high'
      },
      icon: '🌐'
    },
    {
      id: 'INSY511',
      code: 'INSY511',
      name: 'Information Systems 1A',
      semester: 1,
      description: 'Provide students with a sound knowledge of concepts related to the components, development and types of business information systems and processes.',
      topics: [
        'Information System Components',
        'System Development',
        'Business Information Systems',
        'Business Processes'
      ],
      careerRelevance: {
        'Software Engineering': 'high',
        'App Development': 'high',
        'Cybersecurity': 'medium'
      },
      icon: '💼'
    },
    {
      id: 'PROG5121',
      code: 'PROG5121',
      name: 'Programming 1A',
      semester: 1,
      description: 'Foundational and practical knowledge of programming through the use of object orientated programs.',
      topics: [
        'Object-Oriented Programming',
        'Programming Fundamentals',
        'Practical Coding Skills',
        'Software Development Basics'
      ],
      careerRelevance: {
        'Software Engineering': 'high',
        'App Development': 'high',
        'Cybersecurity': 'high'
      },
      icon: '💻'
    }
  ],
  semester2: []
};

export const careers = [
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Design, develop, and maintain software systems and applications for various platforms.',
    icon: '⚙️',
    color: '#3b82f6',
    skills: [
      'System Design & Architecture',
      'Software Development',
      'Testing & Quality Assurance',
      'Version Control & Collaboration'
    ],
    averageSalary: 'R450,000 - R800,000 per year',
    keyModules: ['PROG5121', 'MAPC511', 'INSY511']
  },
  {
    id: 'app-development',
    name: 'App Development',
    description: 'Create mobile and web applications for iOS, Android, and web platforms.',
    icon: '📱',
    color: '#10b981',
    skills: [
      'Mobile Development (iOS/Android)',
      'Web Development',
      'UI/UX Design',
      'API Integration'
    ],
    averageSalary: 'R400,000 - R750,000 per year',
    keyModules: ['PROG5121', 'INSY511', 'CONE5111']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Protect systems, networks, and data from cyber threats and security breaches.',
    icon: '🔒',
    color: '#ef4444',
    skills: [
      'Network Security',
      'Threat Analysis',
      'Security Protocols',
      'Ethical Hacking'
    ],
    averageSalary: 'R500,000 - R900,000 per year',
    keyModules: ['CONE5111', 'PROG5121', 'MAPC511']
  }
];

