export const moduleMissions = {
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
