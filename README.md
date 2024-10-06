# Next.js Prompt Sharing App

This project uses Next.js with React, TypeScript, Tailwind CSS and MongoDB to create a basic social media app that allows users to post AI prompts.

## Features

- CRUD
  - Create Post
  - Load Posts
  - Update Post
  - Delete Post
- Google Account Sign in
- Search Functionality
- View User Profiles
- Theme Toggle

## Pages
![home](https://github.com/user-attachments/assets/b0316277-a0f4-42c4-a41f-3f8d26066ff6)
![profile](https://github.com/user-attachments/assets/d829ddcb-96e6-4940-acc8-534f716af0a1)
![edit](https://github.com/user-attachments/assets/6f2ce985-3432-425a-b6b4-bbf15dc05505)

## Setup

Follow these steps to run the project locally.

**Prerequisites**

Make sure the following are installed.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/juliansommer/prompts.git
cd prompts
```

**Installation**

Install pnpm if needed

```bash
npm install -g pnpm
```

Install the project dependencies using pnpm:

```bash
pnpm install
```

**Set Up Environment Variables**

Create a `.env` file in the root of your project and add the following content (see `.env.example` for reference):

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET= (Random Generated Auth Secret)
GOOGLE_ID= (Your Google Cloud ID)
GOOGLE_CLIENT_SECRET= (Your Google Cloud Secret ID)
MONGODB_URI= (Your MongoDB URI)
```

**Running the Project**

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
