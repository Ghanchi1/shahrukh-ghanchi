import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shahrukh Ghanchi — Senior Product Manager" },
      { name: "description", content: "Senior Product Manager with 10+ years building AI Agentic, CPaaS, SaaS & POS platforms." },
      { name: "author", content: "Shahrukh Ghanchi" },
      { property: "og:title", content: "Shahrukh Ghanchi — Senior Product Manager" },
      { property: "og:description", content: "Senior Product Manager with 10+ years building AI Agentic, CPaaS, SaaS & POS platforms." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Shahrukh Ghanchi — Senior Product Manager" },
      { name: "twitter:description", content: "Senior Product Manager with 10+ years building AI Agentic, CPaaS, SaaS & POS platforms." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8bda7cc-8afa-40ba-9303-a40e7f3c84fe/id-preview-35190d34--bd98e278-2c8b-4433-acae-97e38b407687.lovable.app-1777841399606.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8bda7cc-8afa-40ba-9303-a40e7f3c84fe/id-preview-35190d34--bd98e278-2c8b-4433-acae-97e38b407687.lovable.app-1777841399606.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
