/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "supertokens.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
