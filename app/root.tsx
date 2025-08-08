import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useState, useEffect } from "react";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 3 second loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0B1023] flex items-center justify-center z-50">
        <div className="text-center">
          {/* AIM Letters Animation */}
          {/* <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-8xl font-neulis-black text-white animate-bounce animate-letterGlow" style={{ 
              animationDelay: '0s', 
              color: '#FE71FF' 
            }}>
              A
            </span>
            <span className="text-8xl font-neulis-black text-white animate-bounce animate-letterGlow" style={{ 
              animationDelay: '0.2s', 
              color: '#A96BFB' 
            }}>
              I
            </span>
            <span className="text-8xl font-neulis-black text-white animate-bounce animate-letterGlow" style={{ 
              animationDelay: '0.4s', 
              color: '#4D65F8' 
            }}>
              M
            </span>
          </div> */}

          {/* Logo Animation */}
          {/* <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 animate-gradientSpin animate-logoFloat animate-pulseGlow flex items-center justify-center">
              <img 
                src="/images/logo.svg" 
                alt="AIM VFX Logo" 
                className="w-20 h-20 animate-spin"
                style={{ animationDuration: '4s' }}
              />
            </div>
          </div> */}

          {/* Loading Text */}
          <img
            src="/images/logo.svg"
            alt="AIM VFX Logo"
            className="w-20 h-20 mx-auto"
            // style={{ animationDuration: "4s" }}
          />
          <p className="text-white text-xl font-neulis-medium mb-4 animate-pulse">
            Acing the Impossible
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            <div
              className="w-4 h-4 rounded-full animate-bounce"
              style={{
                backgroundColor: "#FE71FF",
                animationDelay: "0s",
              }}
            ></div>
            <div
              className="w-4 h-4 rounded-full animate-bounce"
              style={{
                backgroundColor: "#A96BFB",
                animationDelay: "0.1s",
              }}
            ></div>
            <div
              className="w-4 h-4 rounded-full animate-bounce"
              style={{
                backgroundColor: "#4D65F8",
                animationDelay: "0.2s",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
