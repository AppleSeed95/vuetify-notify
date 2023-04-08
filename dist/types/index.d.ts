import { App, Component } from "vue";
import plugin from "../index";
export default plugin;
export * from "../index";
declare module 'vuetify-notifier';
declare module "vue" {
    interface ComponentCustomProperties {
        $notifier: Notifier;
    }
}
declare module '#app' {
    interface NuxtApp {
        $notifier: Notifier;
    }
}
export interface NotifierOptions {
    default?: NotifierDefaultOptions;
    dialogOptions?: NotifierDialogOptions;
    toastOptions?: NotifierToastOptions;
    componentOptions?: NotifierComponentOptions;
}
export interface NotifierDefaultOptions {
    defaultColor?: string;
    defaultIcon?: string;
    successIcon?: string;
    infoIcon?: string;
    warningIcon?: string;
    errorIcon?: string;
}
export interface NotifierMountComponent {
    component: Component;
    app: App;
    content: string | Component | NotifierContent;
    status: string;
    options: NotifierDialogOptions | NotifierToastOptions | NotifierComponentOptions;
}
export interface NotifierDialogOptions {
    transition?: string;
    width?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    textAlign?: "start" | "center" | "end";
    duration?: number;
    defaultColor?: string;
    defaultIcon?: string;
    successIcon?: string;
    infoIcon?: string;
    warningIcon?: string;
    errorIcon?: string;
    showDivider?: boolean;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    dialogProps?: Record<string, any>;
    cardProps?: Record<string, any>;
    buttonProps?: Record<string, any>;
    primaryButtonProps?: Record<string, any>;
    secondaryButtonProps?: Record<string, any>;
    handleCancel?: 'resolve' | 'reject' | 'silent';
    prompt?: boolean;
    inputProps?: Record<string, any>;
    alert?: boolean;
}
export interface NotifierToastOptions {
    defaultColor?: string;
    defaultIcon?: string;
    successIcon?: string;
    infoIcon?: string;
    warningIcon?: string;
    errorIcon?: string;
    toastProps?: Record<string, string | number | boolean>;
}
export interface NotifierComponentOptions {
    transition?: string;
    width?: number | string;
    height?: number | string;
    dialogProps?: Record<string, string | number | boolean>;
    componentProps?: Record<string, string | number | boolean | object>;
    existsButton?: boolean;
}
export interface Notifier {
    confirm(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | {
        success: Promise<ConfirmResult>;
    };
    confirmSuccess(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | {
        success: Promise<ConfirmResult>;
    };
    confirmInfo(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | {
        success: Promise<ConfirmResult>;
    };
    confirmWarning(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | {
        success: Promise<ConfirmResult>;
    };
    confirmError(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | {
        success: Promise<ConfirmResult>;
    };
    prompt(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | {
        success: Promise<ConfirmResult>;
    };
    alert(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | {
        success: Promise<ConfirmResult>;
    };
    toast(content: string | NotifierContent, status?: string, options?: NotifierToastOptions): void;
    component(content: string | NotifierContent | Component, options?: NotifierComponentOptions): void;
}
export interface NotifierContent {
    title?: string;
    text?: string;
}
export interface NotifierComponent {
    title?: string;
    component?: string;
}
export type ConfirmResult = boolean | string | object | any;
export interface NuxtNotifierConfig {
    dialog?: NotifierDialogOptions;
    toast?: NotifierToastOptions;
}
