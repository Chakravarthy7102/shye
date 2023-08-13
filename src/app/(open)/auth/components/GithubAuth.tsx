"use client";

import { useEffect, useState } from "react";

import { Github } from "@/lib/icons";
import Button from "@/ui/button";
import Database from "@/database";
import { signIn } from "next-auth/react";

type AuthMode = "signin" | "signup";

const textConfig = {
	signin: {
		mainText: "Sign in to Shye",
		subText: "Start creating private star lists",
		question: "Don't have an account?",
		questionAction: "Sign up",
	},
	signup: {
		mainText: "Create your Shye account",
		subText: "Get started with creating private star lists",
		question: "Already have an account?",
		questionAction: "Sign in",
	},
};

export function GithubAuth() {
	const [authMode, setAuthMode] = useState<AuthMode>("signin");

	async function handleGithubAuth() {}

	return (
		<>
			<h4 className="text-2xl font-bold">{textConfig[authMode].mainText}</h4>
			<span className="text-sm m-2">{textConfig[authMode].subText}</span>
			<Button
				onClick={() => signIn("github")}
				full
				color="secondary"
				className="mt-5"
			>
				<Github /> Continue with GitHub
			</Button>
			<p className="mt-10 text-sm">
				{textConfig[authMode].question}{" "}
				<span
					className="cursor-pointer"
					onClick={() =>
						setAuthMode(authMode === "signin" ? "signup" : "signin")
					}
				>
					<b>{textConfig[authMode].questionAction}</b>
				</span>
			</p>
		</>
	);
}
