import { LoaderFunction, redirect } from "remix";
import { AppDataType, getAppData } from "~/lib/app.server";

export const loader: LoaderFunction = async ({ params }) => {
	let data: AppDataType = await getAppData();
	let page = data.pages.filter((page) => page.url === params.url)[0];

	return redirect(page.redirect);
};
