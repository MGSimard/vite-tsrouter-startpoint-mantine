import { AppShell, Burger, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Shell.module.css";
import { UserButton } from "./UserButton";
import { TeamButton } from "./TeamButton";

export function Shell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md">
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md" className={classes.navbar}>
        <div className={classes.navHead}>
          <TeamButton />
        </div>
        <Divider />
        <div className={classes.navContent}>Content</div>
        <Divider />
        <UserButton />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
