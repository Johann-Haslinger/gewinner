import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeColorSwitcher } from "./common/components";
import { useDisableZoomAndScroll } from "./common/hooks";
import { TabBar } from "./components/navigation";
import { BudgetTracker, Journal, Notes, NotFound, Overview, TripPlanner } from "./pages";

const App = () => {
  useDisableZoomAndScroll();

  return (
    <BrowserRouter>
      <ThemeColorSwitcher />

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/budget-tracker" element={<BudgetTracker />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <TabBar />
    </BrowserRouter>
  );
};

export default App;
