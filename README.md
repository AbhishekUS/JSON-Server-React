# React Simple Store Project

This is a simple e-commerce store project built with React and powered by JSON Server as a mock API. It allows users to browse products, add them to the cart, and simulate a checkout process.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Demo

Coming soon...

## Features

- Browse a list of products
- Sort by Price:
  * Ascending (Lowest to Highest)
  * Descending (Highest to Lowest)
- Availability:
  * In Stock
  * Out of Stock


## Installation

1. Clone the repository:

```
git clone https://github.com/AbhishekUS/react-simple-store.git
```

2. Install dependencies:

```
cd react-simple-store
npm install
```

## Usage

### Starting the JSON Server

This project uses JSON Server to mock the API. Follow these steps to start the server:

1. Open a new terminal window.

2. Start the JSON Server:

```bash
json-server --watch db.json --port 8000
```

### Starting the React App

1. Open a new terminal window.

2. Navigate back to the root folder of the project:

```bash
cd ..
```

3. Start the React app:

```bash
npm start
```

The app will open in your default browser.

## Folder Structure

```
react-simple-store/
  ├── src/
  │   ├── components/
  │   │   ├── Product.js
  │   │   └── ...
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── db/
  │   └── db.json
  ├── ...
  ├── package.json
  ├── README.md
  └── ...
```

## Dependencies

- [React](https://reactjs.org/)
- [JSON Server](https://github.com/typicode/json-server)

For a full list of dependencies, refer to the `package.json` file.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to replace the placeholders (e.g., `https://github.com/AbhishekUS/react-simple-store.git`) with the actual links, and customize any other information as per your project. Also, remember to provide an actual live demo link if your project is hosted somewhere.
