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

## Approach Explanation

### Dynamic Form Generation

- The application fetches form fields from the `/api/fields` endpoint.
- Fields are dynamically rendered using the `Form.Item` and `Input` components.

### Form Submission

- The form data is collected using Ant Design's `Form` API and sent to the `/api/template-preview` endpoint using Axios.
- A modal is displayed with the preview template returned from the API.

### Error Handling

- Network errors and API failures are detected in then-catch blocks.
- User-friendly error messages are displayed using Ant Design's `message` component.

### Loading States

- A spinner is displayed while fetching fields for a smooth user experience.

---

## Future Improvements

1. **Field Types:**  
   Like checkboxes, dropdowns, and date pickers.

2. **Custom Validation Rules**

3. **Field Grouping:**  
   Functionality to group fields under specific categories for better organization.

4. **Testing:**  
   Tests for both frontend and backend.

5. **Customise Template Sytling**

6. **Email/SMS generation integration**
