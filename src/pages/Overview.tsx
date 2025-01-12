import { Header, View } from "../common/components";
import { CountdownCard, SavingsCard } from "../components/overview";

const Overview = () => {
  return (
    <View>
      <Header title="Overview" subtitle="Welcome to your dashboard" />
      <CountdownCard />
      <SavingsCard />
    </View>
  );
};

export default Overview;
