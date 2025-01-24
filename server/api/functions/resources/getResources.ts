import { Request, Response } from "express";

// Used for GET: /resources
export function getResources(req: Request, res: Response) {
  res.send(unparsedResources);
}

const unparsedResources = [
  {
    id: '1',
    title: 'Learning JavaScript Basics',
    description:
      'A comprehensive guide to learning the fundamentals of JavaScript.',
    tagIds: ['t1', 't2', 't3'],
    link: 'https://example.com/js-basics',
  },
  {
    id: '2',
    title: 'Introduction to Python',
    description:
      'Learn the basics of Python programming with examples and tutorials.',
    tagIds: ['t4', 't2', 't5'],
    link: 'https://example.com/python-intro',
  },
  {
    id: '3',
    title: 'CSS Flexbox and Grid',
    description:
      'A hands-on guide to mastering CSS Flexbox and Grid layout systems.',
    tagIds: ['t6', 't7'],
    link: 'https://example.com/css-flexbox-grid',
  },
  {
    id: '4',
    title: 'Machine Learning with TensorFlow',
    description: 'Build machine learning models using TensorFlow.',
    tagIds: ['t8', 't5', 't9'],
    link: 'https://example.com/tensorflow-ml',
  },
  {
    id: '5',
    title: 'React.js Fundamentals',
    description:
      "A beginner's guide to building interactive UIs with React.js.",
    tagIds: ['t1', 't10'],
    link: 'https://example.com/react-basics',
  },
  {
    id: '6',
    title: 'Understanding SQL',
    description: 'Learn how to interact with relational databases using SQL.',
    tagIds: ['t11', 't2'],
    link: 'https://example.com/sql-guide',
  },
  {
    id: '7',
    title: 'Web Accessibility Best Practices',
    description:
      'Ensure your website is accessible to everyone by following best practices.',
    tagIds: ['t12', 't7'],
    link: 'https://example.com/web-accessibility',
  },
  {
    id: '8',
    title: 'Introduction to Docker',
    description: 'Learn the basics of containerization with Docker.',
    tagIds: ['t13', 't14'],
    link: 'https://example.com/docker-introduction',
  },
  {
    id: '9',
    title: 'Deep Learning with PyTorch',
    description:
      'Explore deep learning concepts and build models using PyTorch.',
    tagIds: ['t8', 't15'],
    link: 'https://example.com/pytorch-deep-learning',
  },
  {
    id: '10',
    title: 'Introduction to Kubernetes',
    description:
      'Learn how to deploy and manage containerized applications with Kubernetes.',
    tagIds: ['t13', 't14', 't16'],
    link: 'https://example.com/kubernetes-intro',
  },
  {
    id: '11',
    title: 'Building APIs with Node.js',
    description:
      'A guide to creating and using REST APIs with Node.js and Express.',
    tagIds: ['t1', 't17'],
    link: 'https://example.com/nodejs-apis',
  },
  {
    id: '12',
    title: 'Data Visualization with D3.js',
    description: 'Create interactive data visualizations using D3.js.',
    tagIds: ['t18', 't1'],
    link: 'https://example.com/d3js-visualizations',
  },
  {
    id: '13',
    title: 'Version Control with Git',
    description:
      'Master Git for version control and collaboration in software development.',
    tagIds: ['t19', 't2'],
    link: 'https://example.com/git-version-control',
  },
  {
    id: '14',
    title: 'Building Mobile Apps with Flutter',
    description:
      "Create cross-platform mobile apps with Google's Flutter framework.",
    tagIds: ['t20', 't10'],
    link: 'https://example.com/flutter-apps',
  },
  {
    id: '15',
    title: 'Responsive Web Design with Bootstrap',
    description:
      'Learn how to create responsive websites using the Bootstrap framework.',
    tagIds: ['t6', 't7'],
    link: 'https://example.com/bootstrap-responsiveness',
  },
  {
    id: '16',
    title: 'Building Web Apps with Vue.js',
    description: 'Create reactive web applications with Vue.js.',
    tagIds: ['t1', 't21'],
    link: 'https://example.com/vuejs-apps',
  },
  {
    id: '17',
    title: 'Web Security Essentials',
    description:
      'Learn the fundamentals of web security and how to protect your site from threats.',
    tagIds: ['t22', 't7'],
    link: 'https://example.com/web-security',
  },
  {
    id: '18',
    title: 'AI and Ethics',
    description: 'Explore the ethical implications of artificial intelligence.',
    tagIds: ['t8', 't23'],
    link: 'https://example.com/ai-ethics',
  },
  {
    id: '19',
    title: 'Cloud Computing with AWS',
    description: 'Understand the basics of cloud computing and how to use AWS.',
    tagIds: ['t24', 't25'],
    link: 'https://example.com/aws-cloud-computing',
  },
  {
    id: '20',
    title: 'Blockchain for Beginners',
    description: 'Learn the basics of blockchain technology and its use cases.',
    tagIds: ['t26', 't27'],
    link: 'https://example.com/blockchain-intro',
  },
];
