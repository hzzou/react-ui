import React from "react";
export interface ModalProps {
    title: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
    width: number | string;
    height: number | string;
    modal: boolean;
    onOpen: (value: boolean) => void;
    onClose: (value: boolean) => void;
}
export interface ModalForward {
    handleOpen: () => void;
    handleClose: (event: React.MouseEvent) => void;
}
