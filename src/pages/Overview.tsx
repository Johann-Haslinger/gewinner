import { Header, View } from "../common/components";
import { CountdownCard, SavingsCard, ToDoCard } from "../components/overview";

const Overview = () => {
  return (
    <View>
      <Header title="Overview" subtitle="Welcome to your dashboard" />
      <CountdownCard />
      <SavingsCard />
      <ToDoCard />
    </View>
  );
};

export default Overview;
