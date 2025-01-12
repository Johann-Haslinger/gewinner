import { IoChevronForward } from "react-icons/io5";
import { Note } from "../../common/interfaces";
import { formatDateAdded } from "../../common/utilities";

const NotesList = () => {
  const notes = useNotes();

  return (
    <div className="mt-10">
      <div className="font-semibold text-xl">Notizen</div>
      <div className="mt-1 divide-y dark:divide-white divide-black divide-opacity-5 dark:divide-opacity-10">
        {notes.map((note) => (
          <NoteCell key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;

const useNotes = () => {
  return [
    { id: "1", title: "Einkaufen", date_added: "2023-10-01" },
    { id: "2", title: "Hotel buchen", date_added: "2023-10-02" },
    { id: "3", title: "Zugticket kaufen", date_added: "2023-10-03" },
  ];
};

const NoteCell = ({ note: { title, date_added } }: { note: Note }) => {
  return (
    <div className="py-2 flex justify-between items-center">
      <div>
        <div>{title}</div>
        <div className="text-sm opacity-50">{formatDateAdded(date_added, "short")}</div>
      </div>
      <div className="opacity-50">
        <IoChevronForward />
      </div>
    </div>
  );
};
