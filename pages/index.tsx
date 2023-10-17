import { AppShell, useMantineColorScheme, Button, Divider, Flex, Text, Title, Paper, Stack, Group, TypographyStylesProvider, Box, TextInput, Card, PasswordInput, Space } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function HomePage() {
  let {setColorScheme} = useMantineColorScheme()

  useEffect(() => {setColorScheme("light")},[])

  let messages = [
    {delivered: "to",   text: "Another test Another test Another test Another test Another test", timeStamp: "3:15 PM"},
    {delivered: "from", text: "Test message", timeStamp: "9:00 AM"},
    {delivered: "to",   text: "Another test", timeStamp: "3:15 PM"},
  ]
  
  let router = useRouter();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    if (email !== "test@email.com" || pass !== "testpass") {
      setErr("Incorrect email or password.")
    } else {
      document.cookie = ""
      router.push("/chat")
    }
  }

  return (

    <Stack w={"99vw"} h={"57vh"} justify="center" align='center'>
      <Card w={"33vw"} withBorder>
        <Title ta={"center"}>THE ChatRoom</Title>
        <Space h={"md"}/>
        <TextInput label="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
        <Space h={"md"}/>
        <PasswordInput label="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
        <Text ta={"center"} c={"red"}>{err}</Text>
        <Button mx={"auto"} mt={"lg"} w={"35%"} onClick={handleSubmit}>Sign In</Button>
      </Card>
    </Stack>
  );
}
