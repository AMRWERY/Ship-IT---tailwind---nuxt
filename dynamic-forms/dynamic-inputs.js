const loginSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "password",
    name: "password",
    label: "forms.password",
    validation: "required|password|length:6,7",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
];

const registrationSchema = [
  {
    $formkit: "text",
    name: "firstName",
    label: "forms.first_name",
    validation: "required|contains_numeric|length:3,10",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "text",
    name: "lastName",
    label: "forms.last_name",
    validation: "required|contains_numeric|length:3,10",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "password",
    name: "password",
    label: "forms.password",
    validation: "required|password|length:6,7",
    outerClass:
      "relative px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full pr-10",
    showPasswordToggle: true,
  },
];

const resetPasswordSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
];

const contactUsSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
  {
    $formkit: "textarea",
    name: "textarea",
    label: "forms.message",
    validation: "required|length:0,120",
    outerClass:
      "px-3 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
];

export {
  loginSchema,
  registrationSchema,
  resetPasswordSchema,
  contactUsSchema,
};
