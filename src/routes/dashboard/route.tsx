import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Shell } from "@/_components/dashboard/Shell";

export const Route = createFileRoute("/dashboard")({
  component: LayoutDashboard,
  loader: () => ({ crumb: "Dashboard" }),
});

function LayoutDashboard() {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}
