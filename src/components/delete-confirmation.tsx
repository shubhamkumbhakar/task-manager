import Button from "./buttons/button";

type Props = {
  confirmationMessage: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteConfirmation = ({
  confirmationMessage,
  onConfirm,
  onCancel,
}: Props) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-black">Delete Task</h2>
      <div className="h-6" />
      <p className="text-black">{confirmationMessage}</p>
      <p className="text-gray-500 italic">
        Note: This action cannot be undone.
      </p>
      <div className="h-6" />
      <div className="flex space-x-4">
        <Button variant="danger" onClick={onConfirm}>
          Yes, Delete
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
