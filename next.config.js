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
	reactStrictMode: false,
};

module.exports = nextConfig;
