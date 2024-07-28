import Button from "./Button";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex flex-col gap-3 font-medium font-jacques w-80">
      <h3 className="text-2xl ">Delete {resourceName}</h3>
      <p className="mb-3 text-gray-500">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
