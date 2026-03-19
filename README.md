# 🔍 Profile Lookup

A JavaScript utility that searches an array of contact objects by name and retrieves a specified property from the matching contact.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔎 Name Search | Finds a contact by their `firstName` |
| 📋 Property Access | Returns the value of any valid property |
| ⚠️ Error Handling | Returns descriptive messages for missing contacts or properties |
| 🧩 Clean Logic | Uses `Array.find()` and `hasOwnProperty()` for reliable lookups |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/lorddrago12/Profile-Lookup.git

# Navigate into the project folder
cd Profile-Lookup

# Run the script
node profileLookup.js
```

---

## ⚙️ How It Works

The `lookUpProfile(name, property)` function takes two arguments — a contact's first name and a property to look up — and returns the matching value.

```javascript
function lookUpProfile(name, property) {
  let result;

  const person = contacts.find(p => p.firstName === name);

  if (!person) {
    result = "No such contact";
  } else if (person.hasOwnProperty(property)) {
    result = person[property];
  } else {
    result = "No such property";
  }

  return result;
}
```

**Example calls:**

```javascript
lookUpProfile("Akira", "likes");
// → ["Pizza", "Coding", "Brownie Points"]

lookUpProfile("Harry", "number");
// → "0994372684"

lookUpProfile("Unknown", "number");
// → "No such contact"

lookUpProfile("Sherlock", "age");
// → "No such property"
```

**Return values:**

| Scenario | Return Value |
|---|---|
| Contact found, property exists | The value of the property |
| Contact not found | `"No such contact"` |
| Contact found, property missing | `"No such property"` |

---

## 🤝 How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
