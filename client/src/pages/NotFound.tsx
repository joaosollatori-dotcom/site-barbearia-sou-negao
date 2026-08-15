import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#191714",
        color: "#f8f1e4",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "28rem" }}>
        <p
          style={{
            margin: "0 0 1rem",
            color: "#d89560",
            textTransform: "uppercase",
            fontSize: "0.66rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          Página não encontrada
        </p>
        <h1
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "clamp(5rem, 18vw, 9rem)",
            lineHeight: 0.87,
            margin: "0 0 1.5rem",
            color: "#f8f1e4",
          }}
        >
          404
        </h1>
        <p
          style={{
            color: "#bcb0a2",
            fontSize: "1rem",
            lineHeight: 1.65,
            margin: "0 0 2.5rem",
          }}
        >
          A página que você procura não existe ou foi movida.
        </p>
        <button
          onClick={() => setLocation("/")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.85rem 1.25rem",
            background: "#c9804e",
            color: "#211e1a",
            border: 0,
            borderRadius: "0.25rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.075em",
            fontSize: "0.68rem",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={17} />
          Voltar ao início
        </button>
      </div>
    </div>
  );
}
