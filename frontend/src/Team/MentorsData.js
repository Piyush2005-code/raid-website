/**
 * MENTORS DATA
 * ============
 * This file contains the list of RAID mentors displayed on the Team page.
 *
 * HOW TO ADD A NEW MENTOR
 * ────────────────────────
 * 1. Copy the template below and append it to the array (add a comma after the previous entry).
 * 2. Upload the photo to /public/assets/ and use the path "/assets/your-photo.jpeg".
 * 3. The "message" field is a short personal quote or tagline.
 * 4. All social fields are optional — remove any field that doesn't apply.
 *
 * FIELD REFERENCE
 * ───────────────
 * id          {number}  — Unique integer. Increment from the last entry.
 * name        {string}  — Full name as you want it displayed.
 * image       {string}  — Path to photo in /public/assets/, e.g. "/assets/photo.jpeg"
 * message     {string}  — Personal quote / tagline shown on the card.
 * linkedin    {string}  — Full LinkedIn profile URL (optional)
 * instagram   {string}  — Full Instagram/Twitter URL (optional)
 * github      {string}  — Full GitHub profile URL (optional)
 *
 * TEMPLATE (copy-paste and fill in):
 * ────────────────────────────────────
 * {
 *   id: 4,
 *   name: "Your Name",
 *   image: "/assets/yourname.jpeg",
 *   message: "Your personal quote here.",
 *   linkedin: "https://www.linkedin.com/in/your-profile/",
 *   instagram: "https://www.instagram.com/your_handle",
 *   github: "https://github.com/your-username",
 * },
 */

const MentorsData = [
  {
    id: 1,
    name: "Akshat Jain",
    image: "/assets/Akshat Jain (B22CS096).jpg",
    message: "Statistics are like bikinis. What they reveal is suggestive, but what they conceal is vital.",
    linkedin: "https://www.linkedin.com/in/akshat-jain-2bba94280/",
    instagram: "https://www.instagram.com/akshat_jain_kothari01/?next=%2F",
    github: "https://github.com/akshatb22me007/",
  },
  {
    id: 2,
    name: "Jyotin Goel",
    image: "/assets/jyotinGoel.jpeg",
    message: "GPU Daddy @RAID",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://twitter.com/",
    github: "https://github.com/gjyotin305",
  },
  {
    id: 3,
    name: "Yogesh Sharma",
    image: "/assets/YogeshCompressed.jpg",
    message: "God is the greatest AGI Scientist!",
    linkedin: "https://www.linkedin.com/in/yogesh-sharma-a4bb59258",
    instagram: "https://www.instagram.com/real.yogesh_",
    github: "https://github.com/themaverick",
  },
];

export default MentorsData;
