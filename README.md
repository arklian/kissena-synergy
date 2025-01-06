# Kissena Synergy Website
A website for [Kissena Synergy](https://www.facebook.com/groups/610957329304796/)

---
### Built Using
Shoutout to the technologies / frameworks we're using:
* TypeScript
* React
* Vite
* Mantine

---

## Getting Started
### Prerequisites
First things first, we'll need to setup `pnpm`, our package manager of choice.

If you haven't already, install `pnpm`:
```bash
npm i -g pnpm # If you already have `npm` installed
```
<small>To install without `npm`, see [their website](https://pnpm.io/installation)</small>

---

### Setting up the Frontend
#### Installation
Now let's install the frontend's dependencies itself.

1. Navigate to the `frontend` directory:
```bash
cd frontend
```

2. Install all necessary dependencies:
```bash
pnpm install
```

#### Run Instructions
You'll notice a couple scripts in our `package.json`. While in the `frontend` directory, we can run the following scripts.
##### Development Scripts
Here's the scripts we'll use to keep our codebase tidy:
```bash
pnpm run lint   # Checks for potential bugs & style violations
pnpm run pretty # Formats our code to ensure consistent styling
```

To quickly see what we're working on, without compiling an executable:
```bash
pnpm run dev  # Hosts a server to view our work on
```

##### Production Scripts
To compile the application & preview the production build, run the following command:
```bash
pnpm run build   # Compiles the application into an executable
pnpm run preview # Runs the exectuable on a server
```
This will enforce stricter type-checking and ensure sure our code follows the conventions & rules specified in our `tsconfig.json`. 