# DynamicForm Application

DynamicForm is a React-based application that dynamically generates a form based on data fetched from an API. Users can fill out the form, submit it, and preview a template generated based on their input.

## Features

- Dynamically generates form fields based on API data.
- Utilizes Ant Design for a clean and responsive UI.
- Displays a preview of the submitted data in a modal.
- Loading spinner while fetching form data.

## Technologies Used

- React
- Ant Design
- Axios

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/template-preview-system.git
   cd dynamic-form
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Components

### 1. `DynamicForm`

- Fetches form fields from the API.
- Displays a loading spinner while the data is being fetched.
- Handles form submission and sends data to the API for template preview.

### 2. `TemplateModal`

- A reusable modal component to display the preview content.
