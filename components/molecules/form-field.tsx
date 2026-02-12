"use client";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: 12,
    border: `1px solid ${error ? "#ef4444" : "#262626"}`,
    background: "#1a1a1a",
    padding: "16px 20px",
    color: "white",
    fontSize: 15,
    lineHeight: 1.5,
    transition: "border-color 0.3s",
    outline: "none",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label
        htmlFor={name}
        style={{ fontSize: 14, fontWeight: 500, color: "#a3a3a3" }}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? "#ef4444" : "#0066FF";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? "#ef4444" : "#262626";
          }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={inputStyle}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? "#ef4444" : "#0066FF";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? "#ef4444" : "#262626";
          }}
        />
      )}
      {error && <p style={{ fontSize: 14, color: "#ef4444", margin: 0 }}>{error}</p>}
    </div>
  );
}
