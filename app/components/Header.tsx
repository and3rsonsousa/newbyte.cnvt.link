import { ReactChild } from "react";
import { HeaderType } from "~/lib/app.server";

export default function Header({ name, logo, className, excerpt }: HeaderType) {
	return (
		<div className={`header ${className}`}>
			{logo && (
				<div className={logo.className}>
					{" "}
					{logo.url ? <img src={logo.url} /> : logo.component}
				</div>
			)}
			{name && <h1 className={name.className}>{name.title}</h1>}
			{excerpt && <h3>{excerpt}</h3>}
		</div>
	);
}
