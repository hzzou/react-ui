import React from "react";

export interface DialogProps {
    showDialog: boolean;
    title: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
    width: number | string;
    height: number | string;
    modal: boolean;
    onOpen: () => void;
    onClose: () => void;
}
