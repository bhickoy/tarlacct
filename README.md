# TARLAC CT Portal

**Tracking & Automation of Records for Learning, Assessment & Content: Curriculum on Technology**

A comprehensive web portal for managing school assessment data, performance tracking, and reporting across the TARLAC district. Replaces the shared Google Sheet workflow with role-based logins, individual school dashboards, and real-time analytics.

---

## 🎯 Project Overview

### Problem Solved
- **Before**: All schools edited a single shared Google Sheet with no access control
- **After**: Each school logs in to their own account, submits data through a user-friendly form, and supervisors/admins monitor district-wide performance via dashboards

### Three Role-Based Portals

| Role | Access | Key Features |
|------|--------|--------------|
| **School** | Own data only | Profile management, assessment submission, results dashboard |
| **Supervisor** | District (read-only) | View all schools in their district, performance analytics |
| **Admin** | Full system | Manage schools/districts/supervisors, create assessment cycles, export reports |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **UI/Styling**: Tailwind CSS + custom component library
- **Authentication**: NextAuth.js (Credentials provider)
- **Data**: Google Sheets API v4 (live connection in production; mock data for demo)
- **Charts**: Recharts
- **Hosting**: Vercel (intended)
- **File Storage**: Vercel Blob (logos) — swappable for Google Drive

---

## 🚀 Quick Start (Demo Mode)

### Prerequisites
- Node.js 18+ (or Docker)
- npm / yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3. Demo Login Credentials

All demo accounts use password: **`password123`**

| Role | Email | Use Case |
|------|-------|----------|
| Admin | `admin@tarlacct.gov.ph` | System management |
| Supervisor | `supervisor@tarlacct.gov.ph` | District oversight |
| School | `principal@armenia.school` | School data entry |

---

## 📁 Project Structure

```
tarlac-portal/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── login/                  # Login page
│   ├── dashboard/              # Role router
│   ├── api/auth/[...nextauth]/ # Authentication API
│   ├── admin/                  # Admin portal
│   │   ├── page.tsx            # Dashboard
│   │   ├── schools/            # School CRUD
│   │   ├── districts/          # District overview
│   │   ├── supervisors/        # Supervisor management
│   │   ├── cycles/             # Assessment cycle CRUD
│   │   ├── announcements/      # System announcements
│   │   └── reports/            # Export & analytics
│   ├── supervisor/             # Supervisor portal
│   │   ├── page.tsx            # Dashboard
│   │   ├── schools/            # School list (read-only)
│   │   └── analytics/          # Analytics view
│   └── school/                 # School portal
│       ├── page.tsx            # Dashboard
│       ├── profile/            # School info edit
│       ├── submit/             # Assessment submission
│       └── results/            # Results & charts
├── components/                 # Reusable UI components
│   ├── Sidebar.tsx
│   ├── DashboardLayout.tsx
│   ├── Card.tsx
│   └── Charts.tsx
├── lib/
│   └── mockData.ts             # Mock data layer (in-memory)
├── public/                     # Static assets
├── tailwind.config.ts          # Theme & colors
├── tsconfig.json
├── next.config.js
├── package.json
└── .env.local                  # Environment variables
```

---

## 🎨 Branding & Colors

The portal uses TARLAC's official brand colors:

- **Primary (Navy)**: `#122C4D` — Main text, headers, and structure
- **Secondary (Teal)**: `#1B8C86` — Buttons, links, and interactive elements
- **Accent (Green)**: `#8DC63F` — Success states, badges, and highlights

All colors are defined in `tailwind.config.ts` and referenced via Tailwind utility classes, making theme changes a one-file update.

---

## 🔐 Authentication & Access Control

### How It Works
1. User logs in with email + password
2. NextAuth validates credentials against mock `Users` table
3. Session token carries `role`, `schoolId`, and `districtIds`
4. Middleware enforces role-based route protection
5. UI components hide/show actions based on role

### Role Enforcement
- **School**: Can only see/edit their own school ID
- **Supervisor**: Read-only access; can only see schools in their assigned districts
- **Admin**: Full access to all data and settings

### Demo Password
All demo users use `password123` (unhashed in mock mode for simplicity).  
**In production**, passwords are bcrypt-hashed and stored in Google Sheets.

---

## 📊 Data Model (Demo / Mock)

### New Portal Tables (separate from legacy)
- **Users** — Login accounts (email, password_hash, role, school_id/district_ids)
- **Districts** — 10 districts (Central A/B, East, North A/B, South A/B, West A/B/C)
- **Schools** — School profiles (name, head, enrollment, facilities)
- **AssessmentCycles** — Submission windows (open/close dates, status)
- **Announcements** — Admin → schools messages

### Legacy Data Sources (13 Google Sheets)
The production portal reads/writes to 13 existing response spreadsheets:
1. School Profile
2. School Performance Indicators
3. National Assessment (Elementary)
4. National Assessment (JHS)
5. Quarterly Assessment (Elementary, JHS, SHS)
6. RMYA (Elementary, JHS, SHS)
7. Most/Least Learned Competencies
8. Project SOS
9. Trainings Conducted

**Demo Mode**: Mock data replaces live Sheets API calls.  
**Production**: Replace `lib/mockData.ts` with `lib/sheets.ts` (Google Sheets API integration).

---

## 📝 Features Included in MVP

### ✅ Complete
- **Landing page** with feature overview and demo credentials
- **Authentication** with role-based redirects
- **Admin Dashboard** with key metrics and quick actions
- **Admin: Schools CRUD** — Add, edit, delete schools
- **Admin: Districts** — View district stats
- **Admin: Assessment Cycles** — Create and manage submission windows
- **Admin: Supervisors** — List supervisors and their districts
- **Admin: Announcements** — Post system-wide messages
- **Admin: Reports** — CSV export and link to legacy Data Studio
- **Supervisor Dashboard** — District overview and school list (read-only)
- **School Dashboard** — Profile summary, enrollment, open cycles, recent results
- **School: Profile** — Edit school info and upload logo
- **School: Submit Results** — Form to enter assessment data (tabs for different assessment types)
- **School: Results** — View historical results with charts and filters
- **Charts & Dashboards** — MPS gauges, proficiency bands, trend lines, donut charts
- **Mobile responsive** design
- **Dark mode** support (system preference + toggle)

### 🔧 Next Steps (Production Handoff)

1. **Replace mock data with Google Sheets API**
   - Create `lib/sheets.ts` with typed functions per source (Section 6 of spec)
   - Implement Google Service Account authentication
   - Share Drive folder with service account

2. **Set up environment variables**
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`
   - `GOOGLE_DRIVE_FOLDER_ID` = `1w81YUSvGGlnpEAQMMONICpu7Gs9_Tqou`
   - `GOOGLE_PORTAL_SHEET_ID` (new portal sheet)

3. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

4. **Close original Google Forms**
   - Once Sheets integration is live and verified, unpublish the 13 Google Forms
   - Data continues flowing to the same 13 response spreadsheets (via portal instead)

5. **Additional features** (post-MVP)
   - Profile picture upload & storage
   - Bulk import from CSV
   - Advanced filtering and sorting
   - Email notifications
   - Performance benchmarking
   - Historical trend analysis

---

## 🧪 Testing the MVP

### Demo Flow — School Submission

1. **Go to http://localhost:3000**
2. **Log in** as `principal@armenia.school` / `password123`
3. **View dashboard** — See school profile and open cycles
4. **Edit profile** → `/school/profile` — Update school head, contact info
5. **Submit results** → `/school/submit` — Fill in an assessment form
   - Select "SY 2026-2027 Quarterly Assessment Q1" cycle
   - Tab: "National Assessment" or "Quarterly Assessment"
   - Enter grade, subject, test takers, MPS
   - Submit
6. **View results** → `/school/results` — See charts and historical data

### Demo Flow — Admin Oversight

1. **Log in** as `admin@tarlacct.gov.ph` / `password123`
2. **Dashboard** — See system-wide metrics
3. **Manage Schools** → Add/edit/delete schools
4. **Create Cycle** → Set open/close dates, open for submissions
5. **View Reports** → Export CSV, link to Looker Studio

### Demo Flow — Supervisor Monitoring

1. **Log in** as `supervisor@tarlacct.gov.ph` / `password123`
2. **Dashboard** — See district overview (Central A & Central B)
3. **View Schools** → List of schools with submission status (read-only)
4. **No Edit Controls** — Verify UI doesn't show edit buttons

---

## 📦 Deployment

### To Vercel (Recommended)

```bash
git init
git add .
git commit -m "Initial commit: TARLAC CT Portal MVP"

# Link to Vercel
npm install -g vercel
vercel login
vercel

# Set environment variables in Vercel dashboard
# NEXTAUTH_SECRET, GOOGLE_SHEETS_* credentials, etc.

# Redeploy after env vars are set
vercel --prod
```

### Docker (Optional)

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000
```

```bash
docker build -t tarlac-ct-portal .
docker run -p 3000:3000 -e NEXTAUTH_SECRET=... tarlac-ct-portal
```

---

## 🔑 Environment Variables

### Required
```env
NEXTAUTH_SECRET=<your-secret-key>
NEXTAUTH_URL=http://localhost:3000
NODE_ENV=development
```

### For Production (Google Sheets Integration)
```env
GOOGLE_SHEETS_CLIENT_EMAIL=<service-account-email>
GOOGLE_SHEETS_PRIVATE_KEY=<base64-encoded-key-or-literal>
GOOGLE_DRIVE_FOLDER_ID=1w81YUSvGGlnpEAQMMONICpu7Gs9_Tqou
GOOGLE_PORTAL_SHEET_ID=<new-portal-sheet-id>
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "Module not found" errors | Run `npm install` to ensure all dependencies are installed |
| Auth session not persisting | Check `.env.local` has `NEXTAUTH_SECRET` and `NEXTAUTH_URL` |
| Sidebar not visible | Ensure you're logged in (redirects to `/login` if not) |
| Charts not rendering | Verify `recharts` is installed; check browser console for errors |
| Dark mode not working | Ensure `prefers-color-scheme` is set in OS or use theme toggle (if implemented) |

---

## 📝 Notes for the User

- **All demo data is in-memory**: Refreshing the page or restarting the server resets data to initial seed.
- **Passwords are not bcrypted in demo mode**: In production, use `bcryptjs.compare()` in auth route.
- **Google Sheets integration is stubbed**: Replace `lib/mockData.ts` with real API calls when ready.
- **Email notifications are not included**: Add Nodemailer or SendGrid for production.
- **Rate limiting is not implemented**: Add middleware when scaling to handle high traffic.

---

## 🤝 Support

For questions about this portal or the TARLAC CT project, contact the Curriculum Implementation Division.

**Values**: Transparency • Integrity • Accountability

---

## 📄 License

Internal use only. © 2026 TARLAC Curriculum Implementation Division.
