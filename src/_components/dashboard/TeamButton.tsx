import { IconDots, IconLifebuoy, IconLogout, IconPlus, IconSelector, IconSettings } from "@tabler/icons-react";
import { Avatar, Menu, Text, UnstyledButton } from "@mantine/core";
import classes from "./TeamButton.module.css";

const ORGANIZATIONS = [
  {
    name: "Acme Corporation",
    description: "Enterprise",
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  {
    name: "Arachne",
    description: "Pro",
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  {
    name: "Sekiguchi",
    description: "Enterprise",
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  {
    name: "Traxus",
    description: "Enterprise",
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
];

export function TeamButton() {
  return (
    <Menu withArrow width={300} position="right-start" transitionProps={{ transition: "pop" }} withinPortal>
      <Menu.Target>
        <UnstyledButton className={classes.teamSelector}>
          <div className={classes.teamWrapper}>
            <Avatar
              className={classes.teamAvatar}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius="none"
            />
            <div className={classes.teamInfo}>
              <Text size="sm" fw={500} span>
                Acme Corporation
              </Text>
              <Text c="dimmed" size="xs" span>
                Enterprise
              </Text>
            </div>
            <IconSelector size={16} stroke={1.5} aria-hidden />
          </div>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
          <div className={classes.teamWrapper}>
            <Avatar
              radius="none"
              className={classes.teamAvatar}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
            />
            <div className={classes.teamInfo}>
              <Text fw={500} span>
                Acme Corporation
              </Text>
              <Text size="xs" c="dimmed" span>
                Enterprise
              </Text>
            </div>
          </div>
        </Menu.Label>
        <Menu.Divider />
        <Menu.Label>Authorized Organizations</Menu.Label>
        {ORGANIZATIONS.map((organization) => (
          <Menu.Item key={organization.name} leftSection={<Avatar src={organization.avatar} radius="none" />}>
            {organization.name}
          </Menu.Item>
        ))}
        <Menu.Divider />
        <Menu.Item leftSection={<IconPlus size={16} stroke={1.5} />}>Add Organization</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
