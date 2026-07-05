import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Derechos humanos" },
      { name: "description", content: "Una página para ayudar a las personas a conocer mejor los derechos de no a la discriminación y no a la esclavitud" },
      { name: "author", content: "Continuum" },
      { property: "og:title", content: "Derechos humanos" },
      { property: "og:description", content: "Una página para ayudar a las personas a conocer mejor los derechos de no a la discriminación y no a la esclavitud" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/861Utl7Rkwbvr44R3dW4eN5SolH2/social-images/social-1783218166143-images_(2).webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/861Utl7Rkwbvr44R3dW4eN5SolH2/social-images/social-1783218166143-images_(2).webp" },
      { name: "twitter:title", content: "Derechos humanos" },
      { name: "twitter:description", content: "Una página para ayudar a las personas a conocer mejor los derechos de no a la discriminación y no a la esclavitud" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        children: `
          (function() {
            var theme = localStorage.getItem('continuum_theme') || 'light';
            if (theme === 'system') {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            if (theme === 'dark') document.documentElement.classList.add('dark');
          })();
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="pb-[env(safe-area-inset-bottom)]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <div className="animate-page-enter">
        <Outlet />
      </div>
      <Toaster position="top-center" />
    </>
  );
}
