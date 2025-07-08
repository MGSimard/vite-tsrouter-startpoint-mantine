import { IconDots, IconLifebuoy, IconLogout, IconSettings } from "@tabler/icons-react";
import { Avatar, Menu, Text, UnstyledButton } from "@mantine/core";
import classes from "./TeamButton.module.css";

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
            <IconDots size={16} stroke={1.5} aria-hidden />
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
                Nancy Eggshacker
              </Text>
              <Text size="xs" c="dimmed" span>
                neggshaker@mantine.dev
              </Text>
            </div>
          </div>
        </Menu.Label>
        <Menu.Divider />
        <Menu.Label>User Options</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>Account settings</Menu.Item>
        <Menu.Item leftSection={<IconLifebuoy size={16} stroke={1.5} />}>Help Center</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
