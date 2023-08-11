import { createElement, forwardRef } from "react";

import { VariantProps, cva } from "class-variance-authority";

const buttonClasses = cva(
	"inline-flex justify-center gap-3 items-center font-semibold px-4 py-2 rounded-md hover:opacity-80 ",
	{
		variants: {
			color: {
				primary: "bg-zinc-200 text-zinc-900 shadow-md shadow-zinc-500",
				secondary: "bg-zinc-900 text-zinc-200 shadow-md shadow-zinc-800",
			},
			fullWidth: {
				true: "w-full",
			},
			size: {
				sm: "text-sm",
				md: "text-md",
				lg: "text-lg",
			},
		},
		defaultVariants: {
			color: "primary",
			fullWidth: false,
			size: "md",
		},
	}
);

type InferredVariantProps = VariantProps<typeof buttonClasses>;

export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> &
	Omit<JSX.IntrinsicElements["a"], "ref"> &
	InferredVariantProps & {
		href?: string;
	};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
	({ children, ...props }, forwardedRef) => {
		const { className, color, size, fullWidth } = props;
		const element = props.href !== undefined ? "a" : "button";

		return createElement(
			element,
			{
				...props,
				forwardedRef,
				className: buttonClasses({
					color,
					fullWidth,
					size,
					className,
				}),
			},
			children
		);
	}
);

export default Button;
