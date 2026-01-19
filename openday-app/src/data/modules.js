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
  semester2: [
    {
      id: 'ITPP5112',
      code: 'ITPP5112',
      name: 'IT Professional Practice',
      semester: 2,
      description: 'Practical and theoretical foundation in developing the skills required as a Professional IT graduate in the workplace.',
      topics: [
        'Professional IT Skills',
        'Workplace Practices',
        'IT Ethics & Standards',
        'Communication Skills',
        'Team Collaboration'
      ],
      careerRelevance: {
        'Software Engineering': 'high',
        'App Development': 'high',
        'Cybersecurity': 'high'
      },
      icon: '👔'
    },
    {
      id: 'CONE5112',
      code: 'CONE5112',
      name: 'Computer Networks 1B',
      semester: 2,
      description: 'Foundational knowledge and practical application of network architecture on selected network concepts. Students will gain the necessary skills to solve a broad range of problems in computer networks, including issues related to routing, switching, performance, scalability, security and power efficiency.',
      topics: [
        'Routing & Switching',
        'Network Performance',
        'Scalability Solutions',
        'Network Security',
        'Power Efficiency'
      ],
      careerRelevance: {
        'Software Engineering': 'medium',
        'App Development': 'medium',
        'Cybersecurity': 'high'
      },
      icon: '🔌'
    },
    {
      id: 'PROG6112',
      code: 'PROG6112',
      name: 'Programming 1B',
      semester: 2,
      description: 'Augment the skills acquired in Programming 1A by providing students with knowledge of applets, object inheritance and class manipulation and with the skills needed to apply this knowledge to finding program solutions.',
      topics: [
        'Applets Development',
        'Object Inheritance',
        'Class Manipulation',
        'Advanced OOP Concepts',
        'Program Solutions'
      ],
      careerRelevance: {
        'Software Engineering': 'high',
        'App Development': 'high',
        'Cybersecurity': 'medium'
      },
      icon: '⚡'
    },
    {
      id: 'INSY6112',
      code: 'INSY6112',
      name: 'Information Systems 1B',
      semester: 2,
      description: 'Provide students with the knowledge and applied skills necessary for the design, implementation and management of database systems.',
      topics: [
        'Database Design',
        'Database Implementation',
        'Database Management',
        'SQL & Query Optimization',
        'Data Modeling'
      ],
      careerRelevance: {
        'Software Engineering': 'high',
        'App Development': 'high',
        'Cybersecurity': 'medium'
      },
      icon: '🗄️'
    }
  ]
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
    keyModules: ['PROG5121', 'PROG6112', 'INSY511']
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
    keyModules: ['PROG5121', 'PROG6112', 'INSY511']
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
    keyModules: ['CONE5111', 'CONE5112', 'PROG5121']
  },
  {
    id: 'full-stack-developer',
    name: 'Full-Stack Developer',
    description: 'Build complete web applications handling both frontend user interfaces and backend server logic.',
    icon: '🌐',
    color: '#8b5cf6',
    skills: [
      'Frontend Development',
      'Backend Development',
      'Database Management',
      'Cloud Integration'
    ],
    keyModules: ['PROG5121', 'PROG6112', 'INSY6112']
  },
  {
    id: 'mobile-developer',
    name: 'Mobile App Developer',
    description: 'Specialize in creating native and cross-platform mobile applications for Android and iOS.',
    icon: '📲',
    color: '#f59e0b',
    skills: [
      'Android Development (Kotlin)',
      'Mobile UI/UX',
      'App Performance Optimization',
      'Mobile Security'
    ],
    keyModules: ['PROG5121', 'PROG6112', 'INSY6112']
  },
  {
    id: 'cloud-developer',
    name: 'Cloud Developer',
    description: 'Design and build scalable cloud-based applications and services on platforms like AWS, Azure, and Google Cloud.',
    icon: '☁️',
    color: '#06b6d4',
    skills: [
      'Cloud Architecture',
      'Serverless Computing',
      'Cloud Security',
      'DevOps & CI/CD'
    ],
    keyModules: ['PROG6112', 'CONE5112', 'INSY6112']
  }
];

