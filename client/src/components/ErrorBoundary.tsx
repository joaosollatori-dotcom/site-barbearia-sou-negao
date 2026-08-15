import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "40rem",
              textAlign: "center",
            }}
          >
            <AlertTriangle
              size={48}
              color="#d89560"
              style={{ marginBottom: "1.5rem", flexShrink: 0 }}
            />
            <h2
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "2.5rem",
                margin: "0 0 1rem",
              }}
            >
              Algo deu errado.
            </h2>
            <pre
              style={{
                width: "100%",
                padding: "1rem",
                background: "#25221e",
                color: "#bcb0a2",
                overflow: "auto",
                borderRadius: "0.25rem",
                fontSize: "0.85rem",
                whiteSpace: "pre-wrap",
                marginBottom: "1.5rem",
              }}
            >
              {this.state.error?.stack}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.25rem",
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
              <RotateCcw size={16} />
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
