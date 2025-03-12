function InputField(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}
export { InputField };
