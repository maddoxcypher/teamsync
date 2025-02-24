import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TaskType } from "@/types/api.type";
import { useState } from "react";
import EditTaskForm from "./edit-task-form";

const EditTaskDialog = (props: { task: TaskType; trigger: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <EditTaskForm task={props.task} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog; 