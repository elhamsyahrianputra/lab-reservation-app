import { Sidebar } from "@/components/layouts/Sidebar";

export default function SidebarLayout() {
  return (
    <Sidebar.Wrapper>

      <Sidebar.Section title="Dashboard">
        <Sidebar.Item title="Dashboard" icon="dashboard" href="/admin" />
      </Sidebar.Section>

      <Sidebar.Section title="Reservation">
        <Sidebar.Item title="Room" icon="building" href="/reservations" />
        <Sidebar.Item title="Tool" icon="case" href="/equipments" />
      </Sidebar.Section>

      <Sidebar.Section title="Management">
        <Sidebar.Item title="Room" icon="building" href="/reservations" />
      </Sidebar.Section>

      <Sidebar.Section title="Equipments">
        <Sidebar.Item title="Equipment" icon="case" href="/admin/equipments" />
        
      </Sidebar.Section>
    </Sidebar.Wrapper>
  );
}
