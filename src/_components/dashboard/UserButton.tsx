import { IconDots, IconLifebuoy, IconLogout, IconPlus, IconSettings } from "@tabler/icons-react";
import { Avatar, Menu, Text, UnstyledButton } from "@mantine/core";
import classes from "./UserButton.module.css";

export function UserButton() {
  return (
    <Menu withArrow width={300} position="right-end" transitionProps={{ transition: "pop" }} withinPortal>
      <Menu.Target>
        <UnstyledButton className={classes.user}>
          <div className={classes.userWrapper}>
            <Avatar
              className={classes.userAvatar}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius="sm"
            />
            <div className={classes.userInfo}>
              <Text size="sm" fw={500} span>
                Harriette Spoonlicker
              </Text>
              <Text c="dimmed" size="xs" span>
                hspoonlicker@outlook.com
              </Text>
            </div>
            <IconDots size={16} stroke={1.5} aria-hidden />
          </div>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
          <div className={classes.userWrapper}>
            <Avatar
              className={classes.userAvatar}
              radius="xl"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
            />
            <div className={classes.userInfo}>
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
        <Menu.Item leftSection={<IconPlus size={16} stroke={1.5} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
