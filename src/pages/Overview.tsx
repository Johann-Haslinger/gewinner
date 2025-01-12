import { Header, View } from "../common/components";
import { CountdownCard } from "../components/overview";

const Overview = () => {
  return (
    <View>
      <Header title="Overview" subtitle="Welcome to your dashboard" />

      <CountdownCard />
    </View>
  );
};

export default Overview;
