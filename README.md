# Alison.com E2E Test Suite

End-to-end tests for core flows on [Alison.com](https://alison.com), written with Playwright + TypeScript.

## 🧱 Project Architecture

This project uses the **Page Object Model (POM)** to separate page structure from test logic.  
Key elements:
- `BasePage`: base class with common actions (e.g., `open()`, `header`)
- `HomePage`, `SearchPage`, `CoursePage`, etc. – page classes
- `LoginModal`, `Header` – reusable element components
- `fixtures.ts`: Playwright custom fixtures for easy DI
- `interceptors.ts`: blocks external scripts like Smartlook, TrafficGuard, NewRelic

## ⚠️ Known Limitations

- Alison.com does **not have** a cart system. The “Add to Cart” scenario is not applicable.
- There are **no visible instructors or course prices**.
- Smartlook and other trackers may interfere with automated tests unless blocked.
- Filtering has a bug: after sorting, filtered results don’t always contain the topic.

## 🛣 Areas for Future Improvement

- Add contract testing or API validation layer.
- Use visual regression snapshots for course thumbnails.
- Add test for “Continue Learning” state.

## 🚀 Setup & Run

# 1. Clone the repo
```bash
git clone https://github.com/ZeroDayD/course.git
cd course
```
# 2. Install dependencies
```bash
npm ci
```
# 3. Create `.env`
```bash
echo "ALISON_EMAIL=your@email.com" > .env
echo "ALISON_PASSWORD=your_password" >> .env
```
# 4. Run tests
```bash
npx playwright test
```
