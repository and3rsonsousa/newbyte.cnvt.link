import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { AppDataType, getAppData } from "~/lib/app.server";

import {
	App,
	Backdrop,
	Container,
	Footer,
	Header,
	ButtonLinks,
} from "~/components";

export const meta: MetaFunction = ({ data }: { data: AppDataType }) => {
	return { title: data.app.name || "cnvt.link" };
};

export const loader: LoaderFunction = async () => {
	let data = getAppData();
	return data;
};

export default function Index() {
	let { app, container, header, backdrop, links, footer } =
		useLoaderData<AppDataType>();

	return (
		<App className={app.className}>
			<Container className={container && container.className}>
				<>
					<Backdrop {...backdrop} />
					<div className="content">
						<Header {...header}></Header>
						<ButtonLinks links={links} />
						<Footer {...footer} />
					</div>
				</>
			</Container>
		</App>
	);
}
