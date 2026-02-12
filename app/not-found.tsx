import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        textAlign: "center",
      }}
    >
      <span
        className="font-mono"
        style={{ marginBottom: 24, fontSize: 96, fontWeight: 700, color: "rgba(0,102,255,0.2)" }}
      >
        404
      </span>
      <Heading as="h1" display>
        Page not found
      </Heading>
      <div style={{ marginTop: 16, maxWidth: 448 }}>
        <Text>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Text>
      </div>
      <div style={{ marginTop: 32 }}>
        <Button href={ROUTES.home}>Back to Home</Button>
      </div>
    </main>
  );
}
