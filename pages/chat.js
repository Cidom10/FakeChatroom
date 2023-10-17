import { AppShell, useMantineColorScheme, Space, Button, Divider, Flex, Text, Title, Paper, Stack, Group, TypographyStylesProvider, Box, TextInput, Card } from '@mantine/core';
import { useEffect } from 'react';

export default function HomePage() {
  let {setColorScheme} = useMantineColorScheme()

  useEffect(() => {setColorScheme("light")},[])

  let messages = [
    {delivered: "to",     text: "Hey, is this the correct account for the potential hire?", timeStamp: "3:15 PM"},
    {delivered: "from",   text: "Yes, if you are still hiring. You know my pay.", timeStamp: "3:15 PM"},
    {delivered: "from",   text: "1FakeBtcAddr9876543210AbCd", timeStamp: "3:15 PM"},
    {delivered: "to",     text: "Got it. Here is the location.", timeStamp: "3:15 PM"},
    {delivered: "to",     text: "37.39900637709384, -122.01606714790384", timeStamp: "9:00 AM"},
    {delivered: "from",   text: "Okay, I think I am seeing the plan here. Got a time and date?", timeStamp: "3:15 PM"},
    {delivered: "to",     text: "The thought is somewhere in a few weeks. I am thinking in the range 07/15-07/22. Around evening/night time, ya know?", timeStamp: "3:15 PM"},
    {delivered: "from",     text: "Understood. If you want that more specific, just let me know. ", timeStamp: "3:15 PM"},
  ]

  return (

    <AppShell
      navbar={{width: 250, breakpoint: "sm"}}
      mah={"95vh"}
      style={{ overflow: "hidden" }}
    >

      <AppShell.Navbar p={"md"}>
        <Flex justify={"center"} align={"center"}>
          <Title>ChatRoom</Title>
        </Flex>
        <Divider mb={"md"}/>
        <Stack align={"center"}>
          <Card w={"95%"} radius={"md"} withBorder bg={"lightgray"}>
            <Title order={6} ta={"center"}>Bad Guy</Title>
            <Text c={"dimmed"}>Last: July 20, 2019</Text>
          </Card>
        </Stack>
      </AppShell.Navbar>


      <AppShell.Main m={"xl"} mb={0} style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Stack style={{flex: 1, overflowY: 'scroll', padding: 20 }}>  
          {messages.map((msg, index) => {
            return (
              <Paper withBorder radius="md" 
                maw={"40%"} 
                p={"lg"}
                style={{
                  backgroundColor: (msg.delivered == "from") ? "lightgray" : "deepskyblue",
                  alignSelf: (msg.delivered == "to") ? "flex-end" : "flex-start"
                }}
              >
                <Group>
                  <div>
                    <Text fz="sm">{msg.delivered === "from" ? "Bad guy" : "Suspect"}</Text>
                    <Text fz="xs">
                      {msg.timeStamp}
                    </Text>
                  </div>
                </Group>
                <TypographyStylesProvider>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<p>${msg.text}</p>`
                    }}
                  />
                </TypographyStylesProvider>
              </Paper>
            )
          })}
          <Space h={"85px"}/>
        </Stack>
        <Box style={{
          position: "absolute",
          bottom: 0,
          height: "70px",
          width: "80vw",
          borderTop: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "40px",
          backgroundColor: "White"
          
        }}>
          <TextInput 
            w={"500px"}
            style={{flexGrow: 1}}
            pr={"lg"}
          />
          <Button w={"100px"} color={"deepskyblue"}>Send</Button>
        </Box>
      </AppShell.Main>

    </AppShell>
  );
}
