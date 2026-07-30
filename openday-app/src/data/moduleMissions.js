export const moduleMissions = {
  ITPP5112: {
    type: 'choice',
    title: 'Handle the team challenge',
    prompt: 'You discover a serious bug one hour before your team presents an app to a client. The project leader has not noticed it yet.',
    question: 'What is the most professional response?',
    options: [
      {
        id: 'hide',
        icon: '🙈',
        label: 'Hide the bug and hope nobody notices',
        feedback: 'Hiding a known problem risks trust and gives the team no chance to respond.'
      },
      {
        id: 'report',
        icon: '🤝',
        label: 'Tell the team, explain the impact and suggest a workaround',
        feedback: 'Correct! Clear communication, honesty and a practical response are all part of professional IT practice.'
      },
      {
        id: 'blame',
        icon: '👉',
        label: 'Publicly blame the person who wrote that code',
        feedback: 'Blaming someone does not solve the client’s problem and can damage teamwork.'
      }
    ],
    answer: 'report',
    success: 'Professional IT work combines technical ability with communication, accountability and teamwork.'
  },
  CONE5112: {
    type: 'choice',
    title: 'Restore the connection',
    prompt: 'One classroom computer cannot access the network, but every other computer in the room is working normally.',
    question: 'What should you check first?',
    options: [
      {
        id: 'building',
        icon: '🏫',
        label: 'Replace the entire building network',
        feedback: 'Because other computers are working, the whole building network is unlikely to be the problem.'
      },
      {
        id: 'local',
        icon: '🔌',
        label: 'Check that computer’s cable and network settings',
        feedback: 'Correct! Troubleshooting starts with the simplest likely cause closest to the affected device.'
      },
      {
        id: 'internet',
        icon: '🌍',
        label: 'Contact the internet provider immediately',
        feedback: 'The internet connection is probably active because the other computers are still online.'
      }
    ],
    answer: 'local',
    success: 'Great troubleshooting! Start locally, test one likely cause at a time, and expand the investigation only when needed.'
  },
  PROG6112: {
    type: 'choice',
    title: 'Predict the program output',
    prompt: 'A program starts with score = 5, adds 3 to the score, and then doubles the result.',
    question: 'What value will the program display?',
    options: [
      {
        id: '13',
        icon: '➕',
        label: '13',
        feedback: 'This adds the doubled 3 to 5. The program instead completes each instruction in order.'
      },
      {
        id: '16',
        icon: '⚡',
        label: '16',
        feedback: 'Correct! 5 + 3 gives 8, and doubling 8 gives 16.'
      },
      {
        id: '11',
        icon: '🧮',
        label: '11',
        feedback: 'The program doubles the full result of 5 + 3, not just the original score.'
      }
    ],
    answer: '16',
    success: 'You traced the changing value step by step—the same technique programmers use to understand and debug code.'
  },
  INSY6112: {
    type: 'matching',
    title: 'Design the student database',
    prompt: 'Match each piece of student information to the database field that suits it best.',
    choices: ['Primary key', 'Text field', 'Number field'],
    pairs: [
      {
        id: 'student-id',
        icon: '🪪',
        clue: 'A unique student ID used to identify one record',
        answer: 'Primary key'
      },
      {
        id: 'student-name',
        icon: '👤',
        clue: 'The student’s full name',
        answer: 'Text field'
      },
      {
        id: 'modules-passed',
        icon: '🔢',
        clue: 'The number of modules the student has passed',
        answer: 'Number field'
      }
    ],
    success: 'Database designed! Good field choices keep information organised, searchable and reliable.'
  },
  MAPC511: {
    type: 'choice',
    title: 'Crack the robot code',
    prompt: 'A robot uses a three-digit access code. The first digit is 2. The second digit is double the first. The final digit is the first two digits added together.',
    question: 'Which access code will unlock the robot?',
    options: [
      {
        id: '246',
        icon: '🔢',
        label: '246',
        feedback: 'Correct! Start with 2, double it to get 4, then add 2 + 4 to get 6.'
      },
      {
        id: '248',
        icon: '🤖',
        label: '248',
        feedback: 'The first two digits work, but the final digit should be 2 + 4, which equals 6.'
      },
      {
        id: '224',
        icon: '🔐',
        label: '224',
        feedback: 'The second digit needs to be double the first digit, so it should be 4 rather than 2.'
      }
    ],
    answer: '246',
    success: 'Code cracked! You followed a sequence of mathematical rules—the same logical thinking used when designing algorithms.'
  },
  INSY511: {
    type: 'choice',
    title: 'Solve the information problem',
    prompt: 'A campus gaming club has grown to 200 members. Sign-ups are kept in messages, payments are tracked on paper, and event reminders are often missed.',
    question: 'Which solution would help the club most?',
    options: [
      {
        id: 'social',
        icon: '📱',
        label: 'Create another social media group',
        feedback: 'That may help communication, but membership and payment information would still be scattered.'
      },
      {
        id: 'system',
        icon: '🗂️',
        label: 'Build one club management system',
        feedback: 'Exactly! One system can manage members, payments, events, and reminders using organised information.'
      },
      {
        id: 'paper',
        icon: '📝',
        label: 'Use a larger paper sign-up book',
        feedback: 'A larger book still makes searching, updating, and sharing information difficult.'
      }
    ],
    answer: 'system',
    success: 'You thought like a business analyst—understand the problem first, then choose a system that improves the whole process.'
  },
  CONE5111: {
    type: 'matching',
    title: 'Build the network',
    prompt: 'Match each job in the network to the device that would handle it.',
    choices: ['Router', 'Switch', 'Wireless access point'],
    pairs: [
      {
        id: 'internet',
        icon: '🌍',
        clue: 'Connects the local network to the internet',
        answer: 'Router'
      },
      {
        id: 'devices',
        icon: '🖥️',
        clue: 'Connects computers together inside the same wired network',
        answer: 'Switch'
      },
      {
        id: 'wifi',
        icon: '📶',
        clue: 'Lets phones and laptops join the network using Wi-Fi',
        answer: 'Wireless access point'
      }
    ],
    success: 'Network assembled! Routers connect networks, switches connect wired devices, and access points provide Wi-Fi.'
  },
  PROG5121: {
    type: 'sequence',
    title: 'Build the program flow',
    prompt: 'A student enters two marks and wants to see their average. Put the program steps in the correct order.',
    steps: [
      { id: 'calculate', label: 'Calculate the average of the two marks' },
      { id: 'display', label: 'Display the average to the student' },
      { id: 'input', label: 'Ask the student to enter two marks' }
    ],
    answer: ['input', 'calculate', 'display'],
    success: 'You built a logical program flow! Programs usually follow input → process → output.',
    hint: 'Think about what information the program needs before it can calculate anything.'
  }
}
