# Study Mate

**Live Site URL:** [Study Mate - Connect with Study Partners](https://study-mate-sz.web.app/)

## About Study Mate

Study Mate is a comprehensive platform designed to help students find and connect with study partners who share similar academic interests, goals, and schedules. Whether you're preparing for exams, working on projects, or simply looking for motivated peers to study with, Study Mate makes it easy to build meaningful study connections.

---

## Key Features

- Personalized Profile Creation** - Create a detailed profile with your subjects, academic goals, study schedule, and preferences to help others find you as the perfect study partner.

- Advanced Partner Discovery** - Browse through all registered study partners with powerful sort and search filters to find matches based on subjects, availability, location, and study preferences.

- Top Partners Showcase** - View the most active and popular study partners directly on the home page, making it easier to connect with engaged and committed students.

- Smart Connection Management** - Send connection requests to potential study partners with automatic partner count updates, and manage all your connections in a dedicated "My Connections" page for easy organization.

- Manage & Update Connections** - Organize, delete, or update your connections to maintain effective study groups and plan collaborative study sessions seamlessly.

---

## Technology Stack

### Frontend
- **React 19.1.1** - Modern UI library for building interactive user interfaces
- **React Router 7.9.3** - Client-side routing for seamless navigation
- **Tailwind CSS 4.1.14** - Utility-first CSS framework for responsive design
- **DaisyUI 5.1.27** - Beautiful component library built on Tailwind
- **Recharts 3.2.1** - Composable charting library for data visualization
- **React Icons 5.5.0** & **Lucide React** - Comprehensive icon libraries
- **Axios 1.12.2** - Promise-based HTTP client for API requests
- **React Toastify 11.0.5** - Toast notifications for user feedback
- **SweetAlert2 11.26.0** - Beautiful, responsive popup boxes
- **React Spinners 0.17.0** - Loading indicators for better UX

### Backend
- **Node.js & Express 5.1.0** - Fast, minimalist web framework
- **MongoDB 7.0.0** - NoSQL database for flexible data storage
- **Firebase Admin 13.6.0** - Authentication and user management
- **CORS** - Cross-origin resource sharing middleware
- **dotenv** - Environment variable management
- **Nodemon** - Development server with auto-restart

---

## Application Routes & Pages

### Public Routes
- **`/`** - Home page featuring top study partners and platform overview
- **`/findPartners`** - Browse all study partners with advanced search and filter options
- **`/login`** - User authentication page
- **`/register`** - New user registration
- **`/forgetPassword`** - Password recovery page

### Protected Routes (Authentication Required)
- **`/createPartner`** - Create your study partner profile
- **`/profile`** - View and manage your personal profile
- **`/myConnection`** - View all your connected study partners
- **`/partnerDetails/:id`** - View detailed information about a specific partner

---

## How Study Mate Works

1. **Create Your Profile** - Sign up and build your Study Mate profile with subjects, goals, and study schedule
2. **Find Partners** - Browse all profiles on the Find Partner page using intelligent sort and search filters
3. **Top Partners on Home** - Discover the most active and popular study partners featured on the home page
4. **View Partner Details** - Open detailed partner profiles to send connection requests with automatic count updates
5. **My Connections** - Access all your connected study partners in one centralized location
6. **Manage Connections** - Organize, update, or remove connections to maintain effective study groups

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Firebase Account

### Client Setup
```bash
# Clone the repository
git clone https://github.com/ZiauddinJim/Study-mate-client-sz

# Navigate to client directory
cd study-mate/client

# Install dependencies
npm install

# Create .env file and add your environment variables
VITE_FIREBASE_API_KEY=your_api_key
VITE_API_URL=http://localhost:3000

# Start development server
npm run dev
```

### Server Setup
```bash
# Clone the repository
git clone https://github.com/ZiauddinJim/Study-mate-server-sz

# Navigate to server directory
cd study-mate/server

# Install dependencies
npm install

# Create .env file and add your environment variables
MONGODB_URI=your_mongodb_connection_string
FIREBASE_ADMIN_SDK=your_firebase_admin_credentials
PORT=5000

# Start server
npm start
```
