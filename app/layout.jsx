
export const metadata = {
  title: "Personal Portfolio",
  description: "AI-powered personal website with Supabase feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
