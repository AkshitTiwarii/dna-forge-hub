// Sample data generator for certificates
// In a real application, this would come from an API/database

const sampleNames = [
  'John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'Alex Brown',
  'Emily Davis', 'Chris Taylor', 'Jessica Lee', 'David Miller', 'Amanda White',
  'Ryan Garcia', 'Lisa Anderson', 'Kevin Martinez', 'Rachel Thompson', 'Brian Clark',
  'Stephanie Rodriguez', 'Daniel Lewis', 'Michelle Walker', 'James Hall', 'Nicole Young',
  'Andrew Allen', 'Jennifer King', 'Matthew Wright', 'Ashley Lopez', 'Joshua Hill',
  'Samantha Green', 'Christopher Adams', 'Megan Baker', 'Joseph Gonzalez', 'Lauren Nelson',
  'Anthony Carter', 'Kimberly Mitchell', 'Mark Perez', 'Brittany Roberts', 'Steven Turner',
  'Danielle Phillips', 'Nicholas Campbell', 'Heather Parker', 'Benjamin Evans', 'Vanessa Edwards',
  'Jacob Collins', 'Crystal Stewart', 'Tyler Sanchez', 'Monica Morris', 'Aaron Rogers',
  'Tiffany Reed', 'Jonathan Cook', 'Angela Bailey', 'Nathan Rivera', 'Melissa Cooper'
];

const sampleEvents = [
  {
    name: 'Web Development Workshop',
    date: '2025-07-25',
    idPrefix: 'WD2025'
  },
  {
    name: 'JavaScript Bootcamp',
    date: '2025-06-15',
    idPrefix: 'JS2025'
  },
  {
    name: 'React Workshop Series',
    date: '2025-06-20',
    idPrefix: 'RC2025'
  },
  {
    name: 'Python for Beginners',
    date: '2025-05-10',
    idPrefix: 'PY2025'
  },
  {
    name: 'Data Science Fundamentals',
    date: '2025-05-22',
    idPrefix: 'DS2025'
  },
  {
    name: 'Mobile App Development',
    date: '2025-04-18',
    idPrefix: 'MA2025'
  },
  {
    name: 'DevOps Essentials',
    date: '2025-04-25',
    idPrefix: 'DO2025'
  },
  {
    name: 'UI/UX Design Workshop',
    date: '2025-03-15',
    idPrefix: 'UX2025'
  },
  {
    name: 'Machine Learning Basics',
    date: '2025-03-28',
    idPrefix: 'ML2025'
  },
  {
    name: 'Cloud Computing Workshop',
    date: '2025-02-14',
    idPrefix: 'CC2025'
  }
];

const certificateTypes = [
  {
    title: 'Completion Certificate',
    type: 'certificate',
    category: 'workshop',
    description: 'Certificate of completion for attending the full workshop',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Participation Certificate',
    type: 'certificate',
    category: 'workshop',
    description: 'Certificate acknowledging participation in the workshop sessions',
    thumbnail: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Excellence Award',
    type: 'award',
    category: 'recognition',
    description: 'Special recognition for outstanding performance and participation',
    thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Community Contributor Badge',
    type: 'badge',
    category: 'community',
    description: 'Digital badge for active community participation and contributions',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Top Performer Recognition',
    type: 'award',
    category: 'recognition',
    description: 'Recognition for being among the top performers in the workshop',
    thumbnail: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

const generateEmailFromName = (name: string): string => {
  const parts = name.toLowerCase().split(' ');
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${parts.join('.')}@${domain}`;
};

export const generateSampleCertificates = (count: number = 200) => {
  const certificates = [];
  let idCounter = 1;

  for (let i = 0; i < count; i++) {
    const event = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
    const certType = certificateTypes[Math.floor(Math.random() * certificateTypes.length)];
    const name = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    
    certificates.push({
      id: idCounter++,
      title: `${certType.title} - ${event.name}`,
      eventName: event.name,
      date: event.date,
      type: certType.type,
      category: certType.category,
      participants: Math.floor(Math.random() * 200) + 50,
      description: certType.description,
      downloadUrl: '#', // In production, this would be a real download URL
      thumbnail: certType.thumbnail,
      recipientName: name,
      recipientEmail: generateEmailFromName(name),
      certificateId: `${event.idPrefix}${String(idCounter).padStart(3, '0')}`
    });
  }

  return certificates;
};

export const sampleCertificates = generateSampleCertificates(200);
