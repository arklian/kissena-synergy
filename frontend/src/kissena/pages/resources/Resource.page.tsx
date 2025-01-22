import { PageContainer } from '@/kissena/components/PageContainer/PageContainer'
import { FilterList } from '@kissena/pages/resources/Tag.filter.list'
import { ResourceList } from '@kissena/pages/resources/Resource.list'
import { useState } from 'react'
import { Button, Drawer, Grid, Group, Text, Title } from '@mantine/core'
import { TagData } from '@/types'
import { useDisclosure } from '@mantine/hooks'
import styles from '@kissena/pages/resources/Resource.module.css'
import { Filter } from 'lucide-react'


const sampleTags = [
  { id: 't1', title: 'JavaScript', color: '#f0db4f' },
  { id: 't2', title: 'Programming', color: '#4caf50' },
  { id: 't3', title: 'Web Development', color: '#2196f3' },
  { id: 't4', title: 'Python', color: '#306998' },
  { id: 't5', title: 'Data Science', color: '#ff9800' },
  { id: 't6', title: 'CSS', color: '#264de4' },
  { id: 't7', title: 'Web Design', color: '#e91e63' },
  { id: 't8', title: 'Machine Learning', color: '#f44336' },
  { id: 't9', title: 'TensorFlow', color: '#4caf50' },
  { id: 't10', title: 'React', color: '#61dafb' },
  { id: 't11', title: 'SQL', color: '#ff5722' },
  { id: 't12', title: 'Accessibility', color: '#9c27b0' },
  { id: 't13', title: 'Docker', color: '#0db7ed' },
  { id: 't14', title: 'DevOps', color: '#9c27b0' },
  { id: 't15', title: 'PyTorch', color: '#e53e3e' },
  { id: 't16', title: 'Kubernetes', color: '#326ce5' },
  { id: 't17', title: 'Node.js', color: '#8cc84b' },
  { id: 't18', title: 'Data Visualization', color: '#ff5722' },
  { id: 't19', title: 'Git', color: '#f1502f' },
  { id: 't20', title: 'Flutter', color: '#02569b' },
  { id: 't21', title: 'Vue.js', color: '#4caf50' },
  { id: 't22', title: 'Web Security', color: '#9c27b0' },
  { id: 't23', title: 'Ethics', color: '#607d8b' },
  { id: 't24', title: 'Cloud Computing', color: '#f39c12' },
  { id: 't25', title: 'AWS', color: '#ff9900' },
  { id: 't26', title: 'Blockchain', color: '#0b72b9' },
  { id: 't27', title: 'Cryptocurrency', color: '#f44336' },
]

const unparsedResources = [
  {
    id: '1',
    title: 'Learning JavaScript Basics',
    description:
      'A comprehensive guide to learning the fundamentals of JavaScript.',
    tags: new Set<TagData>([
      { id: 't1', title: 'JavaScript', color: '#f0db4f' } as TagData,
      { id: 't2', title: 'Programming', color: '#4caf50' },
      { id: 't3', title: 'Web Development', color: '#2196f3' },
    ]),
    link: 'https://example.com/js-basics',
  },
  {
    id: '2',
    title: 'Introduction to Python',
    description:
      'Learn the basics of Python programming with examples and tutorials.',
    tags: [
      { id: 't4', title: 'Python', color: '#306998' },
      { id: 't2', title: 'Programming', color: '#4caf50' },
      { id: 't5', title: 'Data Science', color: '#ff9800' },
    ],
    link: 'https://example.com/python-intro',
  },
  {
    id: '3',
    title: 'CSS Flexbox and Grid',
    description:
      'A hands-on guide to mastering CSS Flexbox and Grid layout systems.',
    tags: [
      { id: 't6', title: 'CSS', color: '#264de4' },
      { id: 't7', title: 'Web Design', color: '#e91e63' },
    ],
    link: 'https://example.com/css-flexbox-grid',
  },
  {
    id: '4',
    title: 'Machine Learning with TensorFlow',
    description: 'Build machine learning models using TensorFlow.',
    tags: [
      { id: 't8', title: 'Machine Learning', color: '#f44336' },
      { id: 't5', title: 'Data Science', color: '#ff9800' },
      { id: 't9', title: 'TensorFlow', color: '#4caf50' },
    ],
    link: 'https://example.com/tensorflow-ml',
  },
  {
    id: '5',
    title: 'React.js Fundamentals',
    description:
      "A beginner's guide to building interactive UIs with React.js.",
    tags: [
      { id: 't1', title: 'JavaScript', color: '#f0db4f' },
      { id: 't10', title: 'React', color: '#61dafb' },
    ],
    link: 'https://example.com/react-basics',
  },
  {
    id: '6',
    title: 'Understanding SQL',
    description: 'Learn how to interact with relational databases using SQL.',
    tags: [
      { id: 't11', title: 'SQL', color: '#ff5722' },
      { id: 't2', title: 'Programming', color: '#4caf50' },
    ],
    link: 'https://example.com/sql-guide',
  },
  {
    id: '7',
    title: 'Web Accessibility Best Practices',
    description:
      'Ensure your website is accessible to everyone by following best practices.',
    tags: [
      { id: 't12', title: 'Accessibility', color: '#9c27b0' },
      { id: 't7', title: 'Web Design', color: '#e91e63' },
    ],
    link: 'https://example.com/web-accessibility',
  },
  {
    id: '8',
    title: 'Introduction to Docker',
    description: 'Learn the basics of containerization with Docker.',
    tags: [
      { id: 't13', title: 'Docker', color: '#0db7ed' },
      { id: 't14', title: 'DevOps', color: '#9c27b0' },
    ],
    link: 'https://example.com/docker-introduction',
  },
  {
    id: '9',
    title: 'Deep Learning with PyTorch',
    description:
      'Explore deep learning concepts and build models using PyTorch.',
    tags: [
      { id: 't8', title: 'Machine Learning', color: '#f44336' },
      { id: 't15', title: 'PyTorch', color: '#e53e3e' },
    ],
    link: 'https://example.com/pytorch-deep-learning',
  },
  {
    id: '10',
    title: 'Introduction to Kubernetes',
    description:
      'Learn how to deploy and manage containerized applications with Kubernetes.',
    tags: [
      { id: 't13', title: 'Docker', color: '#0db7ed' },
      { id: 't14', title: 'DevOps', color: '#9c27b0' },
      { id: 't16', title: 'Kubernetes', color: '#326ce5' },
    ],
    link: 'https://example.com/kubernetes-intro',
  },
  {
    id: '11',
    title: 'Building APIs with Node.js',
    description:
      'A guide to creating and using REST APIs with Node.js and Express.',
    tags: [
      { id: 't1', title: 'JavaScript', color: '#f0db4f' },
      { id: 't17', title: 'Node.js', color: '#8cc84b' },
    ],
    link: 'https://example.com/nodejs-apis',
  },
  {
    id: '12',
    title: 'Data Visualization with D3.js',
    description: 'Create interactive data visualizations using D3.js.',
    tags: [
      { id: 't18', title: 'Data Visualization', color: '#ff5722' },
      { id: 't1', title: 'JavaScript', color: '#f0db4f' },
    ],
    link: 'https://example.com/d3js-visualizations',
  },
  {
    id: '13',
    title: 'Version Control with Git',
    description:
      'Master Git for version control and collaboration in software development.',
    tags: [
      { id: 't19', title: 'Git', color: '#f1502f' },
      { id: 't2', title: 'Programming', color: '#4caf50' },
    ],
    link: 'https://example.com/git-version-control',
  },
  {
    id: '14',
    title: 'Building Mobile Apps with Flutter',
    description:
      "Create cross-platform mobile apps with Google's Flutter framework.",
    tags: [
      { id: 't20', title: 'Flutter', color: '#02569b' },
      { id: 't10', title: 'React', color: '#61dafb' },
    ],
    link: 'https://example.com/flutter-apps',
  },
  {
    id: '15',
    title: 'Responsive Web Design with Bootstrap',
    description:
      'Learn how to create responsive websites using the Bootstrap framework.',
    tags: [
      { id: 't6', title: 'CSS', color: '#264de4' },
      { id: 't7', title: 'Web Design', color: '#e91e63' },
    ],
    link: 'https://example.com/bootstrap-responsiveness',
  },
  {
    id: '16',
    title: 'Building Web Apps with Vue.js',
    description: 'Create reactive web applications with Vue.js.',
    tags: [
      { id: 't1', title: 'JavaScript', color: '#f0db4f' },
      { id: 't21', title: 'Vue.js', color: '#4caf50' },
    ],
    link: 'https://example.com/vuejs-apps',
  },
  {
    id: '17',
    title: 'Web Security Essentials',
    description:
      'Learn the fundamentals of web security and how to protect your site from threats.',
    tags: [
      { id: 't22', title: 'Web Security', color: '#9c27b0' },
      { id: 't7', title: 'Web Design', color: '#e91e63' },
    ],
    link: 'https://example.com/web-security',
  },
  {
    id: '18',
    title: 'AI and Ethics',
    description: 'Explore the ethical implications of artificial intelligence.',
    tags: [
      { id: 't8', title: 'Machine Learning', color: '#f44336' },
      { id: 't23', title: 'Ethics', color: '#607d8b' },
    ],
    link: 'https://example.com/ai-ethics',
  },
  {
    id: '19',
    title: 'Cloud Computing with AWS',
    description: 'Understand the basics of cloud computing and how to use AWS.',
    tags: [
      { id: 't24', title: 'Cloud Computing', color: '#f39c12' },
      { id: 't25', title: 'AWS', color: '#ff9900' },
    ],
    link: 'https://example.com/aws-cloud-computing',
  },
  {
    id: '20',
    title: 'Blockchain for Beginners',
    description: 'Learn the basics of blockchain technology and its use cases.',
    tags: [
      { id: 't26', title: 'Blockchain', color: '#0b72b9' },
      { id: 't27', title: 'Cryptocurrency', color: '#f44336' },
    ],
    link: 'https://example.com/blockchain-intro',
  },
]

const sampleResources = unparsedResources.map(resource => ({
  ...resource,
  tags: new Set(resource.tags),
}));


export function ResourcePage() {
  const [opened, {open, close}] = useDisclosure(false);

  const resources = sampleResources
  const [selectedTagIds, setSelectedTagIds] = useState<Set<string>>(new Set());

  return (
    <PageContainer wide>
      <Grid>
      <Grid.Col span={{ base: 12, md: 10 }}>
        <Group justify='space-between'>
          <Title c='darkGreen.5' order={2}>Resources</Title>
          <Button size='md' leftSection={<Filter size={15} />} onClick={open} hiddenFrom='md' color={'darkGreen.4'}>Filters</Button>
        </Group>
      </Grid.Col>
      <Grid.Col span={2} visibleFrom='md' />
      <Grid.Col span={{ base: 12, md: 10 }}>
        <ResourceList resources={resources} selectedTagIds={selectedTagIds} />
      </Grid.Col>
      <Grid.Col span={2} visibleFrom='md'>
          <FilterList
            tags={sampleTags}
            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}
          />
        </Grid.Col>
      </Grid>
      <Drawer
      className={styles.drawer}
      classNames={{ header: styles.drawer, content: styles.drawer }}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
       position='right' title={<Text>Edit Tags</Text>} opened={opened} onClose={close}>
        <FilterList
            tags={sampleTags}
            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}
          />
      </Drawer>
    </PageContainer>
  )
}
