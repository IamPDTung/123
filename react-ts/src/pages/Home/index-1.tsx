import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Button from "../../shared/components/Button";
import { InputField } from "../../shared/Form";

const schema = z.object({
  name: z.string().min(1),
  age: z.number(),
});
type Schema = z.infer<typeof schema>;

interface IProps {}

const HomePage = ({}: IProps) => {
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
  };
  return (
    <>
      home
      <Button disabled>123</Button>
      <Button priority="normal">123</Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField {...register("name")} />
        <input {...register("age", { valueAsNumber: true })} type="number" />
        <input type="submit" />
      </form>
      <InputField />
    </>
  );
};

export { HomePage };
