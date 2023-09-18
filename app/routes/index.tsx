import { useLoaderData, type MetaFunction } from "@remix-run/react";
import { type LoaderFunction } from "@remix-run/node";

import { getAppData } from "~/lib/app.server";
import {
	App,
	Backdrop,
	Container,
	Footer,
	Header,
	ButtonLinks,
} from "~/components";
import { type AppDataType, type ItemType } from "~/types";

export const loader: LoaderFunction = async () => {
	let { app, container, backdrop, header, links } = getAppData();

	return { app, container, backdrop, header, links };
};

export const meta: MetaFunction = () => {
	return [{ title: "NewByte" }];
};

export default function Index() {
	let { app, container, backdrop, header, links } =
		useLoaderData<AppDataType>();

	let mainLinks: Array<ItemType> = [];
	let footerLinks: Array<ItemType> = [];

	links.map((link) => {
		if (!link.hidden) {
			if (link.footer) {
				footerLinks.push(link);
			} else {
				mainLinks.push(link);
			}
		}
		return link;
	});

	return (
		<App className={app.className}>
			<Container className={container && container.className}>
				<>
					<Backdrop {...backdrop} />
					<div className="content">
						<Header {...header}></Header>
						<ButtonLinks links={mainLinks} />
						<Footer footerLinks={footerLinks} />
					</div>
				</>
			</Container>
		</App>
	);
}
