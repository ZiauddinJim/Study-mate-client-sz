
import { FaUserGraduate, FaChalkboardTeacher, FaHandshake, FaGlobeAmericas, FaLaptopCode, FaRegSmileBeam } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Smart Matching",
    description: "Our AI-driven algorithm pairs you with study partners who match your learning style and goals.",
    icon: FaHandshake,
  },
  {
    id: 2,
    title: "Global Community",
    description: "Connect with students from over 50 countries and broaden your cultural and academic horizons.",
    icon: FaGlobeAmericas,
  },
  {
    id: 3,
    title: "Secure Environment",
    description: "Verified profiles and safe communication channels ensure a worry-free study experience.",
    icon: MdOutlineSecurity,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any issues.",
    icon: BiSupport,
  },
];

// Statistics Data
export const statsData = [
  { id: 1, label: "Total Users", value: "10K+" },
  { id: 2, label: "Study Matches", value: "5000+" },
  { id: 3, label: "Countries", value: "50+" },
  { id: 4, label: "Success Stories", value: "1200+" },
];

// FAQ Data
export const faqData = [
  {
    id: 1,
    question: "How does the matching process work?",
    answer: "We analyze your profile, subjects of interest, and study schedule to recommend the best potential partners for you.",
  },
  {
    id: 2,
    question: "Is Study Mate free to use?",
    answer: "Yes! Basic matching and messaging are completely free. We also offer premium features for advanced tools.",
  },
  {
    id: 3,
    question: "Can I study multiple subjects?",
    answer: "Absolutely. You can list multiple subjects in your profile and find partners for each one.",
  },
  {
    id: 4,
    question: "How do I report a problem?",
    answer: "You can report users directly through their profile or contact our support team via the Help Center.",
  },
];

// Blogs Data (Mock)
export const blogsData = [
  {
    id: 1,
    title: "Top 10 Study Tips for Finals",
    excerpt: "Ace your exams with these proven strategies for effective revision...",
    date: "Oct 24, 2025",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Jenkins",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    content: `
      <p>Final exams are around the corner, and the pressure is on. But don't panic! With the right strategy, you can maximize your study time and ace those tests.</p>
      
      <h3>1. Create a Study Schedule</h3>
      <p>Don't just study randomly. Plan out your days, allocating specific time blocks for each subject. Be realistic about how much you can cover.</p>
      
      <h3>2. Use Active Recall</h3>
      <p>Instead of just re-reading notes, test yourself. Close your book and try to recite what you just learned. This forces your brain to retrieve information.</p>
      
      <h3>3. Take Regular Breaks</h3>
      <p>The Pomodoro technique is a game-changer. Study for 25 minutes, then take a 5-minute break. This keeps your mind fresh and focused.</p>
      
      <h3>4. Teach Someone Else</h3>
      <p>If you can explain a concept to someone else simply, you understand it well. Pair up with a study partner on Study Mate and quiz each other!</p>
      
      <h3>5. Get Enough Sleep</h3>
      <p>Pulling all-nighters is counterproductive. Your brain needs sleep to consolidate memories. Aim for 7-9 hours a night during exam season.</p>
    `
  },
  {
    id: 2,
    title: "Balancing Work and Study",
    excerpt: "Learn how to manage your time effectively when juggling a job and coursework...",
    date: "Nov 12, 2025",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Michael Chang",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    content: `
      <p>Juggling a job and university coursework is a challenge many students face. It requires discipline, organization, and a lot of coffee (occasionaly).</p>
      
      <h3>Prioritize Ruthlessly</h3>
      <p>Identify your most important tasks each day. Focus on what absolutely needs to get done and learn to say no to non-essential commitments.</p>
      
      <h3>Communicate with Your Employer</h3>
      <p>Let your boss know you are a student. Most employers will be understanding if you need flexibility during exam periods, provided you give them notice.</p>
      
      <h3>Use Your Commute</h3>
      <p>If you take public transport, use that time to review flashcards or listen to lecture recordings. Even 20 minutes a day adds up.</p>
    `
  },
  {
    id: 3,
    title: "The Benefits of Group Study",
    excerpt: "Why studying with others can boost your retention and motivation...",
    date: "Dec 05, 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Jessica Williams",
    authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
    content: `
      <p>Studying alone can be isolating and monotonous. Group study, when done right, can be a powerful tool for learning.</p>
      
      <h3>Motivation and Accountability</h3>
      <p>It's harder to procrastinate when you have a scheduled study session with others. Your peers can keep you accountable and on track.</p>
      
      <h3>Different Perspectives</h3>
      <p>Everyone learns differently. Your study partner might have a unique way of explaining a difficult concept that finally makes it click for you.</p>
      
      <h3>fill in the Gaps</h3>
      <p>You might have missed a detail in class that your partner caught. pooling your notes ensures everyone has a complete picture of the material.</p>
      
      <p>Find your perfect study group today on Study Mate!</p>
    `
  }
];
