import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          headerStyle: { backgroundColor: "green" },
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{ headerTitle: "User page", title: "User" }}
      />
    </Tabs>
  );
}
