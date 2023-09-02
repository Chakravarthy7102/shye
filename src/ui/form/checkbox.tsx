import classNames from "@/utils/className";

type CheckboxProps = Omit<JSX.IntrinsicElements["input"], "type">;

export default function Checkbox({ className, ...props }: CheckboxProps) {
	return (
		<input
			type="checkbox"
			className={classNames("cursor-pointer border-none", className)}
			{...props}
		/>
	);
}
