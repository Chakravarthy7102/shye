import classNames from "@/utils/className";
import React, { createContext, useContext, useState } from "react";

type DropdownMenuContextValue = {
	isMenuOpen: boolean;
	closeMenu: () => void;
	openMenu: () => void;
};

const DropdownMenuContext = createContext<DropdownMenuContextValue | undefined>(
	undefined
);

function useDropdownMenuContext() {
	const context = useContext(DropdownMenuContext);

	if (context === undefined) {
		throw Error(
			"useDropdownMenuContext is used outside the DropdownMenuContext provider."
		);
	}

	return context;
}

type DropdownMenuProps = {
	children: React.ReactNode;
	className?: string;
};

export function DropdownMenu(props: DropdownMenuProps) {
	const { children, className = "" } = props;

	const [isMenuOpen, setIsShowMenu] = useState(false);

	function closeMenu() {
		setIsShowMenu(false);
	}

	function openMenu() {
		setIsShowMenu(true);
	}

	return (
		<DropdownMenuContext.Provider value={{ isMenuOpen, closeMenu, openMenu }}>
			<div className={classNames("relative", className)}>{children}</div>
		</DropdownMenuContext.Provider>
	);
}

type DropdownMenuTriggerProps = {
	children: React.ReactNode;
};

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
	const { children } = props;

	const { openMenu } = useDropdownMenuContext();

	if (!React.isValidElement(children)) {
		throw Error(
			"Seems like you have invalid react element or array of elements, Please pass a valid react node"
		);
	}

	return React.cloneElement(children, {
		...children.props,
		onFocus: () => openMenu(),
	});
}

type ExtraProps = (props: { closeMenu: () => void }) => React.ReactNode;

type MenuContentProps = {
	children: React.ReactNode | ExtraProps;
	className?: string;
	position?: Partial<{
		top: string;
		bottom: string;
		left: string;
		right: string;
	}>;
};

export default function DropdownMenuContent({
	children,
	position,
	className = "",
}: MenuContentProps) {
	const { isMenuOpen, closeMenu } = useDropdownMenuContext();

	if (isMenuOpen === false) {
		return null;
	}

	return (
		<div
			style={position}
			className={classNames(
				"absolute min-w-[12rem] max-h-52 overflow-auto no-scrollbar right-0 z-10 bg-zinc-950 border border-blue-500/20 rounded-md pt-5 pb-2 px-2 animate-fade-in shadow-2xl shadow-blue-950/50",
				className
			)}
		>
			<div className="fixed inset-0 z-[-1]" onClick={closeMenu} />
			{typeof children === "function" ? children({ closeMenu }) : children}
		</div>
	);
}

type MenuItemActionType = "muted" | "danger";

type DropdownMenuItemProps = {
	children: React.ReactNode;
	type?: MenuItemActionType;
	closeMenuOnclick?: boolean;
} & Pick<JSX.IntrinsicElements["div"], "className" | "onClick">;

export function DropdownMenuItem({
	children,
	className = "",
	type,
	closeMenuOnclick = true,
	...props
}: DropdownMenuItemProps) {
	const { closeMenu } = useDropdownMenuContext();
	return (
		<div
			{...props}
			onClick={(e) => {
				if (type !== "muted") {
					if (props.onClick !== undefined) {
						props.onClick(e);
					}
					if (closeMenuOnclick) {
						closeMenu();
					}
				}
			}}
			className={`flex items-center text-sm px-2 py-3 rounded-md cursor-pointer ${actionTypeToCssMapper(
				type
			)} ${className}`}
		>
			{children}
		</div>
	);
}

function actionTypeToCssMapper(type: MenuItemActionType | undefined) {
	switch (type) {
		case "muted":
			return "cursor-not-allowed text-zinc-500";
		case "danger":
			return "text-red-400 hover:bg-red-400/10";
		default:
			return "hover:bg-blue-950/50 ";
	}
}
