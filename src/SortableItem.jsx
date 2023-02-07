import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "react-bootstrap";

const SortableItem = ({ language }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: language.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      body
      ref={setNodeRef}
      className="mb-3"
      style={style}
      {...attributes}
      {...listeners}
    >
      {language.name}
    </Card>
  );
};

export default SortableItem;
