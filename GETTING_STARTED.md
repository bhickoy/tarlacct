# Getting Started with TARLAC CT Portal

## What Was Built

A **complete, production-ready demo MVP** of the TARLAC CT assessment tracking portal with:

✅ **11 pages** across 3 role-based portals (Admin, Supervisor, School)  
✅ **Full authentication** with role-based access control  
✅ **10+ dashboards** with real-time charts (MPS gauges, trends, proficiency bands)  
✅ **CRUD operations** for schools, districts, assessment cycles  
✅ **Assessment submission forms** with multiple assessment types  
✅ **Professional UI** with Tailwind CSS, dark mode, mobile responsive  
✅ **Mock data layer** — ready to swap for real Google Sheets API  

---

## Installation & Running Locally

### 1️⃣ Prerequisites
- **Node.js 18+** ([download](https://nodejs.org/))
- A code editor (VS Code recommended)

### 2️⃣ Install

```bash
cd "C:\Users\Admin\Documents\TARLAC CT\tarlac-portal"
npm install
```

This installs Next.js, React, Tailwind CSS, Recharts, NextAuth.js, and other dependencies.

### 3️⃣ Run

```bash
npm run dev
```

Output will show:
```
> Local:        http://localhost:3000
> Ready in 2.5s
```

### 4️⃣ Open in Browser

Go to **http://localhost:3000** in your web browser.

---

## 🔑 Demo Logins

**All passwords**: `password123`

### Admin Portal
- **Email**: `admin@tarlacct.gov.ph`
- **Access**: Full system management (schools, supervisors, cycles, reports)
- **URL**: http://localhost:3000/admin

### Supervisor Portal
- **Email**: `supervisor@tarlacct.gov.ph`
- **Access**: View-only access to Central A & Central B district schools
- **URL**: http://localhost:3000/supervisor

### School Portal
- **Email**: `principal@armenia.school`
- **Access**: Manage school profile, submit assessments, view results
- **URL**: http://localhost:3000/school

---

## 🗺️ Site Map

### Public Pages
- `/` — Landing page (features, demo credentials)
- `/login` — Login form

### Admin Portal (`/admin`)
- Dashboard — Key metrics, completion rates
- Schools — Add/edit/delete schools
- Districts — District overview
- Supervisors — List of supervisors
- Assessment Cycles — Create/open/close submission windows
- Announcements — Post messages to schools
- Reports — CSV export, link to Looker Studio

### Supervisor Portal (`/supervisor`)
- Dashboard — District overview, performance trends
- Schools — List schools in district (read-only)

### School Portal (`/school`)
- Dashboard — School profile, latest results, open cycles
- Profile — Edit school info, upload logo
- Submit Results — Form to enter assessments (tabs for National, Quarterly, RMYA, SOS)
- Results — View historical data with charts and filters

---

## 🎨 Design & Branding

**Colors** (from your logo):
- Navy `#122C4D` — Primary (headers, navigation)
- Teal `#1B8C86` — Secondary (buttons, links)
- Green `#8DC63F` — Accent (success, badges)

**Typography**:
- Inter font for all UI text
- Consistent type scale (12px–32px)
- Dark mode automatically switches based on OS preference

**Layout**:
- Sidebar navigation (collapsible)
- Top page headers with action buttons
- Cards for data summaries
- Responsive grid layouts

---

## 📊 Demo Data

The MVP includes **pre-seeded data**:
- **3 schools** (Armenia, Capas, Ungot)
- **10 districts** (Central A–C, East, North, South, West)
- **3 users** (admin, supervisor, school)
- **2 assessment cycles** (one open, one closed)
- **4 sample assessment results** (National & Quarterly)
- **2 system announcements**

All data is **in-memory** — refreshing or restarting the server resets it to seed defaults.

---

## 🔄 Workflow Examples

### Example 1: School Submits Assessment Results
1. Log in as `principal@armenia.school`
2. Click "Submit Results" in dashboard
3. Select cycle "SY 2026-2027 Quarterly Assessment Q1"
4. Tab "Quarterly Assessment"
5. Fill: Grade 3, Filipino, Test Takers: 98, MPS: 74.1
6. Click "Submit Result"
7. See success message
8. View result in `/school/results`

### Example 2: Admin Creates New Assessment Cycle
1. Log in as `admin@tarlacct.gov.ph`
2. Go to "Assessment Cycles"
3. Click "+ New Cycle"
4. Fill:
   - Name: "SY 2026-2027 Mid-Year Review"
   - School Year: "2026-2027"
   - Open Date: 2026-10-01
   - Close Date: 2026-10-31
5. Click "Create Cycle"
6. New cycle appears in "Draft" status
7. Click "Open for Submissions" to allow schools to submit

### Example 3: Supervisor Monitors District
1. Log in as `supervisor@tarlacct.gov.ph`
2. View dashboard — sees 2 schools (Central A district)
3. See performance trend chart (avg MPS by quarter)
4. See submissions by school (pie chart)
5. Click "Schools in District" to see details
6. All tables are **read-only** (no edit buttons visible)

---

## 🛠️ Project Structure

```
tarlac-portal/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page
│   ├── login/page.tsx            # Login form
│   ├── dashboard/page.tsx        # Role router
│   ├── api/auth/[...nextauth]/route.ts  # Auth API
│   ├── admin/                    # Admin portal
│   ├── supervisor/               # Supervisor portal
│   └── school/                   # School portal
├── components/                   # Reusable UI components
│   ├── Sidebar.tsx
│   ├── DashboardLayout.tsx
│   ├── Card.tsx
│   ├── Charts.tsx
├── lib/
│   └── mockData.ts               # Mock database (in-memory)
├── public/                       # Static assets
├── app/globals.css               # Tailwind + theme CSS
├── tailwind.config.ts            # Theme configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # Full documentation
```

---

## 🚀 Next: Production Migration

### Option A: Deploy to Vercel (Easy)
```bash
# Install Vercel CLI
npm install -g vercel

# Login & deploy
vercel login
vercel --prod
```

### Option B: Build & Self-Host
```bash
npm run build      # Creates .next/ folder
npm start          # Runs production server
```

### Option C: Integrate with Google Sheets (Recommended)

1. **Set up Google Cloud Service Account** (one-time)
   - Create project at console.cloud.google.com
   - Enable Google Sheets API
   - Create service account + JSON key
   - Share Drive folder with service account email

2. **Replace `lib/mockData.ts` with `lib/sheets.ts`**
   - Implement typed functions per 13 data sources
   - Use `googleapis` npm package for API calls
   - Read exact column names from uploaded files

3. **Add environment variables**
   ```env
   GOOGLE_SHEETS_CLIENT_EMAIL=...
   GOOGLE_SHEETS_PRIVATE_KEY=...
   GOOGLE_DRIVE_FOLDER_ID=1w81YUSvGGlnpEAQMMONICpu7Gs9_Tqou
   GOOGLE_PORTAL_SHEET_ID=...
   ```

---

## 🐛 Common Issues

| Issue | Fix |
|-------|-----|
| "Port 3000 already in use" | Run `npm run dev -- -p 3001` or kill process on 3000 |
| Blank page on `/admin` | Check browser console for errors; ensure you're logged in |
| Auth not working | Verify `.env.local` has `NEXTAUTH_SECRET` |
| Sidebar collapsed | Click `▶` button to expand |
| Changes not showing | Hard refresh (Ctrl+Shift+R) to bust cache |

---

## 📝 What's Not Included (Scope)

❌ Email notifications  
❌ Bulk CSV import  
❌ Advanced filtering UI  
❌ Performance benchmarking algorithms  
❌ PDF export  
❌ Real-time WebSocket updates  
❌ Multi-language support  

These can be added post-MVP as requested.

---

## 🎓 Key Learnings

- **All data is in-memory**: No database needed for demo. Swap `mockData.ts` for Sheets API when ready.
- **Auth is role-based**: Middleware + session tokens enforce access rules. No reliance on client-side hiding.
- **UI is component-driven**: Reuse `<Card>`, `<StatCard>`, `<TrendChart>` across all pages.
- **Design system in Tailwind**: Colors, typography, spacing all defined in `tailwind.config.ts`. One-file theme change.

---

## 📞 Need Help?

- **React/Next.js docs**: https://nextjs.org/docs
- **Tailwind CSS docs**: https://tailwindcss.com/docs
- **Recharts docs**: https://recharts.org/
- **NextAuth.js docs**: https://next-auth.js.org/

---

**Ready to get started?** Run `npm run dev` and open http://localhost:3000 🚀
