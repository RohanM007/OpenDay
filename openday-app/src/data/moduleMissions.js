export const moduleMissions = {
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
