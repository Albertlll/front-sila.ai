import { type ReactNode, useEffect, useRef } from "react";
import s from "./Modal.module.scss";

const Modal: React.FC<{
	children: ReactNode;
	isOpen: boolean;
	modalClose: () => void;
}> = ({ children = null, isOpen, modalClose }) => {
	const modalRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (modalRef.current === null) return;
		if (isOpen) {
			modalRef.current.showPopover();
		} else {
			modalRef.current.hidePopover();
		}
	}, [isOpen]);

	return (
		<div
			popover="auto"
			ref={modalRef}
			className={s.modal}
			onToggle={(e) => {
				if (e.newState === "closed" && modalRef.current) modalClose();
			}}
		>
			{children}
		</div>
	);
};

export default Modal;
