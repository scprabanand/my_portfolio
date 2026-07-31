export interface Education {
  degree: string;
  institution: string;
  year?: string;
  details?: string;
  score?: string;
}

export interface Experience {
  role: string;
  institution: string;
  period: string;
  description: string[];
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  doi?: string;
  type: 'Journal' | 'Conference' | 'Book Chapter';
}

export interface Patent {
  title: string;
  applicationNo: string;
  date: string;
  status: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  prize?: string;
}

export interface Consultancy {
  title: string;
  client: string;
  revenue: string;
  description: string;
}

export interface Certification {
  name: string;
  institution: string;
  year: string;
}

export interface ProfileData {
  name: string;
  title: string;
  currentRole: string;
  institution: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    scholar: string;
  };
  about: string;
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  patents: Patent[];
  achievements: Achievement[];
  consultancy: Consultancy[];
  certifications: Certification[];
}

export const profileData: ProfileData = {
  name: "Dr. Prabanand S C",
  title: "Ph.D., Anna University, Chennai",
  currentRole: "Assistant Professor | AI Special Labs In-Charge | T&P Coordinator",
  institution: "Bannari Amman Institute of Technology, Sathyamangalam",
  department: "Artificial Intelligence and Data Science",
  email: "scprabanand@gmail.com",
  phone: "+91 9791456452",
  location: "Dindigul, Tamil Nadu, India",
  socialLinks: {
    linkedin: "https://in.linkedin.com/in/prabanandsc",
    github: "https://github.com/prabanand-sc",
    scholar: "https://scholar.google.com/citations?user=7Z5Py2AAAAAJ&hl=en",
  },
  about: "Assistant Professor with a passion for Artificial Intelligence, Blockchain, and Social Impact projects. Currently transitioning from a Ph.D. scholar to a full-time academic leader with extensive experience in mentoring students for national-level hackathons (SIH) and leading AI-based consultancy projects for government and industrial sectors.",
  education: [
    {
      degree: "Ph.D.",
      institution: "Anna University, Chennai",
      details: "Thesis: 'Hybrid Optimization Strategy for Enhancing Financial Security in Private Ethereum Consortium Blockchain'",
      year: "Completed"
    },
    {
      degree: "M.Tech (IT)",
      institution: "SNS College of Technology, Coimbatore",
      year: "2013"
    },
    {
      degree: "B.Tech (IT)",
      institution: "Adhiparasakthi Engineering College, Melmaruvathur",
      year: "2010"
    }
  ],
  experience: [
    {
      role: "Assistant Professor | AI Special Labs In-Charge | T&P Coordinator",
      institution: "Bannari Amman Institute of Technology",
      period: "Jan 2022 - Present",
      description: [
        "Lead AI Special Laboratory and design cutting-edge AI training programs.",
        "Mentor student projects, leading to high-impact publications and patents.",
        "Supervise national-level hackathon teams (SIH) with multiple podium finishes.",
        "Orchestrate social-impact AI projects including collaborations with law enforcement.",
        "Coordinate Training and Placement activities for the department."
      ]
    },
    {
      role: "Assistant Professor",
      institution: "Nadar Saraswathi College of Engg, Theni",
      period: "Jun 2014 - Jan 2022",
      description: [
        "Delivered courses in C, Python, DBMS, OS, and Networks.",
        "Managed laboratory infrastructure as Lab In-Charge.",
        "Organized technical symposiums and faculty development programs.",
        "Mentored undergraduate research and capstone projects."
      ]
    }
  ],
  publications: [
    {
      title: "Advanced Financial Security System Using Smart Contract in Private Ethereum Consortium Blockchain With Hybrid Optimization Strategy",
      journal: "Scientific Reports (Nature)",
      year: "2025",
      doi: "10.1038/s41598-025-89404-3",
      type: "Journal"
    },
    {
      title: "A privacy preserving and auditable blockchain framework for suspicious trades detection",
      journal: "Journal of Mathematics (Hindawi)",
      year: "2025",
      type: "Journal"
    },
    {
      title: "Deep learning neural networks with dual-view pyramid pooling algorithm for better confidence calibration and medical image classification",
      journal: "Advances in Electrical and Computer Technologies",
      year: "2025",
      type: "Journal"
    },
    {
      title: "Secure Healthcare Data Sharing using Blockchain and ML",
      journal: "Concurrency and Computation: Practice and Experience",
      year: "2024",
      type: "Journal"
    },
    {
      title: "Intelligent Ticketing Model on Public Blockchains",
      journal: "Journal of Advanced Research in Dynamical and Control Systems",
      year: "2023",
      type: "Journal"
    },
    {
      title: "Machine Learning Based Epilepsy Detection using EEG Data",
      journal: "Indian Journal of Natural Sciences",
      year: "2022",
      type: "Journal"
    },
    {
      title: "AUTO-MATIC LEAF DISEASE DETECTION",
      journal: "International Journal of Recent Trends in Engineering & Research (IJRTER)",
      year: "2021",
      type: "Journal"
    },
    {
      title: "Sequestrate Protection and efficient Invasion Elusion for Cloudlet-mesh based Iatrical Data Sharing",
      journal: "International Journal of Scientific & Engineering Research (IJSER)",
      year: "2018",
      type: "Journal"
    },
    {
      title: "Identifying key loggers and software detection techniques in Windows",
      journal: "International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET)",
      year: "2016",
      type: "Journal"
    },
    {
      title: "Identification of key loggers in mobile devices using Support vector machine",
      journal: "International Journal of Applied Engineering Research (IJAER)",
      year: "2015",
      type: "Journal"
    },
    {
      title: "Anomaly Detection using Adaptive Neuro-Fuzzy Inference System",
      journal: "International Journal of Computer Applications (IJCA)",
      year: "2014",
      type: "Journal"
    },
    {
      title: "Deep Learning Neural Networks with Dual-View Pyramid Pooling Algorithm for Better Confidence Calibration and Medical Image Classification",
      journal: "Proc. 6th International Conference on Advances in Electrical and Computer Technologies (ICAECT 2024)",
      year: "2024",
      type: "Conference"
    },
    {
      title: "Smart Contract-Based Advanced Financial Security System: A Literature Review",
      journal: "Proc. IEEE RMKMATE 2023",
      year: "2023",
      type: "Conference"
    },
    {
      title: "Innovative Online Ticketing Model on an Intelligent Public Blockchain",
      journal: "Proc. 5th ICICV 2023",
      year: "2023",
      type: "Conference"
    },
    {
      title: "Electroencephalogram Data Analysed Through the Lens of Machine Learning to Detect Signs of Epilepsy",
      journal: "Proc. 4th ICIRCA 2022",
      year: "2022",
      type: "Conference"
    },
    {
      title: "The Artificial Intelligence Privacy Protection in Cyberspace",
      journal: "Proc. Recent Innovations in Information and Computing Technologies",
      year: "2022",
      type: "Conference"
    },
    {
      title: "Keyloggers Software Detection Techniques",
      journal: "Proc. IEEE ISCO 2016",
      year: "2016",
      type: "Conference"
    },
    {
      title: "Conciseness Agricultural Plenitude Detection Vicissitude Eclectic Transformation Model",
      journal: "Proc. ICIEST 2019",
      year: "2019",
      type: "Conference"
    }
  ],
  patents: [
    {
      title: "FIREWALL INTEGRATION WITH REAL-TIME MONITORING AND THREAT MANAGEMENT SYSTEM",
      applicationNo: "202441015761",
      date: "06.03.2024",
      status: "Published"
    },
    {
      title: "VISION BASED TRANSCRIBER FOR VISUALLY IMPAIRED",
      applicationNo: "202241074768",
      date: "23.12.2022",
      status: "Published"
    },
    {
      title: "ATTENDANCE MONITORING SYSTEM WITH FACE RECOGNITION, IRIS, MASK AND BODY TEMPERATURE DETECTION",
      applicationNo: "202241007691",
      date: "14.02.2022",
      status: "Published"
    }
  ],
  achievements: [
    {
      title: "Winner - Smart India Hackathon (SIH) Dec 2025",
      description: "Software Edition, Bangalore. Team Lead/Mentor for the project 'Audio Language Model'.",
      year: "2025",
      prize: "Rs. 1,50,000"
    },
    {
      title: "Winner - Smart India Hackathon (SIH) Aug 2022",
      description: "Hardware Edition, Noida. Mentor for project 'Attendance Monitoring System'.",
      year: "2022",
      prize: "Rs. 1,00,000"
    },
    {
      title: "Runner-up - Smart India Hackathon (SIH) Dec 2023",
      description: "Software Edition, Chhattisgarh.",
      year: "2023"
    },
    {
      title: "First Runner-up - Smart India Hackathon (SIH) Mar 2019",
      description: "Software Edition, Assam.",
      year: "2019"
    }
  ],
  consultancy: [
    {
      title: "SecureFestOps",
      client: "SP Office Cyber Crime, Thoothukudi",
      revenue: "Rs. 50,000",
      description: "Developed an ML Web Platform for analyzing and managing festival vehicle flow."
    },
    {
      title: "AI-based People Counting System",
      client: "CODISSIA Coimbatore",
      revenue: "Rs. 1,00,000",
      description: "Implemented an automated people counting solution for Agri Tech 2024."
    }
  ],
  certifications: [
    {
      name: "Machine Learning Specialization",
      institution: "Coursera (DeepLearning.AI)",
      year: "2023"
    },
    {
      name: "Blockchain Architecture Design and Use Cases",
      institution: "NPTEL (Gold/Elite)",
      year: "2022"
    },
    {
      name: "Introduction to IoT",
      institution: "NPTEL",
      year: "2021"
    }
  ]
};
