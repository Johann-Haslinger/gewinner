import { Header, View } from "../common/components";
import { NotesList, TodosCard } from "../components/notes";

const Notes = () => {
  return (
    <View>
      <Header title="Notizen" subtitle="Notizen und Todos für die Reise" />
      <TodosCard />
      <NotesList />
    </View>
  );
};

export default Notes;
