export const portfolioData = {
  profile: {
    name: 'Gagan',
    fullName: 'Gaganjeet Singh',
    initials: 'GS',
    title: 'AI/ML Engineer and Data Scientist',
    availability: 'Open to work, freelance builds, and AI product work',
    description:
      'I build polished digital experiences and data-driven systems that turn complex ideas into practical products.',
    location: 'Chandigarh, India',
    focusAreas: [
      'Machine learning workflows',
      'Data storytelling',
      'AI Systems',
    ],
    heroStats: [
      { value: '3', label: 'Highlighted builds' },
      { value: '5', label: 'Skill clusters' },
      { value: '3', label: 'Core focus areas' },
    ],
  },
  navigationItems: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gaganjeet-singh-5666b6325/',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Gaganjeet-Singh',
      icon: 'github',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/fOZ6aZVzKC/',
      icon: 'leetcode',
    },
  ],
  about: {
    eyebrow: 'About',
    title: 'Thoughtful problem-solving across data, models, and user experience.',
    subtitle:
      'I like work that starts with ambiguity and ends with something clear, reliable, and easy to use.',
    sections: [
      {
        title: 'Who I am',
        body:
          'I enjoy turning messy inputs, raw datasets, and open-ended product ideas into systems people can trust. My work usually sits at the intersection of machine learning, product thinking, and practical frontend delivery.',
      },
      {
        title: 'How I work',
        body:
          'I start by understanding the problem clearly, then design a solution that is measurable, maintainable, and pleasant to use. That means balancing experimentation with clean implementation and paying attention to details that improve confidence.',
      },
      {
        title: 'What I care about',
        body:
          'I care about readable code, sensible interfaces, responsive experiences, and solutions that do not just look impressive in a demo but hold up when someone actually depends on them.',
      },
    ],
    highlights: [
      {
        icon: 'brain',
        title: 'Model-minded',
        description:
          'Comfortable translating requirements into data pipelines, experiments, and usable ML outputs.',
      },
      {
        icon: 'layers',
        title: 'Systems thinking',
        description:
          'I connect frontend, backend, and data concerns so the whole product feels coherent.',
      },
      {
        icon: 'rocket',
        title: 'Shipping focus',
        description:
          'I value progress, iteration, and production-friendly solutions over flashy complexity.',
      },
      {
        icon: 'message',
        title: 'Clear communication',
        description:
          'I aim to explain tradeoffs clearly so collaboration stays smooth and decisions stay grounded.',
      },
    ],
    stats: [
      { value: '4', label: 'Projects highlighted' },
      { value: '5', label: 'Skill categories' },
      { value: '4', label: 'Certifications listed' },
      { value: '3', label: 'Social profiles linked' },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected work focused on solving real-world problems with practical engineering.',
    subtitle:
      'A few portfolio pieces that show how I approach interfaces, APIs, and product structure.',
    items: [
      
      {
        title: 'KirshiAI',
        summary: 'Helping farmers make smarter decisions',
        description:
          'Krishi AI is an agriculture-focused platform that helps farmers identify crop diseases using a fine-tuned AI model trained on 12 diseases across wheat, rice, and sugarcane. It also features a RAG-based chatbot that provides relevant farming guidance and answers agricultural queries. To further improve accessibility, support for Hindi and Punjabi voice interactions is currently being developed.',
        visual: 'KI',
        tags: ['React', 'FastAPI', 'PineCone(vector DB)', 'Fine tunning','RAG-based chatbot','TensorFlow','LLM'],
        github: 'https://github.com/Gaganjeet-Singh/krishiAI',
        live: 'https://krishi-ai-sage.vercel.app/',
        status: 'Live project',
      },
      {
        title: 'DryWell',
        summary: 'Dry cleaning web app',
        description:
          'DryWell is an online dry-cleaning platform that simplifies laundry and garment care services through a seamless digital experience. Users can schedule pickups and manage cleaning requests from a single platform. The service is designed to make professional dry cleaning more convenient, reliable, and accessible for everyday customers.',
        visual: 'DW',
        tags: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Bootstrap'],
        github: 'https://github.com/Gaganjeet-Singh/DryWell',
        live: 'https://dry-well.vercel.app/',
        status: 'Live project',
      },
      {
        title: 'CodeIntel',
        summary: 'Code suggestion and improvement tool',
        description:
          'CodeIntel is a code suggestion and improvement tool that helps developers write better code faster. It provides intelligent suggestions based on context and coding best practices.',
        visual: 'CI',
        tags: ['React', 'Express.js', 'MongoDB', 'LLM','OpenAI API','FastAPI'],
        github: 'https://github.com/Gaganjeet-Singh/CodeIntel',
        live: '',
        status: 'In development',
      },
      
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Academic foundations paired with hands-on technical practice.',
    subtitle:
      'A snapshot of study areas, working tools, and the credentials currently featured in the portfolio.',
    entries: [
      {
        institution: 'Punjabi University',
        degree: 'Bachelor of Technology',
        field: 'Computer Science',
        duration: '2021 - 2025',
        location: 'Patiala, India',
        highlights: [
          
          'Specialization in machine learning and deep learning'
          
        ],
      },
      
    ],
    skills: [
      {
        category: 'Programming Languages',
        items: ['Python', 'JavaScript', 'SQL', 'C++'],
      },
      {
        category: 'AI/ML Frameworks',
        items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV','Langchain','LangGraph'],
      },
      {
        category: 'Data Science',
        items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
      },
      {
        category: 'Web Technologies',
        items: ['React', 'Node.js', 'Express','FastAPI'],
      },
      {
        category: 'DataBases',
        items: ['MySQL', 'MongoDB', 'Vector Databases(Pinecone)'],
      },
      {
        category: 'Tools and Platforms',
        items: ['Git', 'Docker', 'Jupyter Notebook'],
      },
    ],
    certifications: [
      {
        title: 'Retrieval Augmented Generation (RAG) ',
        issuer: 'DeepLearning.AI by Andrew Ng',
        
      },
      {
        title: 'Generative AI',
        issuer: 'Google Skills',
        
      },
      {
        title: 'Large Language Models (LLMs)',
        issuer: 'Google Skills',
      
      },
      
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let us build something useful and well-crafted.',
    subtitle:
      'If you have a project idea, collaboration opportunity, or role in mind, send a message here.',
    email: 'gagandhiman2006@gmail.com',
    phone: '+91 88723-48531',
    location: 'Patiala, India',
    details: [
      {
        icon: 'mail',
        label: 'Email',
        value: 'gagandhiman2006@gmail.com',
        href: 'mailto:gagandhiman2006@gmail.com',
      },
      {
        icon: 'phone',
        label: 'Phone',
        value: '+91 88723-48531',
        href: 'tel:+918872348531',
      },
      {
        icon: 'map',
        label: 'Location',
        value: 'Patiala, India',
        href: '',
      },
    ],
  },
};
