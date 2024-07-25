# Next.js Job Board Clone

## Overview
This is a job sharing platform built with Next.js, TypeScript, Prisma, PostgreSQL, and Zod. It provides a user-friendly interface for job listings and applications.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [File Structure](#file-structure)
5. [Deployment](#deployment)
6. [Key Coding Takeaways](#key-coding-takeaways)
7. [Contributing](#contributing)
8. [Acknowledgements](#acknowledgements)

## Features
- User authentication and authorization
- Job posting and application functionality
- Integration with Prisma and PostgreSQL for database management
- Form validation using Zod

## Installation
### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/LVSSandeepKumar/nextjs-job-board-clone.git
    ```
2. Navigate to the project directory:
    ```sh
    cd nextjs-job-board-clone
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up the database:
    ```sh
    npx prisma migrate dev
    ```
5. Start the application:
    ```sh
    npm run dev
    ```
6. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Usage
Navigate through the site to view job listings, post new jobs, and apply for available positions. User authentication is required for posting and applying for jobs.

## File Structure
The file structure includes:
- **prisma/**: Prisma schema and migrations.
- **public/**: Public assets.
- **scripts/**: Utility scripts.
- **src/**: Source code for the application.
  - **components/**: Reusable React components.
  - **pages/**: Next.js pages.
  - **styles/**: CSS files for styling the application.
  - **utils/**: Utility functions and helpers.
- **.eslintrc.json**: ESLint configuration file.
- **.gitignore**: Git ignore file.
- **package.json**: Project metadata and dependencies.
- **README.md**: Project documentation.
- **tailwind.config.ts**: TailwindCSS configuration file.
- **tsconfig.json**: TypeScript configuration file.

## Deployment
This project is deployed at [Next.js Job Board Clone on Vercel](https://next-jobs-ten.vercel.app).

## Key Coding Takeaways
- **Next.js**: Utilization of Next.js for server-side rendering and static site generation.
- **TypeScript**: Implementation of TypeScript for type safety and better code maintainability.
- **Prisma**: Integration with Prisma for ORM and database management.
- **Zod**: Use of Zod for schema validation and form handling.
- **TailwindCSS**: Implementation of TailwindCSS for efficient and responsive styling.
- **Component-Based Architecture**: Modular design with reusable React components.
- **Responsive Design**: Ensuring the application looks great on all devices.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## Acknowledgements
- Built using Next.js, TypeScript, Prisma, PostgreSQL, and Zod.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
