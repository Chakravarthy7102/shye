import { forwardRef } from "react";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
	(props, forwardedRef) => {
		return (
			<input
				ref={forwardedRef}
				{...props}
				className="bg-zinc-800 px-4 py-2 text-zinc-300 rounded-md text-sm hover:opacity-70"
			/>
		);
	}
);

export default Input;
