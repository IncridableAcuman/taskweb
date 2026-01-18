# 📝 Task Management App

Zamonaviy va funksional **Task Management** ilovasi bo‘lib, foydalanuvchilarga kundalik vazifalarni yaratish, boshqarish va nazorat qilish imkonini beradi. Loyiha **React + TypeScript** asosida qurilgan va **modern UI komponentlari** hamda **form validation** bilan boyitilgan.

---

## 🚀 Asosiy imkoniyatlar

* ✅ Task yaratish (title, description, due date, status, priority)
* 📅 Calendar orqali **Due Date** tanlash
* 🧩 Statuslar: `TODO`, `IN_PROGRESS`, `DONE`
* ⚡ Priority darajalari: `LOW`, `MEDIUM`, `HIGH`
* 🔐 Backend bilan integratsiya (Axios)
* 📋 Real-time task list yangilanishi
* ⏳ Loading holati (Spinner bilan)
* 🔔 Toast notification (success / error)
* 🧼 Form reset va modal (Sheet) yopilishi

---

## 🛠️ Texnologiyalar

### Frontend

* **React**
* **TypeScript**
* **React Hook Form**
* **Zod** (schema validation)
* **Shadcn/UI** (Button, Sheet, Popover, Calendar, Select, Tooltip)
* **Axios**
* **Sonner** (toast notifications)
* **Lucide Icons**

### Backend (alohida loyiha sifatida)

* REST API (`/tasks` endpoint)
* JWT Authentication (axiosInstance orqali)

## 🧪 Task yaratish jarayoni

1. ➕ `Add Task` tugmasi bosiladi
2. 📄 Sheet (modal) ochiladi
3. ✍️ Form to‘ldiriladi
4. 📅 Due Date calendar orqali tanlanadi
5. 📤 Submit qilinadi
6. ⏳ Loading ko‘rinadi
7. ✅ Muvaffaqiyatli bo‘lsa:

   * Toast chiqadi
   * Form reset bo‘ladi
   * Sheet yopiladi
   * Task list qayta yuklanadi

---

## 📌 Muhim texnik jihatlar

* `Button` lar form ichida **type="button"** bilan ishlatilgan (submit xatolarini oldini olish uchun)
* `async/await + Promise (sleep)` orqali kechikishlar boshqariladi
* Zod schema orqali frontend validation
* Global task refresh `TaskProvider` orqali amalga oshiriladi

---

## ▶️ Ishga tushirish

```bash
# dependency larni o‘rnatish
npm install

# development rejim
npm run dev
```

---

## 📸 UI

* Minimal va zamonaviy dizayn
* Modal (Sheet) orqali task qo‘shish
* Responsive layout

---

## 📌 Rejalashtirilgan yaxshilanishlar

* ✏️ Task edit qilish
* 🗑️ Task o‘chirish
* 🔍 Filter & search
* 👤 User-based tasks
* 📊 Statistikalar (charts)

---

## 👨‍💻 Muallif

**Izzatbek Abdusharipov**
Frontend / Backend Developer

---

Agar ushbu loyiha sizga foydali bo‘lsa ⭐ star bosishni unutmang 🙂
