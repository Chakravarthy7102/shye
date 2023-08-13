"use client";

import { createElement, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

import classNames from "@/utils/className";

const button = cva(
	[
		"inline-flex justify-center gap-3 items-center",
		"font-semibold px-4 py-2 rounded-md hover:opacity-90 disabled:cursor-not-allowed",
	],
	{
		variants: {
			color: {
				primary: "bg-zinc-200 text-zinc-900 shadow-md shadow-zinc-500",
				secondary: "bg-zinc-900 text-zinc-200 shadow-md shadow-zinc-800",
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

type InferredVariantProps = VariantProps<typeof button>;

export type ButtonProps = (
	| (Omit<JSX.IntrinsicElements["button"], "ref"> & {
			href?: undefined;
	  })
	| (Omit<JSX.IntrinsicElements["a"], "ref" | "href"> & LinkProps)
) &
	InferredVariantProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ color, size, full, children, ...props }, forwardedRef) => {
		const elementType = props.href === undefined ? "button" : "a";
		const element = createElement(
			elementType,
			{
				...props,
				ref: forwardedRef,
				className: classNames(button({ color, size, full }), props.className),
			},
			children
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
