import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeColorSwitcher } from "./common/components";
import { useDisableZoomAndScroll } from "./common/hooks";
import { TabBar } from "./components/navigation";
import { useStateContext } from "./contexts";
import { BudgetTracker, Journal, Login, Notes, NotFound, Overview, TripPlanner } from "./pages";

const App = () => {
  const { userId } = useStateContext();

  useDisableZoomAndScroll();

  return (
    <BrowserRouter>
      <ThemeColorSwitcher />

      {!userId ? (
        <Login />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/budget-tracker" element={<BudgetTracker />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <TabBar />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
