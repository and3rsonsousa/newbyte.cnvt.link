import { BackdropType } from "~/lib/app.server";

export default function Backdrop({ className, url }: BackdropType) {
	return (
		<div className={`backdrop ${className}`}>
			{url && <img src={url.path} className={url.className} />}
		</div>
	);
}
