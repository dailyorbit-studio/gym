import PageTransition from "@/components/PageTransition";

/**
 * Templates remount on every navigation, which gives the page-transition
 * animation a fresh `initial` state each time a route changes.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
