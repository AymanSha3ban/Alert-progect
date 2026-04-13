# 🚀 Alert Component (React + TypeScript)

A reusable and customizable Alert component built using **React**, **TypeScript**, and **SCSS**.
It supports multiple alert types, dynamic content, and smooth closing animations.

---

## ✨ Features

* 🔁 Reusable Alert component
* 🎨 Multiple alert types:

  * Upgrade
  * Note
  * Error
  * Success
  * Tips
* ⚡ Built with TypeScript for type safety
* 🎭 Dynamic content using `ReactNode`
* 🎬 Smooth close animation
* 🧩 SCSS mixins for clean and scalable styling

---

## 📸 Preview

> Example of different alert types rendered in the app

---

## 🛠️ Tech Stack

* React
* TypeScript
* SCSS
* Lucide Icons

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── Alert.tsx
│
├── styles/
│   └── index.scss
│
├── App.tsx
└── types.ts
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🧠 Usage Example

```tsx
<Alert
  type="success"
  alertIcon={<CheckCheck />}
  title="Success"
  description="This is a success alert."
/>
```

---

## 🎯 What I Learned

* Building reusable components
* Managing state and UI behavior
* Handling animations in React
* Writing scalable SCSS using mixins
* Improving code structure and reusability

---

## 📌 Future Improvements

* ⏳ Auto dismiss alerts
* 📍 Toast positioning system
* 📚 Alert manager (global state)
* 🎨 Better UI/UX enhancements

---

## 🤝 Contributing

Feel free to fork the project and improve it!

---

## 📄 License

This project is open source and available under the MIT License.
