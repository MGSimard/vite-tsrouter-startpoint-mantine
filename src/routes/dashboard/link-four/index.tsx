import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/link-four/")({
  component: PageDashboardLinkFour,
  loader: () => ({ crumb: "Link Four" }),
});

function PageDashboardLinkFour() {
  return <div className="max-w-8xl w-full mx-auto flex flex-1 flex-col gap-4 p-6">Hello "/dashboard/link-four/"!</div>;
}
