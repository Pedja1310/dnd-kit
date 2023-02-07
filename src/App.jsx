import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { Container } from "react-bootstrap";
import SortableItem from "./SortableItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { id: "1", name: "JS" },
    { id: "2", name: "Python" },
    { id: "3", name: "TS" },
  ]);

  function handleDragEnd(e) {
    const { active, over } = e;

    if (active.id !== over.id) {
      setLanguages((prevState) => {
        const activeIndex = prevState.map((el) => el.id).indexOf(active.id);
        const overIndex = prevState.map((el) => el.id).indexOf(over.id);

        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className="m-auto">
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          <div className="App">
            {languages.map((language, index) => (
              <SortableItem language={language} key={index} />
            ))}
          </div>
        </SortableContext>
      </Container>
    </DndContext>
  );
}

export default App;
