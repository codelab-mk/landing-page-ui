// app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // Fallback only – middleware will handle most cases
  redirect("/en");
}
