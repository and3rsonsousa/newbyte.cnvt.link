import { ReactChild } from "react";
import { Link } from "remix";
import { ButtonLinkType } from "~/lib/app.server";

export default function ButtonLinks({ links }: { links: ButtonLinkType[] }) {
	return (
		<div className="links">
			{links.map((link, index) => (
				<ButtonLink {...link} key={index} />
			))}
		</div>
	);
}

export function ButtonLink({
	name,
	url,
	className = "",
	type = "link",
	primary = false,
}: ButtonLinkType) {
	if (type === "external") {
		return (
			<a
				href={url}
				className={`button ${
					primary ? "button-primary" : ""
				} ${className}`}
				target="_blank"
			>
				{name}
			</a>
		);
	} else if (type === "download") {
		return (
			<a
				href={url}
				download
				className={`button ${
					primary ? "button-primary" : ""
				} ${className}`}
				target="_blank"
			>
				{name}
			</a>
		);
	}

	return (
		<Link
			to={url}
			className={`button ${primary ? "button-primary" : ""} ${className}`}
		>
			{name}
		</Link>
	);
}
