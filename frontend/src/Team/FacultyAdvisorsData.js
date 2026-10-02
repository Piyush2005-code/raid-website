/**
 * FACULTY ADVISORS DATA
 * =====================
 * This file contains the list of faculty advisors displayed on the Team page.
 * Previously this was hardcoded directly in FacultyAdvisorCard.jsx — now it's here.
 *
 * HOW TO ADD A NEW FACULTY ADVISOR
 * ──────────────────────────────────
 * 1. Copy the template below and append it to the array (add a comma after the previous entry).
 * 2. Upload the photo to /public/assets/ and use the path "/assets/your-photo.jpeg".
 * 3. "title" is their academic designation (e.g. "Assistant Professor").
 * 4. Social fields are optional — remove any that don't apply.
 *
 * FIELD REFERENCE
 * ───────────────
 * id          {number}  — Unique integer. Increment from the last entry.
 * name        {string}  — Full name including title (e.g. "Dr. Angshuman Paul")
 * image       {string}  — Path to photo in /public/assets/, e.g. "/assets/photo.jpg"
 * title       {string}  — Academic designation / department
 * email       {string}  — Institutional email address (optional)
 * linkedin    {string}  — Full LinkedIn profile URL (optional)
 * website     {string}  — Personal/faculty page URL (optional)
 *
 * TEMPLATE (copy-paste and fill in):
 * ────────────────────────────────────
 * {
 *   id: 2,
 *   name: "Dr. Faculty Name",
 *   image: "/assets/faculty-photo.jpg",
 *   title: "Associate Professor, Dept. of CSE",
 *   email: "faculty@iitj.ac.in",
 *   linkedin: "https://www.linkedin.com/in/faculty-profile/",
 *   website: "https://iitj.ac.in/faculty/profile",
 * },
 */

const FacultyAdvisorsData = [
  {
    id: 1,
    name: "Angshuman Paul",
    image: "/assets/Apual2.jpg",
    title: "Assistant Professor",
    email: "apual@iitj.ac.in",
    // linkedin: "",   // add when available
    // website: "",    // add when available
  },
];

export default FacultyAdvisorsData;
