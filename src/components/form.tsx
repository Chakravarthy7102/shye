"use client";

import { useState } from "react";

import { getStargazers } from "@/api/github";
import Label from "@/ui/form/label";
import Input from "@/ui/form/input";
import Button from "@/ui/button";

export default function Form() {
	const [accessToken, setAccessToken] = useState<undefined | string>(undefined);
	const [data, setData] = useState("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!accessToken || accessToken.length < 10) {
			alert("Please pass right and valid github access token.");
		}

		getStargazers(accessToken!)
			.then((data) => {
				setData(data);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="flex md:m-auto my-auto mx-5 max-w-xl rounded-lg border border-zinc-600 p-5">
			<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<Label
						required
						text="Github Access Token"
						htmlFor="github_access_token"
					/>
					<Input
						required
						placeholder="Access Token"
						type="text"
						name="github_access_token"
						id="github_access_token"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setAccessToken(e.currentTarget.value);
						}}
					/>
				</div>
				<h4 className="text-lg">
					Request <span className="font-mono text-zinc-500">JSON</span> response
					will be displayed here below.
				</h4>
				<p className="min-h-[8rem] w-full p-3 bg-zinc-700 text-zinc-300 rounded-md overflow-auto">
					{JSON.stringify(data, null, 2)}
				</p>
				<Button className="rounded-md w-fit" type="submit">
					Get Data
				</Button>
			</form>
		</div>
	);
}
