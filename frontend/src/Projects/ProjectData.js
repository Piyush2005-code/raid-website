/**
 * PROJECTS DATA
 * =============
 * This file contains all RAID project entries displayed on the Projects page.
 *
 * HOW TO ADD A NEW PROJECT
 * ─────────────────────────
 * 1. Copy the template below and append it to the array (add a comma after the previous entry).
 * 2. Upload a project image to /public/assets/ProjectImages/ and use the path
 *    "/assets/ProjectImages/your-image.jpg".
 * 3. Set "status" to exactly one of the allowed values (see FIELD REFERENCE below).
 *    The Projects page filters cards by this field — make sure it matches an existing category.
 *
 * FIELD REFERENCE
 * ───────────────
 * id          {number}  — Unique integer. Increment from the last entry.
 * name        {string}  — Project name / title.
 * description {string}  — Full description shown in the detail modal.
 *                          Be as detailed as you like — it's truncated on the card view.
 * status      {string}  — Category / season. Allowed values:
 *                            "Summer RAID"  — Summer RAID Projects
 *                            "WARP"         — Winter Adventures with RAID Projects
 *                         Add new categories here if you create a new season.
 * members     {string}  — Comma-separated member names (not displayed yet, reserved for future use).
 * mentor      {string}  — Mentor name (not displayed yet, reserved for future use).
 * Link        {string}  — GitHub repository URL.
 * Image       {string}  — Path to project thumbnail, e.g. "/assets/ProjectImages/project.jpg"
 *
 * TEMPLATE (copy-paste and fill in):
 * ────────────────────────────────────
 * {
 *   id: 7,
 *   name: "Your Project Name",
 *   description: "A detailed description of what the project does, the problem it solves, and the tech used.",
 *   status: "Summer RAID",
 *   members: "Member One, Member Two, Member Three",
 *   mentor: "Mentor Name",
 *   Link: "https://github.com/AISocietyIITJ/your-repo",
 *   Image: "/assets/ProjectImages/your-image.jpg",
 * },
 */

const ProjectData = [
  {
    id: 1,
    name: "ML-DL-Implementation",
    description:
      "This Project gives beginners and newcomers in the field of AI and ML a chance to understand the inner workings of popular learning algorithms by presenting them with a simple way to analyze the implementation of ML and DL algorithms in pure python using only numpy as a backend for linear algebraic computations. The goal of this repository is not to create the most efficient implementation but the most transparent one, so that anyone with little knowledge of the field can contribute and learn.",
    status: "Summer RAID",
    members: "person1,person2",
    mentor: "person3",
    Link: "https://github.com/RoboticsClubIITJ/ML-DL-implementation",
    Image: "/assets/ProjectImages/MLProject.jpg",
  },
  {
    id: 2,
    name: "Santa-23-WARP24",
    description:
      "This project tackles a unique challenge inspired by a Kaggle competition. The core objective is to solve complex geometric puzzles efficiently, reminiscent of Rubik's Cube but with diverse shapes. These permutation puzzles require finding the optimal sequence of moves to transform an initial state into a solution state, with the added twist of occasional wildcards that allow for limited rearrangement without moves. Key aspects include solving various geometric puzzles in the fewest possible moves, handling different puzzle shapes beyond traditional cubes, optimizing solutions while accounting for wildcard options, and developing algorithms to minimize the total move count across all puzzles. Additionally, the project expanded into AI and machine learning territories by training models for bipedal locomotion, developing AI agents to play the VizDoom game, and creating multi-agent systems for competitive football simulations.",
    status: "Summer RAID",
    members: "person1,person2",
    mentor: "person3",
    Link: "https://github.com/AISocietyIITJ/Santa-23-WARP24",
    Image: "/assets/SantaWARP.png",
  },
  {
    id: 3,
    name: "PIPER-WARP24",
    description:
      "PIPER is a song recommendation system that utilizes the Spotify API to provide users with personalized song recommendations based on their preferences and listening history. By analyzing your Spotify data and preferences, PIPER generates a curated list of songs you're likely to enjoy, helping you discover new music that aligns with your individual style and preferences.",
    status: "Summer RAID",
    members: "person1,person2",
    mentor: "person3",
    Link: "https://github.com/AISocietyIITJ/PIPER-WARP24",
    Image: "/assets/ProjectImages/piper.png",
  },
  {
    id: 4,
    name: "CHAD-SMART MONEY",
    description:
      "SmartMoney is an advanced and comprehensive financial management tool meticulously crafted to empower users in taking full control of their financial well-being. With Gemini API integration, SmartMoney stands out as a robust solution that seamlessly integrates sophisticated financial analytics with user-friendly and intuitive interfaces.",
    status: "Summer RAID",
    members: "person1,person2",
    mentor: "person3",
    Link: "https://github.com/AISocietyIITJ/CHAD",
    Image: "/assets/ProjectImages/CHAD.png",
  },
  {
    id: 5,
    name: "InstiOZ-WARP24",
    description:
      "InstiOZ-WARP24's Pobot Chat Application is an innovative Streamlit-based platform designed to enhance the creative process for poets and poetry enthusiasts. This application offers a variety of powerful features to assist users in crafting and refining their poems. Users can generate rhyming poems based on a given title and theme, drawing inspiration from the application's ability to craft verses that align with their creative vision. The app also leverages OpenAI's GPT-3.5-turbo model to suggest more compelling and fitting titles for poems, enhancing the overall impact of their work. Additionally, Pobot allows users to merge two poems, blending themes and styles to create unique and harmonized new pieces. This feature is particularly useful for those looking to experiment with different poetic forms or combine the essence of multiple works. For further exploration, the application integrates with Google Search API, enabling users to find internet matches for their poems, which helps them discover similar works and draw inspiration from the broader literary landscape.",
    status: "Summer RAID",
    members: "person1,person2",
    mentor: "person3",
    Link: "https://github.com/AISocietyIITJ/InstiOZ-WARP24",
    Image: "/assets/ProjectImages/Instioz.jpg",
  },
  {
    id: 6,
    name: "PlaWorDet-WARP24",
    description:
      "The FIFA Player Worth Determination Model is a sophisticated AI/ML project designed to assess the value of football players based on their statistics and their compatibility with a specific team. Unlike traditional player valuation models, this project considers the existing chemistry of the team and the positional dynamics to provide club-specific player valuations. This enables club owners to make informed bidding decisions in both in-game and real-life FIFA auctions.",
    status: "Summer RAID",
    members: "person1,person2",
    mentor: "person3",
    Link: "https://github.com/AISocietyIITJ/PlaWorDet-WARP24",
    Image: "/assets/ProjectImages/Fifa.jpg",
  },
];

export default ProjectData;
