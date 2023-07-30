import { forwardRef } from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				{...props}
				className="bg-zinc-800 px-4 py-2 text-zinc-300 rounded-md w-fit text-sm hover:opacity-70"
			>
				{children}
			</button>
		);
	}
);

export default Button;
