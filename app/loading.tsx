export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div
          className="animate-spin"
          style={{
            width: 32,
            height: 32,
            borderRadius: 9999,
            border: "2px solid #262626",
            borderTopColor: "#0066FF",
          }}
        />
      </div>
    </div>
  );
}
