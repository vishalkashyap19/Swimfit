// ─── Coaches ───────────────────────────────────────────
export const coaches = [
  {
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Olympic Trainer & Head Coach",
    experience: "15 years",
    specialty: "Competitive Swimming",
    certifications: ["Olympic Coach", "FINA Level 5", "CPR Certified"],
    achievements: "Trained 12 national champions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face",
    bio: "Former Olympic swimmer specializing in stroke technique and race strategy.",
    availability: "Mon-Sat: 5AM-9AM, 6PM-9PM",
  },
  {
    slug: "mike-chen",
    name: "Mike Chen",
    title: "Kids Specialist & Senior Coach",
    experience: "12 years",
    specialty: "Youth Development",
    certifications: ["Child Safety Expert", "Youth Coach Level 4", "First Aid"],
    achievements: "Taught 500+ children to swim",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
    bio: "Dedicated to making swimming fun and safe for children.",
    availability: "Tue-Sun: 3PM-8PM",
  },
  {
    slug: "emma-davis",
    name: "Emma Davis",
    title: "Fitness & Wellness Coach",
    experience: "10 years",
    specialty: "Aqua Fitness",
    certifications: ["Fitness Trainer", "Aqua Aerobics", "Rehabilitation Specialist"],
    achievements: "500+ successful transformations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face",
    bio: "Combines swimming with fitness training for holistic wellness.",
    availability: "Mon-Fri: 6AM-8AM, 7PM-9PM",
  },
  {
    slug: "david-martinez",
    name: "David Martinez",
    title: "Advanced Techniques Coach",
    experience: "14 years",
    specialty: "Stroke Refinement",
    certifications: ["Masters Coach", "Biomechanics Specialist", "Video Analysis"],
    achievements: "Published swimming research papers",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
    bio: "Uses video analysis to perfect swimming form for intermediate to advanced swimmers.",
    availability: "Wed-Sun: 5AM-8AM",
  },
  {
    slug: "lisa-wong",
    name: "Lisa Wong",
    title: "Beginner & Adult Coach",
    experience: "8 years",
    specialty: "Adult Education",
    certifications: ["Adult Learning Specialist", "Anxiety Management", "Safety Certified"],
    achievements: "Helped 300+ adults overcome water fear",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop&crop=face",
    bio: "Patient approach to helping adults overcome fear of water.",
    availability: "Mon-Sat: 7AM-9AM, 8PM-9PM",
  },
  {
    slug: "james-thompson",
    name: "James Thompson",
    title: "Endurance & Triathlon Coach",
    experience: "11 years",
    specialty: "Distance Swimming",
    certifications: ["Triathlon Coach", "Endurance Training", "Nutrition Expert"],
    achievements: "50+ triathlon finishers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    bio: "Former triathlete coaching swimmers for long-distance and open water events.",
    availability: "Tue-Sat: 5AM-7AM, 6PM-8PM",
  },
];

export type Coach = (typeof coaches)[0];

// ─── Programs ──────────────────────────────────────────
export const programs = [
  {
    id: 1,
    category: "Kids",
    title: "Junior Swimmers (5–12 years)",
    icon: "baby",
    description: "Fun and safe introduction to swimming for children",
    features: ["Water safety basics", "Stroke fundamentals", "Confidence building", "Parent observation"],
    batches: [
      { time: "6:00 AM – 7:00 AM", coach: "Emma Davis", level: "Beginner", duration: "3 months" },
      { time: "4:00 PM – 5:00 PM", coach: "Sarah Johnson", level: "Intermediate", duration: "3 months" },
      { time: "5:00 PM – 6:00 PM", coach: "Mike Chen", level: "Advanced", duration: "3 months" },
    ],
  },
  {
    id: 2,
    category: "Adults",
    title: "Adult Learners (18+ years)",
    icon: "user",
    description: "Never too late to learn! Start your swimming journey",
    features: ["Overcome water fear", "Basic to advanced strokes", "Breathing techniques", "Flexible schedules"],
    batches: [
      { time: "7:00 AM – 8:00 AM", coach: "Mike Chen", level: "Beginner", duration: "2 months" },
      { time: "8:00 PM – 9:00 PM", coach: "Emma Davis", level: "All Levels", duration: "2 months" },
    ],
  },
  {
    id: 3,
    category: "Professional",
    title: "Competitive Training",
    icon: "trophy",
    description: "Advanced training for competitive swimmers",
    features: ["Race preparation", "Technique refinement", "Endurance building", "Competition strategy"],
    batches: [
      { time: "5:00 AM – 6:30 AM", coach: "Sarah Johnson", level: "Advanced", duration: "6 months" },
      { time: "6:30 PM – 8:00 PM", coach: "Sarah Johnson", level: "Elite", duration: "6 months" },
    ],
  },
  {
    id: 4,
    category: "Fitness",
    title: "Aqua Fitness & Wellness",
    icon: "dumbbell",
    description: "Low-impact workout for fitness and rehabilitation",
    features: ["Cardio training", "Weight management", "Joint-friendly exercise", "Stress relief"],
    batches: [
      { time: "6:00 AM – 7:00 AM", coach: "Emma Davis", level: "All Levels", duration: "1 month" },
      { time: "7:00 PM – 8:00 PM", coach: "Mike Chen", level: "All Levels", duration: "1 month" },
    ],
  },
];

export type Program = (typeof programs)[0];

// ─── Products ──────────────────────────────────────────
export const products = [
  {
    category: "Goggles",
    items: [
      { name: "Pro Vision Goggles", price: "₹1,299", description: "Anti-fog, UV protection", color: "Blue/Black" },
      { name: "Junior Swim Goggles", price: "₹799", description: "Comfortable fit for kids", color: "Pink/Blue" },
      { name: "Competition Goggles", price: "₹1,899", description: "Racing certified", color: "Clear/Silver" },
    ],
  },
  {
    category: "Swim Caps",
    items: [
      { name: "Silicone Cap", price: "₹399", description: "Durable and comfortable", color: "Multiple colors" },
      { name: "Kids Fun Cap", price: "₹299", description: "Cartoon designs", color: "Assorted" },
      { name: "Competition Cap", price: "₹599", description: "Hydrodynamic design", color: "Team colors" },
    ],
  },
  {
    category: "Swimwear",
    items: [
      { name: "Men's Swim Trunks", price: "₹1,499", description: "Quick-dry fabric", color: "Navy/Black" },
      { name: "Women's One-Piece", price: "₹2,299", description: "Chlorine resistant", color: "Multiple" },
      { name: "Kids Swimsuit", price: "₹899", description: "UV protection", color: "Bright colors" },
    ],
  },
];

// ─── Pool Party Packages ───────────────────────────────
export const partyPackages = [
  {
    name: "Kids Birthday Bash",
    duration: "3 hours",
    capacity: "Up to 25 kids",
    price: "₹25,000",
    popular: false,
    features: [
      "Dedicated pool area",
      "Birthday decorations",
      "Party games & activities",
      "Cake cutting ceremony",
      "Photography session",
      "Complimentary snacks",
    ],
  },
  {
    name: "Premium Party Experience",
    duration: "4 hours",
    capacity: "Up to 50 guests",
    price: "₹45,000",
    popular: true,
    features: [
      "Full pool access",
      "DJ & sound system",
      "LED lighting setup",
      "Catering service",
      "Professional photography",
      "Lifeguard supervision",
      "Decoration & setup",
      "Party coordinator",
    ],
  },
  {
    name: "Corporate Team Event",
    duration: "5 hours",
    capacity: "Up to 100 people",
    price: "₹75,000",
    popular: false,
    features: [
      "Exclusive pool booking",
      "Team building activities",
      "Professional DJ",
      "Full catering service",
      "Audio-visual equipment",
      "Event photography",
      "Dedicated staff",
      "Custom branding options",
    ],
  },
];

// ─── Stats ─────────────────────────────────────────────
export const stats = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 12, suffix: "+", label: "Expert Coaches" },
  { value: 15, suffix: " yrs", label: "Experience" },
  { value: 50, suffix: "+", label: "Awards Won" },
];

// ─── Testimonials ──────────────────────────────────────
export const testimonials = [
  { name: "John Smith", text: "My kids absolutely love their swimming classes here. The coaches are patient and professional!", rating: 5 },
  { name: "Lisa Wong", text: "Best swimming facility in town. Clean pools and excellent coaching staff.", rating: 5 },
  { name: "David Brown", text: "I went from being afraid of water to swimming confidently in just 3 months!", rating: 5 },
];
