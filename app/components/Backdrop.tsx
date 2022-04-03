import { BackdropType } from "~/types";

export default function Backdrop({ className, file }: BackdropType) {
	console.log(file);

	return (
		<div className={`backdrop ${className ? className : ""}`}>
			{file && <img src={file.path} className={file.className} alt="" />}
		</div>
	);
}
