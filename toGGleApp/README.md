# React Practice Challenge: Toggle Dashboard

## Goal

Scratch se ek responsive **Toggle Dashboard** banao jahan user multiple settings ko ON/OFF kar sake.

Example settings:

- Dark mode
- Email notifications
- Sound effects
- Auto-save
- Location access

## Start From Scratch

1. Is folder mein React project initialize karo.
2. Apna preferred setup choose karo, preferably Vite.
3. Required dependencies install karo.
4. App ko browser mein run karke continuously test karo.

## Required Features

### 1. Toggle list

- Kam se kam 5 settings display honi chahiye.
- Har setting mein title, short description aur toggle control ho.
- Toggle click karne par visual state immediately change ho.
- ON state aur OFF state clearly different dikhni chahiye.

### 2. State management

- Har toggle ki state React state se manage karo.
- Toggle component reusable hona chahiye.
- Settings ko array of objects se render karo; har item ko manually repeat mat karo.

### 3. Dashboard summary

- Total settings count dikhao.
- Kitni settings ON hain, woh count dikhao.
- `Enable all` button add karo.
- `Disable all` button add karo.
- Summary toggle change ke saath update honi chahiye.

### 4. User experience

- Active toggle keyboard se operate ho sake.
- Buttons par hover aur focus states honi chahiye.
- Layout mobile aur desktop dono par usable ho.
- Page refresh karne par settings `localStorage` se restore honi chahiye.
- Invalid ya missing localStorage data par app crash nahi honi chahiye.

## Suggested Component Structure

Tum apni structure bana sakte ho, lekin is breakdown ko follow karna useful rahega:

```text
src/
├── components/
│   ├── Toggle.jsx
│   ├── SettingItem.jsx
│   └── Summary.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Suggested Data Shape

```js
{
  id: "dark-mode",
  title: "Dark mode",
  description: "Use a darker color theme",
  enabled: false
}
```

## Acceptance Checklist

- [ ] React project scratch se initialize kiya
- [ ] At least 5 settings render ho rahi hain
- [ ] Har setting independently toggle hoti hai
- [ ] ON count accurately update hota hai
- [ ] Enable all kaam karta hai
- [ ] Disable all kaam karta hai
- [ ] Components reusable hain
- [ ] Settings refresh ke baad persist hoti hain
- [ ] Mobile layout usable hai
- [ ] Keyboard focus visible hai
- [ ] Browser console mein errors nahi hain

## Rules

- Pehle plain React aur CSS use karo.
- Toggle logic ke liye external UI library mat use karo.
- Data ko hardcode karke alag-alag JSX blocks mat banao; `.map()` use karo.
- Pehle khud solution try karo, phir hints dekho.

## Hints

<details>
<summary>Hint 1: list render karna</summary>

Settings ko array mein rakho aur `.map()` se `SettingItem` render karo.

</details>

<details>
<summary>Hint 2: ek item update karna</summary>

`map()` ke andar matching `id` wale item ka `enabled` value toggle karo.

</details>

<details>
<summary>Hint 3: ON count</summary>

`filter()` se enabled settings nikalo aur unki `length` use karo.

</details>

<details>
<summary>Hint 4: localStorage</summary>

App load par `localStorage.getItem()` aur state change par `localStorage.setItem()` use karo. JSON data ko parse/stringify karna mat bhoolna.

</details>

## Stretch Goals

- [ ] Search settings by title
- [ ] Category filter: General, Privacy, Notifications
- [ ] Reset to default button
- [ ] Last updated time display karo
- [ ] Dark mode setting actual page theme change kare
- [ ] Add new custom setting form
- [ ] Toggle changes ke liye small success message dikhao
- [ ] React Testing Library se tests likho

## Final Challenge

App ko itna reusable banao ki settings array mein ek naya object add karne par UI mein automatically naya toggle aa jaye, bina component JSX change kiye.
