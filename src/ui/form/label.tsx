import { forwardRef } from "react";

type LabelProps = Omit<React.ComponentPropsWithoutRef<"label">, "children"> & {
	required?: boolean;
	text: string;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ text, required, ...props }, forwardedRef) => {
		return (
			<label ref={forwardedRef} {...props} className="py-2 text-zinc-300 w-fit text-sm">
				{text}
				{required ? <span>&lowast;</span> : null}
			</label>
		);
	}
);

Label.displayName = "Label"

export default Label;
