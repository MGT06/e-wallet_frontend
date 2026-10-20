# E-Wallet Frontend

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js version" />
  <img src="https://img.shields.io/github/last-commit/MGT06/e-wallet_frontend?style=for-the-badge&logo=git&logoColor=white" alt="Last commit" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License: MIT" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/issues-pr/MGT06/e-wallet_frontend?style=flat-square&logo=github" alt="Pull requests" />
  <img src="https://img.shields.io/github/repo-size/MGT06/e-wallet_frontend?style=flat-square&logo=github" alt="Repo size" />
  <img src="https://img.shields.io/github/commit-activity/m/MGT06/e-wallet_frontend?style=flat-square&logo=git&logoColor=white" alt="Commit activity" />
</p>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-149eca?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-ca4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" /></a>
  <a href="https://redux-toolkit.js.org/"><img src="https://img.shields.io/badge/Redux_Toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" /></a>
  <a href="https://react-hook-form.com/"><img src="https://img.shields.io/badge/React_Hook_Form-ec5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" /></a>
  <a href="https://www.chartjs.org/"><img src="https://img.shields.io/badge/Chart.js-ff6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
</p>

A web-based digital wallet application, built with React and Vite. It lets users manage their accounts, top up their balance, transfer money to other users, and monitor their financial activity through an interactive dashboard. EWallet, with its inclusive technology, is an essential instrument for the new economy ecosystem and the initial touch point to financial services.

The backend lives in a separate repository: [e-wallet_backend](https://github.com/MGT06/e-wallet_backend).

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [React](https://react.dev/) | 19.2.8 | Component-based library for building the user interface |
| [Vite](https://vite.dev/) | 8.3.0 | Build tool and development server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3.3 | Utility-first CSS framework for a responsive and consistent UI |
| [React Router](https://reactrouter.com/) | 8.4.0 | Page navigation and dynamic routing |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2.13.0 | Application state management |
| [React Redux](https://react-redux.js.org/) | 9.3.0 | Connects React components with the Redux store |
| [Redux Persist](https://github.com/rt2zz/redux-persist) | 6.0.0 | Persists selected Redux state across browser sessions |
| [React Hook Form](https://react-hook-form.com/) | 7.90.0 | Form state and validation |
| [Chart.js](https://www.chartjs.org/) | 4.5.1 | Financial statistics and dashboard charts |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.7.0 | Icons for the interface and interactive elements |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11.1.0 | Notifications and feedback messages |
| [Swiper](https://swiperjs.com/) | 14.3.0 | Responsive sliders and carousels |
| [Node.js](https://nodejs.org/) | 24 | JavaScript runtime for the development tools and build process |

## Features

**Authentication**
- User registration and login.
- OTP verification.
- Forgot and reset password.
- User logout.

**Dashboard**
- View user information and profile.
- View financial statistics through charts.
- Monitor transaction history and activity.

**User Profile**
- View and update the user profile.
- Change the account password.
- Upload and delete the profile photo.

**PIN Management**
- Set a transaction PIN.
- Verify the transaction PIN.
- Change the transaction PIN.

**Transactions**
- Top up wallet balance through the available payment methods.
- Transfer money to other users, confirmed with the PIN.
- Find transaction recipients.
- Retrieve available top-up payment methods.

**Transaction History**
- View transaction history.
- Delete transaction history.

**Favorite Recipients**
- Add favorite recipients for easier transactions.


## Architecture

The frontend is a single-page application, and each concern is handled by a dedicated library:

```
User -> React Router -> Page -> Components -> Redux Store -> Backend REST API
```

- **Routing** is handled by React Router, which manages page navigation and dynamic routes.
- **State** lives in a Redux Toolkit store, and Redux Persist keeps the selected state between sessions.
- **Forms** are managed by React Hook Form, including validation.
- **UI** is built with Tailwind CSS, React Icons, Swiper, and React Toastify, while Chart.js renders the dashboard statistics.
- **API access** goes through the backend REST API. The base URL is configured with `VITE_API_URL`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v24 recommended) and npm
- [Git](https://git-scm.com/)
- The [backend](https://github.com/MGT06/e-wallet_backend) up and running

### 1. Clone the repository

```bash
git clone https://github.com/MGT06/e-wallet_frontend.git
cd e-wallet_frontend
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure the environment

Create a `.env` file in the project root and point it to your backend:

```env
VITE_API_URL=http://{HOST_SERVER}:{PORT_SERVER}
```

Replace `{HOST_SERVER}` and `{PORT_SERVER}` with the values from your backend `.env`. Make sure the variable name matches the one used in the frontend source code.

## 4. Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL of the backend API |

### 5. Run the application

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in the `dist/` directory |
| `npm run preview` | Preview the production build locally |

## API Reference

Protected routes require the header `Authorization: Bearer <token>`.

## How to Contribute

1. Fork this repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit your changes.
4. Push the branch and open a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

## Related Project

[![backend](https://img.shields.io/badge/BACKEND-GO-00ADD8?logo=go&logoColor=WHITE)](https://github.com/MGT06/e-wallet_backend)