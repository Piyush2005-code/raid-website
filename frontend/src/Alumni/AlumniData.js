/**
 * ALUMNI DATA
 * ===========
 * This file contains all RAID alumni entries displayed on the Alumni page.
 *
 * HOW TO ADD A NEW ALUMNI
 * ────────────────────────
 * 1. Copy the template below and append it to the array (add a comma after the previous entry).
 * 2. Upload the photo to /public/assets/AlumniData/ and use the path
 *    "/assets/AlumniData/your-photo.jpeg".
 * 3. Update "batch" to match the format used (e.g. "Batch of 2026").
 * 4. Social fields are optional — remove any that don't apply.
 *
 * FIELD REFERENCE
 * ───────────────
 * id          {number}  — Unique integer. Increment from the last entry.
 * name        {string}  — Full name as you want it displayed.
 * image       {string}  — Path to photo, e.g. "/assets/AlumniData/photo.jpeg"
 * batch       {string}  — Graduation year, e.g. "Batch of 2026"
 * job         {string}  — Current role and company, e.g. "ML Engineer @ Google" (optional)
 * linkedin    {string}  — Full LinkedIn profile URL (optional)
 * instagram   {string}  — Full Instagram profile URL (optional)
 * github      {string}  — Full GitHub profile URL (optional)
 *
 * TEMPLATE (copy-paste and fill in):
 * ────────────────────────────────────
 * {
 *   id: 20,
 *   name: "Alumni Name",
 *   image: "/assets/AlumniData/alumni-photo.jpeg",
 *   batch: "Batch of 2026",
 *   job: "Role @ Company",
 *   linkedin: "https://www.linkedin.com/in/alumni-profile/",
 *   instagram: "https://www.instagram.com/alumni_handle",
 *   github: "https://github.com/alumni-username",
 * },
 */

const AlumniData = [
  // ── Batch of 2023 ────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Rohan Singh",
    image: "/assets/AlumniData/RohanSingh.png",
    batch: "Batch of 2023",
    job: "Engineering Manager @ Chat360",
    linkedin: "https://www.linkedin.com/in/rohansingh7146/",
    instagram: "https://www.instagram.com/rohansingh_9001/",
  },
  {
    id: 2,
    name: "Kwanit Gupta",
    image: "/assets/AlumniData/KwanitG.jpeg",
    batch: "Batch of 2023",
    job: "AI Engineer @ Valeo",
    linkedin: "https://www.linkedin.com/in/kwanit-gupta-439427198/",
    instagram: "https://www.instagram.com/un_sung_un_heard/",
  },
  {
    id: 3,
    name: "Harsh Agarwal",
    image: "/assets/AlumniData/Harsh.png",
    batch: "Batch of 2023",
    job: "Applied Scientist @ Amazon",
    linkedin: "https://linkedin.com/in/harsh-agarwal-4b731718b/",
    instagram: "https://www.instagram.com/heuristic_harsh/",
  },

  // ── Batch of 2024 ────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Aditya Baranwal",
    image: "/assets/AlumniData/AB.png",
    batch: "Batch of 2024",
    job: "PhD @ CRCV-UCF",
    linkedin: "https://www.linkedin.com/in/aadityabaranwal/",
    instagram: "https://www.instagram.com/__.aeternum.__/",
  },
  {
    id: 5,
    name: "Nakul Sharma",
    image: "/assets/AlumniData/Nakul.png",
    batch: "Batch of 2024",
    job: "ML Research Intern @ SpreeAI",
    linkedin: "https://www.linkedin.com/in/nakulsh/",
    instagram: "https://www.instagram.com/_nah_cool/",
  },
  {
    id: 6,
    name: "Atharva Pandey",
    image: "/assets/AlumniData/AtharvaP.png",
    batch: "Batch of 2024",
    job: "Research Fellow @ Microsoft Research India",
    linkedin: "https://www.linkedin.com/in/atharva-pandey-4446521b9/",
  },
  {
    id: 7,
    name: "Susim Mukul Roy",
    image: "/assets/AlumniData/SRoy.png",
    batch: "Batch of 2024",
    job: "Student Researcher @ University of Buffalo",
    linkedin: "https://www.linkedin.com/in/susim-mukul-roy/",
  },
  {
    id: 8,
    name: "Shreya Shukla",
    image: "/assets/AlumniData/Shreya.jpeg",
    batch: "Batch of 2024",
    job: "Computer Vision Researcher @ Mercedes",
    linkedin: "https://www.linkedin.com/in/shreya-shukla-54b069205/",
  },
  {
    id: 9,
    name: "Siddharth Singh",
    image: "/assets/AlumniData/SS.png",
    batch: "Batch of 2024",
    job: "Student Researcher @ IIT Patna",
    linkedin: "https://www.linkedin.com/in/siddharth-singh-75912a224/",
    instagram: "https://www.instagram.com/ssiddharth_s27/",
  },
  {
    id: 10,
    name: "Ishaan Shrivastava",
    image: "/assets/AlumniData/IshanSrivastav.png",
    batch: "Batch of 2024",
    job: "Computer Vision Researcher @ Metafusion",
    linkedin: "https://www.linkedin.com/in/ishaanshri95/",
    instagram: "https://www.instagram.com/ishaan_shri/",
  },
  {
    id: 11,
    name: "Ayush Anand",
    image: "/assets/AlumniData/Ayush.jpeg",
    batch: "Batch of 2024",
    job: "SDE @ Warner Bros Discovery",
    linkedin: "https://www.linkedin.com/in/ayush-anand-2971601ba/",
    instagram: "https://www.instagram.com/ayush_anand111/",
  },

  // ── Batch of 2025 ────────────────────────────────────────────────────────
  {
    id: 12,
    name: "Shubh Goyal",
    image: "/assets/AlumniData/Shubh.jpeg",
    batch: "Batch of 2025",
    linkedin: "https://www.linkedin.com/in/shubh-goyal-78a6a6222/",
    instagram: "https://www.instagram.com/shubhh_goyal/",
    github: "https://github.com/Shubh-Goyal-07",
  },
  {
    id: 13,
    name: "Rushi Shah",
    image: "/assets/AlumniData/RushiShah.png",
    batch: "Batch of 2025",
    linkedin: "https://www.linkedin.com/in/shah-rushi/",
    instagram: "https://www.instagram.com/rus.hishah/",
    github: "https://github.com/shahrushi2003",
  },
  {
    id: 14,
    name: "Sukriti Goyal",
    image: "/assets/AlumniData/Sukriti.jpeg",
    batch: "Batch of 2025",
    job: "SWE @ Pattern",
    linkedin: "https://www.linkedin.com/in/sukriti-goyal-1697a71a5/",
    instagram: "https://www.instagram.com/_sukriti_1023",
    github: "https://github.com/s-goyal23",
  },
  {
    id: 15,
    name: "Shreyas Vaidya",
    image: "/assets/AlumniData/Shreyas.jpeg",
    batch: "Batch of 2025",
    linkedin: "https://www.linkedin.com/in/vaidyashreyas/",
    instagram: "https://www.instagram.com/shreyas.vaidya.2314",
  },
  {
    id: 16,
    name: "Hrishikesh Makwana",
    image: "/assets/AlumniData/Hrishikesh.jpeg",
    batch: "Batch of 2025",
    linkedin: "https://www.linkedin.com/in/hrishikesh-makwana-9348b7230/",
    instagram: "https://www.instagram.com/hrishimak/",
  },
  {
    id: 17,
    name: "Prashant Tandon",
    image: "/assets/AlumniData/Prashant.jpeg",
    batch: "Batch of 2025",
    linkedin: "https://www.linkedin.com/in/prashant-tandon-4a7678249/",
  },
  {
    id: 18,
    name: "Shubham Mishra",
    image: "/assets/AlumniData/Shubham.jpeg",
    batch: "Batch of 2025",
    linkedin: "https://www.linkedin.com/in/shubham-mishra-b6492922b/",
    instagram: "https://www.instagram.com/susurro_primordial/",
  },
];

export default AlumniData;
