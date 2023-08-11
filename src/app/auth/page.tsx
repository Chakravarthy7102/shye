"use client";

import { useState } from "react";

import { Github } from "@/lib/icons";
import Button from "@/ui/button";

export default function Auth() {
	const [authState, setAuthState] = useState<"signin" | "signup">("signin");
	return (
		<section className="max-w-md flex justify-center items-center h-screen m-auto">
			<div className="w-full flex flex-col items-center bg-zinc-200 mx-auto rounded-lg p-10 text-zinc-900 text-center shadow-2xl shadow-blue-900/25">
				<Github className="h-10 w-10 m-5" />
				{authState === "signup" ? (
					<>
						<h4 className="text-2xl font-bold">Create your Shye account</h4>
						<span className="text-sm m-2">
							Get started with creating private star lists
						</span>
						<Button fullWidth color="secondary" className="mt-5">
							<Github /> Continue with GitHub
						</Button>
						<p className="mt-10 text-sm">
							Already have an account?{" "}
							<span
								className="cursor-pointer"
								onClick={() => setAuthState("signin")}
							>
								<b>Sign in</b>
							</span>
						</p>
					</>
				) : (
					<>
						<h4 className="text-2xl font-bold">Sign in to Shye</h4>
						<span className="text-sm m-2">
							Start creating private star lists
						</span>
						<Button fullWidth color="secondary" className="mt-5">
							<Github /> Continue with GitHub
						</Button>
						<p className="mt-10 text-sm">
							Don't have an account?{" "}
							<span
								className="cursor-pointer"
								onClick={() => setAuthState("signup")}
							>
								<b>Sign up.</b>
							</span>
						</p>
					</>
				)}
			</div>
		</section>
	);
}
