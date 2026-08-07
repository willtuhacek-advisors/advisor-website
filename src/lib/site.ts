export const repoName = "advisor-website";

export const basePath = process.env.GITHUB_ACTIONS === "true" ? `/${repoName}` : "";
