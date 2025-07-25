// Imports
import { forwardRef } from "react";
import type { InputProps } from "../../types";

/**
 * Input Component
 * 
 * A reusable styled input element that supports forwarding refs.
 * - Uses `forwardRef` to allow parent components to access the underlying <input> element.
 * - Accepts all standard input props via `InputProps`.
 * - Applies default Tailwind CSS utility classes for styling.
 * - Supports additional CSS classes via `className` prop.
 * 
 * @param className - Additional CSS classes to customize the input's appearance.
 * @param props - Other standard input element props (e.g., type, placeholder, value, onChange).
 * @param ref - Ref forwarded to the native input element.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        // Default styling with padding, border, rounded corners, and focus ring
        className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);

// Display name useful for debugging in React DevTools
Input.displayName = "Input";

export default Input;
