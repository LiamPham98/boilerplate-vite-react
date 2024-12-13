import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import { Button, Flex, Image, Paper } from "@mantine/core";

import Avatar from "@/assets/images/avatar.png";

import { Text } from "../atoms/Text";

export const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <Paper py={12} className="mx-auto flex max-w-screen-xl items-center gap-6">
      <Flex align="center">
        <Image src={Avatar} alt="avatar" className="size-14" />
        <a
          href="https://www.linkedin.com/in/trungpham98/"
          target="_blank"
          rel="noreferrer"
        >
          <Text size="heading-3">{`I'm.Liam`}</Text>
        </a>
      </Flex>

      <Flex align="center" gap="md" ml="auto">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {!isSignedIn && (
          <Button color="#000000" radius="md">
            <SignUpButton />
          </Button>
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Flex>
    </Paper>
  );
};
