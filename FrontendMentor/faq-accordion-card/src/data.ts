type Item = {
  id: number;
  title: string;
  content: string;
};

const data: Item[] = [
  {
    id: 0,
    title: 'How many team members can I invite?',
    content: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },
  {
    id: 1,
    title: 'What is the maximum file upload size?',
    content: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
  {
    id: 2,
    title: 'How do I reset my password?',
    content: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },
  {
    id: 3,
    title: 'Can I cancel my subscription?',
    content: 'Yes! Send us a message and we’ll process your request no questions asked.'
  },
  {
    id: 4,
    title: 'Do you provide additional support?',
    content: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  }
];

export default data;