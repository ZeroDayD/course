# Alison.com E2E Test Suite

End-to-end tests for core flows on [Alison.com](https://alison.com), written with Playwright + TypeScript.

## 🚀 Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/ZeroDayD/course.git
cd course

# 2. Install dependencies
npm ci

# 3. Create `.env`
echo "ALISON_EMAIL=your@email.com" > .env
echo "ALISON_PASSWORD=your_password" >> .env

# 4. Run tests
npx playwright test
