# Quick Start Guide - Derbyshire Ducks Website

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open Browser

Navigate to: `http://localhost:5173`

---

## 📝 Common Updates

### Update the Schedule

**File:** `src/features/schedule/components/schedule-page.tsx`

**Add a new game:**

```typescript
const upcomingGames: Game[] = [
  {
    date: "2025-11-15", // Format: YYYY-MM-DD
    time: "14:00", // Format: HH:MM (24-hour)
    opponent: "Team Name",
    location: "Venue Name",
    type: "home", // 'home' or 'away'
    result: "upcoming", // 'upcoming', 'win', or 'loss'
  },
  // Add more games here...
];
```

### Update Contact Email

**Files to update:**

1. `src/features/contact/components/contact-page.tsx` (line 35 & 223)
2. `src/components/layout/footer.tsx` (line 65)

Replace `derbyshireducks@gmail.com` with your new email.

### Update Instagram Handle

**Files to update:**

1. `src/components/layout/header.tsx` (line 54)
2. `src/components/layout/footer.tsx` (line 55)
3. `src/features/contact/components/contact-page.tsx` (line 234)

Replace `derbyshire_ducks` with your new handle.

### Change Team Colors

**File:** `tailwind.config.js`

```javascript
ducks: {
  green: "#026d47",   // Change these hex codes
  purple: "#5952c3",
  gold: "#ffd701",
}
```

After changing colors, restart the dev server.

### Add a New Page

1. **Create feature folder:**

   ```
   src/features/your-page/
   ├── components/
   │   └── your-page.tsx
   └── index.ts
   ```

2. **Create the page component:**

   ```typescript
   // src/features/your-page/components/your-page.tsx
   export function YourPage() {
     return (
       <div className="py-16 px-4 sm:px-6 lg:px-8">
         <div className="mx-auto max-w-7xl">
           <h1 className="text-4xl font-bold">Your Page Title</h1>
           {/* Your content here */}
         </div>
       </div>
     );
   }
   ```

3. **Export from index:**

   ```typescript
   // src/features/your-page/index.ts
   export { YourPage } from "./components/your-page";
   ```

4. **Add route in App.tsx:**

   ```typescript
   import { YourPage } from "./features/your-page";

   // In the Routes:
   <Route path="your-page" element={<YourPage />} />;
   ```

5. **Add to navigation in header.tsx:**
   ```typescript
   const navigation = [
     // ... existing items
     { name: "Your Page", href: "/your-page" },
   ];
   ```

### Update Team Information

**File:** `src/features/about/components/about-page.tsx`

Edit the text content in the JSX to reflect your team's actual history and story.

**File:** `src/features/team/components/team-page.tsx`

Update team description and position information.

---

## 🎨 Styling Tips

### Using Team Colors

```typescript
// Green
className = "bg-ducks-green text-white";

// Purple
className = "bg-ducks-purple text-white";

// Gold
className = "bg-ducks-gold text-black";

// Gradient
className = "bg-gradient-to-r from-ducks-green to-ducks-purple";
```

### Common Tailwind Classes

```typescript
// Spacing
className = "p-4"; // Padding all sides
className = "px-6 py-4"; // Padding x-axis and y-axis
className = "mt-8"; // Margin top
className = "mb-4"; // Margin bottom

// Text
className = "text-xl font-bold"; // Large, bold text
className = "text-gray-600"; // Gray colored text
className = "text-center"; // Center aligned

// Layout
className = "flex items-center justify-between"; // Flexbox
className = "grid grid-cols-1 md:grid-cols-3"; // Responsive grid
className = "max-w-7xl mx-auto"; // Centered container

// Responsive
className = "hidden md:block"; // Hidden on mobile, visible on tablet+
className = "text-sm md:text-lg"; // Small on mobile, large on desktop
```

---

## 🧩 Using UI Components

### Button

```typescript
import { Button } from '@/components/ui/button'

<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Large Button</Button>
```

### Card

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>;
```

### Input & Form Elements

```typescript
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

<div>
  <Label htmlFor="name">Name</Label>
  <Input id="name" type="text" placeholder="Enter name" />
</div>

<div>
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" rows={4} />
</div>
```

---

## 🛠️ Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Dependencies
npm install          # Install all dependencies
npm update          # Update dependencies
npm audit           # Check for security issues
```

---

## 📁 Where to Find Things

```
src/
├── components/
│   ├── layout/
│   │   ├── header.tsx      ← Navigation bar
│   │   ├── footer.tsx      ← Footer with links
│   │   └── layout.tsx      ← Page wrapper
│   └── ui/                 ← Reusable UI components
│
├── features/
│   ├── home/               ← Home page
│   ├── about/              ← About page
│   ├── team/               ← Team page
│   ├── schedule/           ← Schedule page
│   └── contact/            ← Contact page
│
├── lib/
│   └── utils.ts            ← Helper functions
│
├── App.tsx                 ← Routes configuration
└── main.tsx                ← App entry point
```

---

## ❓ Quick Troubleshooting

**Site won't start?**

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Changes not showing?**

- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Check the terminal for errors
- Restart dev server: Stop (`Ctrl + C`) and run `npm run dev` again

**TypeScript errors?**

- Most errors will show the file and line number
- Check for typos in imports
- Ensure all files are saved

**Styling not working?**

- Make sure Tailwind classes are spelled correctly
- Check that the dev server is running
- Try rebuilding: Stop server, run `npm run build`, then `npm run dev`

---

## 🆘 Need Help?

1. Check the browser console (F12) for errors
2. Check the terminal running `npm run dev` for errors
3. Read error messages carefully - they usually tell you what's wrong
4. Make sure all files are saved
5. Try restarting the dev server

---

## 🎉 You're Ready!

You now know how to:

- ✅ Start the development server
- ✅ Update schedule and contact information
- ✅ Change team colors
- ✅ Add new pages
- ✅ Use the UI components
- ✅ Troubleshoot common issues

Happy coding! 🦆🏈
