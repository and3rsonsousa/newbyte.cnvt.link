import { type LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getAppData } from "~/lib/app.server";
import { type AppDataType } from "~/types";

export const loader = async ({ params }: LoaderFunctionArgs) => {
	let data: AppDataType = await getAppData();
	let link = data.links.filter((link) => link.url === params.url)[0];

	if (!link) throw new Error("Não existe Link");
	if (!link.redirect) throw new Error("Não existe Redirect");
	return redirect(link.redirect);
};
