export const moduleMissions = {
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
