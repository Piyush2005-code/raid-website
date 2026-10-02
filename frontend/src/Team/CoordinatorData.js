/**
 * COORDINATORS DATA
 * =================
 * This file contains the list of current RAID coordinators displayed on the Team page.
 *
 * HOW TO ADD A NEW COORDINATOR
 * ─────────────────────────────
 * 1. Copy the template below and append it to the array (add a comma after the previous entry).
 * 2. Upload the photo to /public/assets/ and use the path "/assets/your-photo.jpeg".
 * 3. All social fields are optional — remove any field that doesn't apply.
 *
 * FIELD REFERENCE
 * ───────────────
 * id          {number}  — Unique integer. Increment from the last entry.
 * name        {string}  — Full name as you want it displayed.
 * image       {string}  — Path to photo in /public/assets/, e.g. "/assets/photo.jpeg"
 * linkedin    {string}  — Full LinkedIn profile URL (optional, remove if not available)
 * instagram   {string}  — Full Instagram profile URL (optional, remove if not available)
 * github      {string}  — Full GitHub profile URL (optional, remove if not available)
 *
 * TEMPLATE (copy-paste and fill in):
 * ────────────────────────────────────
 * {
 *   id: 4,
 *   name: "Your Name",
 *   image: "/assets/yourname.jpeg",
 *   linkedin: "https://www.linkedin.com/in/your-profile/",
 *   instagram: "https://www.instagram.com/your_handle",
 *   github: "https://github.com/your-username",
 * },
 */

const CoordinatorData = [
  {
    id: 1,
    name: "Pragay",
    image: "/assets/pragay.jpeg",
    linkedin: "https://www.linkedin.com/in/pragay-kumar/",
    instagram: "https://www.instagram.com/pack_o_shades",
    github: "https://github.com/akshatb22me007/",
  },
  {
    id: 2,
    name: "Sirin Changulani",
    image: "/assets/sirin.jpeg",
    linkedin: "https://www.linkedin.com/in/sirin-changulani-7b69a927b/",
    github: "https://github.com/gjyotin305",
  },
  {
    id: 3,
    name: "Vishal Kishore",
    image: "/assets/vishal.png",
    linkedin: "https://www.linkedin.com/in/kishore-vishal",
    instagram: "https://www.instagram.com/vishal_kishore01",
    github: "https://github.com/vishalkishore",
  },
];

export default CoordinatorData;
