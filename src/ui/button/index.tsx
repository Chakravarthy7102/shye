"use client";

import { createElement, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

import classNames from "@/utils/className";
import { Loader } from "@/lib/icons";

const button = cva(
	[
		"inline-flex justify-center gap-3 items-center",
		"font-semibold px-4 py-2 rounded-md hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70",
	],
	{
		variants: {
			color: {
				primary: "bg-zinc-200 text-zinc-900 shadow-md shadow-zinc-500",
				secondary: "bg-zinc-900 text-zinc-200 shadow-md shadow-zinc-800",
				muted: "bg-transparent hover:bg-zinc-900 shadow-none",
			},
			full: {
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
			full: false,
			size: "md",
		},
	}
);

type InferredVariantProps = VariantProps<typeof button> & {
	isLoading?: boolean;
};

export type ButtonProps = (
	| (Omit<JSX.IntrinsicElements["button"], "ref"> & {
			href?: undefined;
	  })
	| (Omit<JSX.IntrinsicElements["a"], "ref" | "href"> & LinkProps)
) &
	InferredVariantProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ color, size, full, children, isLoading, ...props }, forwardedRef) => {
		const elementType = props.href === undefined ? "button" : "a";

		const element = createElement(
			elementType,
			{
				...props,
				ref: forwardedRef,
				className: classNames(button({ color, size, full }), props.className),
			},
			<>
				{isLoading ? <Loader className="animate-spin h-5 w-5 -mr-2" /> : null}
				{children}
			</>
		);

		return props.href === undefined ? (
			element
		) : (
			<Link passHref href={props.href} legacyBehavior>
				{element}
			</Link>
		);
	}
);

export default Button;
